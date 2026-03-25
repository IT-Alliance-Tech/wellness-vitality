"use client";

import React from "react";

const posts = [
    {
        title: "Instagram",
        handle: "@wellnessvitalityaustralia",
        label: "Follow for daily wellness tips",
        link: "https://www.instagram.com/wellnessvitalityaustralia",
        accent: "rose",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        title: "YouTube",
        handle: "@wellnessvitalityaustralia",
        label: "Watch our therapy walkthroughs",
        link: "https://youtube.com/@wellnessvitalityaustralia",
        accent: "indigo",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        title: "Facebook",
        handle: "Wellness Vitality Australia",
        label: "Join our online community",
        link: "https://www.facebook.com/share/1GEVniWdVF/",
        accent: "rose",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        title: "Instagram",
        handle: "@wellnessvitalityaustralia",
        label: "Behind-the-scenes & results",
        link: "https://www.instagram.com/wellnessvitalityaustralia",
        accent: "indigo",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        title: "YouTube",
        handle: "@wellnessvitalityaustralia",
        label: "Expert wellness education",
        link: "https://youtube.com/@wellnessvitalityaustralia",
        accent: "rose",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/wellnessvitalityaustralia",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://youtube.com/@wellnessvitalityaustralia",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/share/1GEVniWdVF/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

const SocialLoopSection = () => {
    return (
        <section
            className="py-14 md:py-20 overflow-hidden relative"
            style={{
                background:
                    "linear-gradient(160deg, #f8f7fc 0%, #fdf5f8 60%, #f5f4f9 100%)",
            }}
        >
            {/* Decorative blob */}
            <div
                className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-[0.05]"
                style={{
                    background:
                        "radial-gradient(circle, rgb(202,18,84) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: "translate(30%, -30%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

                {/* ── LEFT SIDE ── */}
                <div>
                    {/* Eyebrow */}
                    <span
                        className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
                        style={{
                            color: "rgb(202,18,84)",
                            background: "rgba(202,18,84,0.08)",
                            border: "1px solid rgba(202,18,84,0.15)",
                        }}
                    >
                        Our Community
                    </span>

                    <h2 className="text-2xl md:text-4xl font-semibold text-[rgb(59,63,105)] mb-4 leading-tight">
                        Stay Connected
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                        Follow us for wellness tips, IV therapy insights, and real updates
                        from our team — across all platforms.
                    </p>

                    {/* Social icon pills */}
                    <div className="flex items-center gap-3 mb-8 flex-wrap">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300 group"
                                style={{
                                    border: "1px solid rgba(59,63,105,0.15)",
                                    color: "rgb(59,63,105)",
                                    background: "white",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgb(202,18,84)";
                                    e.currentTarget.style.color = "white";
                                    e.currentTarget.style.borderColor = "rgb(202,18,84)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "white";
                                    e.currentTarget.style.color = "rgb(59,63,105)";
                                    e.currentTarget.style.borderColor = "rgba(59,63,105,0.15)";
                                }}
                            >
                                {s.icon}
                                {s.label}
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-gray-200" />
                        <div className="w-1 h-1 rounded-full bg-[rgb(202,18,84)]" />
                        <div className="h-px w-8 bg-gray-200" />
                    </div>

                    {/* CTA */}
                    <a
                        href="https://www.facebook.com/share/1GEVniWdVF/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white tracking-wide transition-all duration-300 rounded-sm"
                        style={{
                            background:
                                "linear-gradient(135deg, rgb(202,18,84) 0%, rgb(160,14,66) 100%)",
                            boxShadow: "0 4px 16px rgba(202,18,84,0.25)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 6px 24px rgba(202,18,84,0.35)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 16px rgba(202,18,84,0.25)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Join Our Community
                    </a>
                </div>

                {/* ── RIGHT SIDE — Scrolling cards ── */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div
                        className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(248,247,252,1), transparent)",
                        }}
                    />
                    <div
                        className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
                        style={{
                            background:
                                "linear-gradient(to left, rgba(248,247,252,1), transparent)",
                        }}
                    />

                    <div className="flex gap-4 animate-social-scroll">
                        {[...posts, ...posts].map((post, index) => (
                            <a
                                key={index}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 min-w-[190px] sm:min-w-[210px] h-[200px] bg-white flex flex-col justify-between p-5 transition-all duration-300 group"
                                style={{
                                    borderRadius: "2px",
                                    border:
                                        post.accent === "rose"
                                            ? "1px solid rgba(202,18,84,0.12)"
                                            : "1px solid rgba(59,63,105,0.1)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 24px rgba(0,0,0,0.09)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        "0 2px 12px rgba(0,0,0,0.05)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Top: icon + platform */}
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-8 h-8 flex items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                post.accent === "rose"
                                                    ? "rgba(202,18,84,0.08)"
                                                    : "rgba(59,63,105,0.08)",
                                            color:
                                                post.accent === "rose"
                                                    ? "rgb(202,18,84)"
                                                    : "rgb(59,63,105)",
                                        }}
                                    >
                                        {post.icon}
                                    </span>
                                    <span
                                        className="text-xs font-semibold tracking-wide"
                                        style={{
                                            color:
                                                post.accent === "rose"
                                                    ? "rgb(202,18,84)"
                                                    : "rgb(59,63,105)",
                                        }}
                                    >
                                        {post.title}
                                    </span>
                                </div>

                                {/* Middle: label */}
                                <p
                                    className="text-xs leading-relaxed"
                                    style={{ color: "rgba(59,63,105,0.65)" }}
                                >
                                    {post.label}
                                </p>

                                {/* Bottom: handle + arrow */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-[10px] truncate max-w-[130px]"
                                        style={{ color: "rgba(59,63,105,0.45)" }}
                                    >
                                        {post.handle}
                                    </span>
                                    <span
                                        className="text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1"
                                        style={{ color: "rgb(202,18,84)" }}
                                    >
                                        →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes socialScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-social-scroll {
          animation: socialScroll 22s linear infinite;
        }
        .animate-social-scroll:hover {
          animation-play-state: paused;
        }
      ` }} />
        </section>
    );
};

export default SocialLoopSection;