"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RecentProjectsSection() {
    return (
        <section className="bg-[#D8FF85] relative z-10 w-full overflow-hidden font-sans">
            <div className="flex flex-col lg:flex-row w-full min-h-[600px]">

                {/* Left Side: Lime Green Area (Approx 35% on Desktop) */}
                <div className="w-full lg:w-[35%] py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#0A120E] mb-6 tracking-wide">
                            RECENT
                        </h2>

                        {/* Subheading */}
                        <p className="text-[#1E2E25] text-lg md:text-xl font-medium mb-12">
                            Our <span className="italic font-serif">Recent Projects</span> highlights
                        </p>

                        {/* Carousel Thumb Card (Active) */}
                        <div className="relative w-full max-w-[320px] mb-8">
                            {/* Dark Card */}
                            <div className="bg-[#0f1110] rounded-xl p-6 h-[180px] w-full flex items-center justify-center relative shadow-lg hover:scale-105 transition-transform cursor-pointer">
                                {/* Top Left Status Indicator */}
                                <div className="absolute top-4 left-4 border border-white/20 rounded-md p-1 px-1.5 flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#C5F24D] shadow-[0_0_8px_rgba(197,242,77,0.8)]"></div>
                                </div>

                                {/* Center Logo Placeholder (Sprout Social) */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm bg-gradient-to-tr from-[#00a661] to-[#60d691]"></div>
                                    <span className="text-white text-xl font-bold tracking-tight">sproutsocial</span>
                                </div>
                            </div>

                            {/* Lime Underline */}
                            <div className="w-[80%] h-1 bg-[#1E2E25]/30 mx-auto mt-6 rounded-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-[60%] bg-[#0A120E] rounded-full"></div>
                            </div>
                        </div>

                        {/* Project Details Text */}
                        <div className="pl-2">
                            <h3 className="text-[#0A120E] text-2xl font-bold mb-3 tracking-tight">
                                Sprout Digital Campaign
                            </h3>
                            <p className="text-[#0A120E]/80 font-bold text-lg mb-2">
                                Nike Website (usecase)
                            </p>
                            <p className="text-[#0A120E]/60 text-sm font-semibold">
                                Sprout
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Dark Image Area (Approx 65% on Desktop) */}
                <div className="w-full lg:w-[65%] relative min-h-[400px] lg:min-h-full flex items-end">
                    {/* Background Image / Placeholder */}
                    <div className="absolute inset-0 bg-[#0A120E]">
                        <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: "url('/assets/bg.png')" }}></div>
                        {/* Gradient for text readability at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A120E] via-[#0A120E]/80 to-transparent"></div>
                    </div>

                    {/* Bottom Content Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 w-full p-8 md:p-12 pb-16"
                    >
                        <div className="flex justify-between items-end w-full">

                            {/* Left Side Details */}
                            <div className="flex flex-col gap-4 max-w-md">
                                {/* Floating Sprout Icon */}
                                <div className="w-12 h-12 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md bg-gradient-to-tr from-[#00a661] to-[#60d691] shadow-lg shadow-[#00a661]/20 -ml-2 mb-2"></div>

                                <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                                    Sprout
                                </h3>
                                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                    A full Suite Business Tech Agency,<br />
                                    bringing you Innovative software.
                                </p>
                            </div>

                            {/* Right Side Cromuniverx Icon */}
                            <div className="pb-4">
                                <Image
                                    src="/assets/logo-hero.svg"
                                    alt="Cromuniverx Icon"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain filter invert"
                                />
                            </div>

                        </div>

                        {/* Progress/Carousel Bars */}
                        <div className="flex items-center gap-3 mt-12 mb-2 w-full max-w-xl">
                            <div className="h-1 bg-white flex-1 rounded-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                            </div>
                            <div className="h-1 bg-white/30 flex-1 rounded-full hover:bg-white/50 transition-colors cursor-pointer"></div>
                            <div className="h-1 bg-white/30 flex-1 rounded-full hover:bg-white/50 transition-colors cursor-pointer"></div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
