import React from "react";
import Image from "next/image";

import Afterpay from "../../../../public/afterpay.png";
import ApplePay from "../../../../public/applepay.png";
import GooglePay from "../../../../public/googlepay.png";
// import Cards from "../../../../public/cards.png";
import Stripe from "../../../../public/stripe.png";

export default function PaymentSection() {
    return (
        <section className="py-14 bg-white border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <p className="text-sm text-[#3b3f69]/70 mb-3">
                    We accept flexible and secure payments
                </p>

                {/* 🔥 Tagline */}
                <p className="text-sm md:text-base text-[#ca1254] font-medium mb-8">
                    Don’t wait to feel better, Just pay later.
                </p>

                {/* Payment Logos */}
                <div className="flex flex-wrap justify-center items-center gap-10 mb-8">

                    <Image src={Afterpay} alt="Afterpay" className="h-8 w-auto opacity-80" />
                    <Image src={ApplePay} alt="Apple Pay" className="h-7 w-auto opacity-80" />
                    <Image src={GooglePay} alt="Google Pay" className="h-7 w-auto opacity-80" />
                    {/* <Image src={Cards} alt="Cards" className="h-8 w-auto opacity-80" /> */}

                </div>

                {/* Stripe Trust */}
                <div className="flex items-center justify-center gap-2 opacity-60">

                    <span className="text-xs text-[#3b3f69]">
                        Secure payments powered by
                    </span>

                    <Image
                        src={Stripe}
                        alt="Stripe"
                        className="h-5 w-auto object-contain"
                    />

                </div>

            </div>
        </section>
    );
}