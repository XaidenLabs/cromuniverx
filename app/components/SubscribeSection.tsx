"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SubscribeSection() {
    return (
        <section className="bg-[#F3FFDB] text-[#0A120E] relative z-10 font-sans">
            {/* 
        Using max-w-7xl (same as PsychologyToolsSection) 
        and pb-24 for spacing, matching exactly the column alignments 
      */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Main Subscribe Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full rounded-[28px] overflow-hidden flex flex-col shadow-xl"
                >

                    {/* Top Main Block (Image + Dark Overlay) */}
                    <div className="relative w-full h-[320px] md:h-[380px] lg:h-[400px] bg-neutral-200">
                        {/* Background Image Placeholder */}
                        {/* Using a semi-transparent mix-blend over a gray box as a placeholder for the drafting/drawing photo */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-gray-400 mix-blend-multiply opacity-80"
                            style={{ backgroundImage: "url('/assets/bg.png')" }}
                        ></div>

                        {/* Dark Green Curved Overlay (Left Side) */}
                        <div className="absolute top-0 bottom-0 left-0 w-[85%] md:w-[65%] lg:w-[55%] bg-[#0A1C16] z-10 rounded-br-[140px] md:rounded-br-[250px] lg:rounded-br-[400px]"></div>

                        {/* Content Layer */}
                        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">

                            {/* Left Text Content */}
                            <div className="text-white max-w-sm flex flex-col mb-8 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-medium mb-3">Subscribe to</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl md:text-6xl font-bold tracking-tighter">CROM</span>
                                    <span className="text-xl md:text-2xl font-medium tracking-wide">C.A.V.E</span>
                                </div>
                                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                    Get a first hands on exclusive offers and<br />
                                    insight on our inner dealings
                                </p>
                            </div>

                            {/* Right Form Content */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto mt-auto md:mt-0 lg:mr-8 xl:mr-16">
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className="bg-transparent border border-white/60 rounded-full px-8 py-4 md:py-4 text-white placeholder:text-white/60 text-sm font-bold tracking-wider w-full sm:w-[180px] md:w-[220px] focus:outline-none focus:border-white transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    className="bg-transparent border border-white/60 rounded-full px-8 py-4 md:py-4 text-white placeholder:text-white/60 text-sm font-bold tracking-wider w-full sm:w-[260px] md:w-[320px] focus:outline-none focus:border-white transition-colors"
                                />
                                <button className="bg-white hover:bg-neutral-200 transition-colors w-14 h-14 md:w-[56px] md:h-[56px] rounded-[18px] flex items-center justify-center flex-shrink-0 ml-2 group">
                                    <ChevronRight className="w-7 h-7 text-[#0A1C16] group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Banner Row */}
                    <div className="flex w-full h-[60px] md:h-[70px]">
                        {/* Dark Left Tag */}
                        <div className="bg-[#0A120E] text-white flex items-center justify-center px-6 md:px-10 h-full font-bold tracking-widest text-sm md:text-base whitespace-nowrap gap-3">
                            C.A.V.E
                            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#C5F24D] shadow-[0_0_8px_rgba(197,242,77,0.5)] border-2 border-[#0A120E]"></div>
                        </div>

                        {/* Lime Right Banner */}
                        <div className="bg-[#C5F24D] text-[#1E2E25] flex-1 flex items-center px-6 md:px-12 h-full overflow-hidden">
                            <p className="font-medium text-sm md:text-[15px] truncate">
                                Get a first hands on exclusive offers and insight on our inner dealings
                            </p>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
