"use client";

import React from "react";
import { HeartPulse, Briefcase, ShieldAlert, Stethoscope } from "lucide-react";

const training = [
    {
        title: "CPR & First Aid",
        desc: "Essential life-saving training programmes.",
        icon: HeartPulse,
    },
    {
        title: "Workplace Training",
        desc: "Compliance and safety for organisations.",
        icon: Briefcase,
    },
    {
        title: "Emergency Response",
        desc: "Asthma, anaphylaxis and critical care.",
        icon: ShieldAlert,
    },
    {
        title: "Event Medical Support",
        desc: "On-site medical care for events.",
        icon: Stethoscope,
    },
];

const Training = () => {
    return (
        <section className="py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-semibold text-[#3b3f69] mb-2">
                            Training and Services
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Accredited and workplace-focused training programmes.
                        </p>
                    </div>

                    <a href="/training" className="mt-3 md:mt-0 flex items-center gap-1.5 text-[#ca1254] group/link cursor-pointer">
                        <span className="text-sm font-medium hover:underline">
                            View All Training
                        </span>
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {training.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-5 border border-[#ca1254] transition hover:shadow-md cursor-pointer group/card"
                            >
                                {/* ICON */}
                                <div className="mb-4">
                                    <Icon className="w-8 h-8 text-[#ca1254] transition-transform group-hover/card:scale-110" strokeWidth={1.5} />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-sm md:text-base font-semibold text-[#3b3f69] mb-2">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-xs md:text-sm text-[#3b3f69]/80 leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Training;