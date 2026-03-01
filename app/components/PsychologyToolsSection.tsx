"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Boxes } from "lucide-react";

export default function PsychologyToolsSection() {
    const cards = [
        {
            title: "Adapt",
            icon: <Database className="w-8 h-8 text-[#0A120E]" strokeWidth={2} />,
        },
        {
            title: "Innovate",
            icon: <BrainCircuit className="w-8 h-8 text-[#0A120E]" strokeWidth={2} />,
        },
        {
            title: "Scale",
            icon: <Boxes className="w-8 h-8 text-[#0A120E]" strokeWidth={2} />,
        },
    ];

    return (
        <section className="py-24 bg-[#F3FFDB] text-[#0A120E] relative z-10 font-sans border-t border-[#1C2A24]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-medium tracking-wide"
                    >
                        Psychology
                    </motion.h2>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="flex items-center justify-center gap-10 py-10 px-8 border-[1.5px] border-[#0A120E]/80 rounded-[24px] hover:bg-white/40 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                {card.icon}
                            </div>
                            <span className="text-lg font-bold tracking-wide">
                                {card.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Tools & AI Models Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8"
                >
                    {/* Left Text */}
                    <div className="flex flex-col w-full xl:w-auto text-center xl:text-left">
                        <h3 className="text-2xl md:text-[28px] font-medium leading-tight">Leveraging</h3>
                        <p className="text-sm md:text-base font-semibold text-[#0A120E]/70 mt-1">on top tools & AI Models</p>
                    </div>

                    {/* Logos Row */}
                    <div className="flex flex-wrap justify-center xl:justify-end items-center gap-8 md:gap-10 lg:gap-14 w-full xl:w-auto">
                        {/* Anthropic */}
                        <div className="flex items-center text-xl md:text-2xl font-black tracking-tighter">
                            ANTHROP\C
                        </div>

                        {/* OpenAI */}
                        <div className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight">
                            <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.911 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.182a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.91 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.989 5.989 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.475 4.475 0 0 1-2.876-1.04l.142-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.169a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zM3.6 18.305a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.758a.771.771 0 0 0 .78 0l5.843-3.368v2.332a.08.08 0 0 1-.033.061L9.74 19.95a4.499 4.499 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.814 3.354-2.02 1.169a.076.076 0 0 1-.07 0L4.038 13.91a4.504 4.504 0 0 1-1.697-6.014zm16.596 3.856L13.103 8.364l2.016-1.164a.076.076 0 0 1 .07 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.407-.667zm2.01-3.023l-.142-.085-4.773-2.782a.776.776 0 0 0-.785 0l-5.848 3.37v-2.332a.066.066 0 0 1 .028-.061l4.83-2.787a4.499 4.499 0 0 1 6.69 4.677zm-12.64 2.134l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.499 4.499 0 0 1 7.376-3.454l-.142.08-4.783 2.76a.795.795 0 0 0-.393.681zm1.098-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                            </svg>
                            OpenAI
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xl md:text-2xl font-medium tracking-tight">
                            <svg role="img" viewBox="0 0 24 24" className="w-[1.1em] h-[1.1em] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                            </svg>
                            Meta
                        </div>

                        {/* Deepseek */}
                        <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight">
                            <svg viewBox="0 0 457 97" className="h-4 md:h-5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.62 0L0 97H26.39L64.39 23.95L80.99 55.44L49.62 0Z" />
                                <path d="M124.97 0L75.35 97H101.74L139.74 23.95L156.34 55.44L124.97 0Z" />
                                <path d="M165.7 0L116.08 97H142.47L180.47 23.95L197.07 55.44L165.7 0Z" />
                                <path d="M206.43 0L156.81 97H183.2L221.2 23.95L237.8 55.44L206.43 0Z" />
                                <path d="M305.81 0L256.19 97H282.58L320.58 23.95L337.18 55.44L305.81 0Z" />
                                <path d="M346.54 0L296.92 97H323.31L361.31 23.95L377.91 55.44L346.54 0Z" />
                                <path d="M425.93 0L376.31 97H402.7L440.7 23.95L457.3 55.44L425.93 0Z" />
                            </svg>
                            deepseek
                        </div>

                        {/* Gemini */}
                        <div className="flex items-center gap-1.5 text-xl md:text-2xl font-medium tracking-tight">
                            <svg role="img" viewBox="0 0 24 24" className="w-[1.1em] h-[1.1em] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
                            </svg>
                            Gemini
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
