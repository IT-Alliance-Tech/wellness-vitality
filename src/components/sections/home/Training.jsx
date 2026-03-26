"use client";

import React from "react";
import { HeartPulse, Briefcase, ShieldAlert, Stethoscope } from "lucide-react";

const training = [
    {
        title: "CPR & First Aid",
        desc: "Essential life-saving training programs.",
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
                            Accredited and workplace-focused training programs.
                        </p>
                    </div>

                    <a href="/training" className="mt-3 md:mt-0">
                        <span className="text-[#ca1254] text-sm font-medium hover:underline">
                            View All →
                        </span>
                    </a>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {training.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-5 border border-[#ca1254] transition hover:shadow-md"
                            >
                                {/* ICON */}
                                <div className="mb-4">
                                    <Icon className="w-8 h-8 text-[#ca1254]" />
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