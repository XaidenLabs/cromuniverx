"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Closest to the chat icon

export default function Footer() {
    const topPills = [
        { name: "Development", bgColor: "bg-white", textColor: "text-[#0A120E]" },
        { name: "Artificial Intelligence", bgColor: "bg-[#F3FFDB]", textColor: "text-[#0A120E]" },
        { name: "Design", bgColor: "bg-[#E6FAAA]", textColor: "text-[#0A120E]" },
        { name: "Visual Content", bgColor: "bg-[#18A953]", textColor: "text-[#0A120E]" },
        { name: "Marketing", bgColor: "bg-[#71F2B1]", textColor: "text-[#0A120E]" },
    ];

    const socialLinks = [
        { name: "TikTok", icon: "tiktok" }, // Will use a simple SVG or text for these if specific icons aren't available
        { name: "LinkedIn", icon: "in" },
        { name: "Instagram", icon: "ig" },
        { name: "Facebook", icon: "f" },
        { name: "X", icon: "X" },
    ];

    const footerLinks = [
        {
            category: "Company",
            links: ["About", "Services", "Industries", "Insight", "Culture"],
        },
        {
            category: "Services",
            links: [
                "Software Development",
                "Branding/Visual Identity",
                "Business Intelligence",
                "Ai Automation",
                "Creative services",
            ],
        },
        {
            category: "Industry",
            links: [
                "Marketing",
                "Development",
                "Business Intelligence",
                "Creative",
            ],
        },
        {
            category: "Resources",
            links: ["The Cave", "Case Studies", "Whitepapers", "Partners", "Careers"],
        },
    ];

    return (
        <footer className="bg-[#05110d] pt-16 pb-8 font-sans text-white border-t border-[#1C2A24]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION: Quick Links / Pills */}
                <div className="flex flex-col md:flex-row justify-between gap-4 lg:gap-6 w-full mb-20 items-stretch md:items-center">
                    {topPills.map((pill, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-1 justify-center items-center h-14 md:h-16 px-6 md:px-8 rounded-2xl font-bold text-sm md:text-base cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm ${pill.bgColor} ${pill.textColor}`}
                        >
                            <span>{pill.name}</span>
                        </div>
                    ))}
                </div>

                {/* MIDDLE SECTION: Logo & Socials */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/10 pb-12 mb-12">

                    {/* Logo Area */}
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/assets/footer-logo.png"
                            alt="CROMUNIVERX"
                            width={320}
                            height={70}
                            className="w-[200px] md:w-[280px] lg:w-[320px] h-auto"
                        />

                    </div>

                    {/* Socials & Chat Area */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                aria-label={social.name}
                            >
                                {/* Render simple text or standard SVG based on the icon name */}
                                {social.icon === "tiktok" && <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.26 6.36 6.33 6.33 0 0 0 6.33-6.25v-5.94a8.27 8.27 0 0 0 4.25 1.16V7.63a4.93 4.93 0 0 1-2.25-.94z" /></svg>}
                                {social.icon === "in" && <span className="font-bold text-sm">in</span>}
                                {social.icon === "ig" && <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>}
                                {social.icon === "f" && <span className="font-bold text-lg md:text-xl font-serif">f</span>}
                                {social.icon === "X" && <span className="font-bold text-sm md:text-base">X</span>}
                            </a>
                        ))}

                        <button className="h-10 md:h-12 px-6 rounded-full border border-white/20 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors ml-0 md:ml-4">
                            <MessageCircle className="w-5 h-5 text-[#71F2B1]" />
                            <span className="text-[#71F2B1] font-semibold text-sm md:text-base">Chat with Us</span>
                        </button>
                    </div>
                </div>

                {/* BOTTOM SECTION: Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-8">
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <h4 className="text-[#C5F24D] font-bold text-sm md:text-base tracking-wide">
                                {column.category}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link href="#" className="text-[#a1b0a8] hover:text-white transition-colors text-sm md:text-[15px] font-medium">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* LATEST FOOTER Bar: Copyright & Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#727e78] text-xs md:text-sm font-medium">
                    <p>All rights reserved - 2025 Crom technologies Incorporated</p>
                    <div className="flex items-center gap-6 md:gap-10">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
