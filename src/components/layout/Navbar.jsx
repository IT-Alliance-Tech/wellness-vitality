"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Logo from '../../../public/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-2 md:py-4">

      {/* CONTAINER */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Wellness Vitality Australia"
            className="h-9 sm:h-10 md:h-10 lg:h-12 w-auto"
            width={200}
            height={48}
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">

          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              {[
                { label: 'Health Assessments', href: '/services/health-assessments' },
                { label: 'Preventative Health & Wellness', href: '/services/preventative-health' },
                { label: 'Aged Care & NDIS Nursing', href: '/services/aged-care-ndis' },
                { label: 'IV Infusions', href: '/services/iv-infusions' },
                { label: 'Blood Collection', href: '/services/blood-collection' },
                { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
                { label: 'Corporate Health Services', href: '/services/corporate-health' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3b3f69]/5 hover:text-[#3b3f69] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/training" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Training
          </Link>

          <Link href="/booking" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Booking
          </Link>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            About Us
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#ca1254] transition">
            Contact Us
          </Link>
        </div>

        {/* CTA + MENU */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* BUTTON */}
          <Button
            href="/booking"
            variant="primary"
            className="w-[100px] md:w-[130px] px-2 py-1.5 md:px-4 md:py-3 text-[11px] md:text-sm"
          >
            Book Now
          </Button>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden p-2 text-[#3b3f69]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-auto" style={{ maxHeight: 'calc(100vh - 90px)' }}>
          <div className="px-4 py-6 space-y-6">

            <Link href="/" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="space-y-4">
              <div className="text-base font-medium text-gray-800 border-b border-gray-100 pb-2">
                Services
              </div>
              <div className="pl-4 space-y-4">
                {[
                  { label: 'Health Assessments', href: '/services/health-assessments' },
                  { label: 'Preventative Health & Wellness', href: '/services/preventative-health' },
                  { label: 'Aged Care & NDIS Nursing', href: '/services/aged-care-ndis' },
                  { label: 'IV Infusions', href: '/services/iv-infusions' },
                  { label: 'Blood Collection', href: '/services/blood-collection' },
                  { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
                  { label: 'Corporate Health Services', href: '/services/corporate-health' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-600 hover:text-[#3b3f69]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/training" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Training
            </Link>

            <Link href="/booking" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Booking
            </Link>

            <Link href="/about" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/contact" className="block text-base font-medium text-gray-800 hover:text-[#ca1254]" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;