"use client";

import React from "react";
import Image from "next/image";

import Afterpay from "../../../../public/afterpay.png";
import ApplePay from "../../../../public/applepay.png";
import GooglePay from "../../../../public/googlepay.png";
import LinkLogo from "../../../../public/linkpay.png";

export default function PaymentSection() {
    return (
        <section className="py-14 md:py-16 relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="relative overflow-hidden rounded-2xl border border-[rgb(59,63,105)]/20 bg-gradient-to-b from-[rgb(59,63,105)]/12 to-[rgb(59,63,105)]/6 px-6 py-8 md:px-8 md:py-10 shadow-[0_10px_30px_rgba(59,63,105,0.15)]">

                    {/* Glow Effects */}
                    <div className="absolute -top-16 -right-16 w-52 h-52 bg-[rgb(202,18,84)]/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[rgb(59,63,105)]/10 rounded-full blur-3xl" />

                    <div className="relative z-10 text-center">

                        {/* HEADING */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(59,63,105)] leading-snug mb-8">
                            Don’t wait to feel better,{" "}
                            <span className="text-[rgb(202,18,84)]">just pay later.</span>
                        </h2>

                        {/* LOGOS */}
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">

                            <Image
                                src={Afterpay}
                                alt="Afterpay"
                                className="h-14 md:h-20 w-auto opacity-90 hover:opacity-100 transition"
                            />

                            <Image
                                src={ApplePay}
                                alt="Apple Pay"
                                className="h-10 md:h-14 w-auto opacity-90 hover:opacity-100 transition"
                            />

                            <Image
                                src={GooglePay}
                                alt="Google Pay"
                                className="h-10 md:h-14 w-auto opacity-90 hover:opacity-100 transition"
                            />

                            {/* Pay with Link */}
                            <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition">
                                <Image
                                    src={LinkLogo}
                                    alt="Pay with Link"
                                    className="h-7 md:h-9 w-auto"
                                />
                                <span className="text-sm md:text-base font-semibold text-[rgb(59,63,105)] whitespace-nowrap">
                                    Pay with Link
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}