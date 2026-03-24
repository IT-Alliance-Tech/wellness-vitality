import Hero from "@/components/sections/home/Hero";
import WhyChoose from "@/components/sections/home/WhyChoose";
import Services from "@/components/sections/home/Services";
import IVTherapy from "@/components/sections/home/IVTherapy";
import IVScience from "@/components/sections/home/IVScience";
import MobileHealthcare from "@/components/sections/home/MobileHealthcare";
import BookingOverview from "@/components/sections/home/BookingOverview";
import Newsletter from "@/components/sections/home/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <WhyChoose />
      <Services />
      <IVTherapy />
      <IVScience />
      <MobileHealthcare />
      <BookingOverview />
      <Newsletter />
    </main>
  );
}
