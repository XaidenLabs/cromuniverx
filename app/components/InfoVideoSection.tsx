"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InfoVideoSection() {
    return (
        <section className="py-24 bg-[#F8FAEC] border-t border-[#1C2A24]/10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col items-start text-left"
                    >
                        {/* Eyebrow & Line */}
                        <div className="w-full mb-8">
                            <h3 className="text-[#1E2E25] uppercase tracking-wider text-xs font-semibold mb-3">
                                HYPER-AGENTIC ERA OF CREATIVITY
                            </h3>
                            <div className="h-px bg-[#1E2E25]/20 w-full max-w-sm"></div>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#0A120E] font-medium leading-[1.1] mb-6 tracking-tight lg:pr-12">
                            A one stop <span className="italic font-serif">Team</span>
                            <span className="italic font-serif">force</span> for <br /> your
                            business
                        </h2>

                        {/* Paragraph */}
                        <p className="text-[#1E2E25]/80 text-sm md:text-base leading-relaxed mb-10 max-w-lg font-medium">
                            Cromuniverx has a combined workforce of skilled experts & niche agencies,
                            delivering solutions with 10x greater speed and precision, fueled by cutting-
                            edge Business Intelligence and next-gen AI technologies.
                        </p>

                        {/* CTA Button */}
                        <button className="bg-[#0A120E] text-white font-semibold rounded-full px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-[#1a2e23] transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            Start Project
                        </button>
                    </motion.div>

                    {/* Right Column: Video Player Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="bg-[#C5F24D] rounded-3xl w-full aspect-[4/3] relative overflow-hidden shadow-sm">

                            {/* Center Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0A120E] rounded-2xl flex items-center justify-center shadow-xl cursor-pointer pointer-events-auto hover:scale-105 transition-transform">
                                    <Image
                                        src="/assets/logo-hero.svg"
                                        alt="Play"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Bottom Control Bar */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                                {/* Play Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>

                                {/* Progress Bar Container */}
                                <div className="flex-1 h-1 bg-[#1E2E25]/20 rounded-full mx-4 relative">
                                    {/* Progress Line */}
                                    <div className="absolute top-0 left-0 h-full bg-[#1E2E25] rounded-full w-[35%]"></div>
                                </div>

                                {/* Volume Icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
