'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-indigo tracking-tight">
          Wellness <span className="font-light text-gray-400">& Vitality</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-rose transition">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-rose transition flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                All Services
              </Link>
              <Link href="/iv-infusions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                IV Infusions
              </Link>
            </div>
          </div>

          <Link href="/booking" className="text-sm font-medium text-gray-700 hover:text-rose transition">
            Booking
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-rose transition">
            Contact Us
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-3">
          <Button href="/booking" variant="primary" className="px-5 py-2.5">
            Book Now
          </Button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-indigo">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;