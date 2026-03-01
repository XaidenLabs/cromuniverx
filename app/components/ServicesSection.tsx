"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
    const tabs = [
        "Top Class Creativity",
        "Agile Business Mentality",
        "Seamless Automation",
        "Expert Engineering",
    ];

    return (
        <section className="py-24 bg-[#F3FFDB] relative z-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-4xl font-medium text-[#0A120E] mb-4"
                    >
                        What we <span className="text-[#3E7060]">cover</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-[#1E2E25]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
                    >
                        Cromuniverx is a full-suite business tech agency offering a diverse<br className="hidden md:block" />
                        range of business services packages to meet your needs.
                    </motion.p>
                </div>

                {/* Navigation Tabs (Pill Bar) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="bg-[#0A120E] rounded-full p-2 flex flex-wrap lg:flex-nowrap justify-between items-center mb-8 overflow-hidden shadow-lg"
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            className={`flex-1 text-center py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${index === 0
                                ? "bg-[#C5F24D] text-[#0A120E]"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                {tab}
                                {index === 0 && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                )}
                            </div>
                        </button>
                    ))}
                </motion.div>

                {/* Main Banner (Creative Design & Branding) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative mb-6 group"
                >
                    {/* Placeholder Background (Simulating the man and drawing) */}
                    <div className="absolute inset-0 bg-neutral-800">
                        {/* We use a linear gradient just to give some texture until the real image is added */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1c211b] via-[#2a2d24] to-[#4a4130] opacity-90"></div>
                    </div>

                    <div className="absolute inset-0 bg-black/40 p-8 md:p-12 flex flex-col justify-between">
                        <span className="text-white/80 text-sm font-medium tracking-wide">Design Solution</span>

                        <div className="max-w-xl">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.1] mb-8">
                                Creative <span className="italic font-serif opacity-90">Design</span> &<br />Branding
                            </h3>

                            <div className="flex flex-wrap items-center gap-4">
                                <button className="bg-white text-[#0A120E] font-semibold rounded-full px-8 py-3 hover:bg-gray-100 transition-colors">
                                    See Services
                                </button>
                                <button className="bg-transparent border border-white/30 text-white font-semibold rounded-full px-8 py-3 hover:bg-white/10 transition-colors">
                                    Book a Call
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom 3 Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Card 1: AI Automation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="bg-[#0f1f18] rounded-[32px] p-8 h-[350px] flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all"
                    >
                        {/* Fake wave background */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1a3327] rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <span className="text-[#C5F24D] text-xs font-semibold tracking-wide">Artificial Intelligence</span>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl text-white font-medium mb-8">AI Automation</h4>
                            <div className="flex justify-between items-center text-xs text-white/60 font-medium">
                                <span>Process review</span>
                                <span>Funnel</span>
                                <span>Automate</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Business Intelligence */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="bg-[#00c875] rounded-[32px] p-8 h-[350px] flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all"
                    >
                        {/* Fake wave background */}
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#00a661] rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <span className="text-[#05321f] text-xs font-semibold tracking-wide">Corporate</span>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl text-[#05321f] font-medium mb-8">Business<br />Intelligence</h4>
                            <div className="flex justify-between items-center text-xs text-[#05321f]/70 font-bold">
                                <span>Consultation</span>
                                <span>Analysis</span>
                                <span>Solution</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Software Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="bg-[#b4f849] rounded-[32px] p-8 h-[350px] flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all"
                    >
                        {/* Fake wave background */}
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#9ce52d] rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <span className="text-[#0a1f0a] text-xs font-semibold tracking-wide">Engineering</span>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl text-[#0a1f0a] font-medium mb-8">Software<br />Development</h4>
                            <div className="flex justify-between items-center text-xs text-[#0a1f0a]/70 font-bold">
                                <span>Conceptualize</span>
                                <span>Design</span>
                                <span>Develop</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
