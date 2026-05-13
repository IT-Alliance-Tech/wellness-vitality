import { NextResponse } from 'next/server';
import { sendDetailedBookingAdminMail, sendDetailedBookingUserMail } from '@/app/services/emailService';
import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const nurseId = searchParams.get('nurseId');

    if (!date || !nurseId) {
      return NextResponse.json({ success: false, error: 'Date and nurseId are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('bookings')
      .select('selected_time')
      .eq('selected_date', date)
      .eq('nurse_id', nurseId);

    if (error) throw error;

    const bookedSlots = data.map(b => b.selected_time);

    return NextResponse.json({ success: true, bookedSlots });
  } catch (err) {
    console.error('GET API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      selectedServices = [],
      selectedPackages = [],
      appointmentType = null,
      userDetails = {},
      selectedDate = '',
      selectedTime = '',
      selectedNurse = null,
      total = 0
    } = data;

    const isTeleconsultation = appointmentType?.id === 'teleconsultation';

    // 1. Send Admin Email
    const adminResponse = await sendDetailedBookingAdminMail({
      userDetails,
      appointmentType,
      selectedPackages,
      selectedDate,
      selectedTime,
      total,
      isTeleconsultation,
      selectedNurse
    });

    if (adminResponse.error) {
      console.error('Resend Admin Booking Error:', adminResponse.error);
      throw new Error('Failed to send admin notification');
    }

    // 2. Send User Email
    if (userDetails.email) {
      const userResponse = await sendDetailedBookingUserMail({
        userDetails,
        appointmentType,
        selectedPackages,
        selectedDate,
        selectedTime,
        total,
        isTeleconsultation,
        selectedNurse
      });

      if (userResponse.error) {
        console.warn('Resend User Booking Error (Non-critical):', userResponse.error);
      }
    }

    // 3. Save to Supabase (Non-teleconsultation)
    if (!isTeleconsultation && selectedDate && selectedTime && selectedNurse?.id) {
      console.log('Attempting to save booking to Supabase:', {
        selected_date: selectedDate,
        selected_time: selectedTime,
        nurse_id: selectedNurse.id
      });

      const { error: dbError } = await supabase
        .from('bookings')
        .insert([{
          selected_date: selectedDate,
          selected_time: selectedTime,
          nurse_id: selectedNurse.id,
          user_email: userDetails.email,
          user_name: userDetails.name,
          appointment_type: appointmentType.id,
          total: total
        }]);

      if (dbError) {
        console.error('Supabase Insert Error:', dbError);
        // Throwing here so the user knows the booking didn't persist
        throw new Error(`Database save failed: ${dbError.message}`);
      }
      
      console.log('Successfully saved to Supabase');
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
