"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesDetailsSection() {
    const services = [
        { title: "Software Development", isActive: true },
        { title: "Creative Design & Branding", isActive: false },
        { title: "Ai Automation", isActive: false },
        { title: "Business Intelligence", isActive: false },
    ];

    const cards = [
        {
            title: "Web\nDevelopment",
            description: "A full Suite Business Tech Agency,\nbringing you Innovative software.",
            image: "/assets/bg.png", // Placeholder until real image is provided
        },
        {
            title: "Product Design",
            description: "A full Suite Business Tech Agency,\nbringing you Innovative software.",
            image: "/assets/bg.png", // Placeholder
        },
        {
            title: "Business\nAutomation",
            description: "A full Suite Business Tech Agency,\nbringing you Innovative software.",
            image: "/assets/bg.png", // Placeholder
        },
    ];

    return (
        <section className="py-24 bg-[#0A211F] relative z-10 font-sans overflow-hidden">
            {/* Background radial gradient representing the subtle green glow */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#1a3a2a] rounded-full blur-[120px] opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Left Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-[320px] flex-shrink-0 flex flex-col pt-4 h-full lg:pb-12"
                >
                    <h2 className="text-4xl md:text-[44px] tracking-wide font-medium text-white mb-6">
                        SERVICES
                    </h2>
                    <p className="text-white/70 text-base md:text-lg mb-8 lg:mb-0 leading-relaxed max-w-[280px]">
                        Power Up that <span className="italic font-serif text-white/90">Creative Idea</span><br />
                        with Cromuniverx
                    </p>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-3 w-full max-w-[320px] mt-4 lg:mt-auto">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                className={`flex justify-start items-center text-left w-full pl-6 pr-4 py-4 border border-white/20 transition-all duration-300 ${service.isActive
                                    ? "bg-white text-[#0A120E] font-bold"
                                    : "bg-transparent text-white/80 hover:bg-white/10 hover:text-white font-medium"
                                    }`}
                            >
                                <div className="flex items-center gap-4 w-full">
                                    {/* Small icon outline box */}
                                    <div className={`w-5 h-5 flex-shrink-0 flex items-center justify-center border ${service.isActive ? 'border-[#0A120E]' : 'border-white/40'} rounded-sm opacity-80`}>
                                        <div className={`w-2 h-2 ${service.isActive ? 'bg-[#0A120E]' : 'border border-white/40'}`}></div>
                                    </div>
                                    <span className="text-sm tracking-wide">{service.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content Area (Carousel/Cards) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full overflow-hidden"
                >
                    <div className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="flex flex-col snap-start shrink-0 w-[85vw] md:w-[450px] lg:w-[480px]"
                            >
                                {/* The Card with specific Border Radius: 
                    Top-Left: Rounded (approx 48px)
                    Top-Right: Sharp
                    Bottom-Right: Rounded (approx 48px)
                    Bottom-Left: Sharp
                */}
                                <div
                                    className="relative w-full h-[550px] md:h-[600px] overflow-hidden group mb-4 border border-white/10"
                                    style={{
                                        borderTopLeftRadius: '48px',
                                        borderBottomRightRadius: '48px',
                                        borderTopRightRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                >
                                    {/* Base dark background */}
                                    <div className="absolute inset-0 bg-neutral-900"></div>

                                    {/* Fallback pattern or placeholder image */}
                                    <div className="absolute inset-0 opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}></div>

                                    {/* Gradient Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                    {/* Top Right Logo Icon Container */}
                                    <div className="absolute top-8 right-8 bg-[#C5F24D] rounded-xl p-2.5 shadow-lg">
                                        <Image
                                            src="/assets/logo-hero.svg"
                                            alt="Cromuniverx Icon"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-contain filter invert" // Assuming logo is dark, we invert if needed, or just let it sit
                                        />
                                    </div>

                                    {/* Bottom Text Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                                        <h3 className="text-3xl md:text-4xl text-white font-medium mb-4 whitespace-pre-line leading-[1.15]">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-line max-w-[90%]">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* The Lime Green Underline Container */}
                                {/* Visual width is approx 90% aligned left */}
                                <div className="w-[95%] h-1.5 bg-[#C5F24D] opacity-90 ml-1 rounded-sm"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Hide Scrollbar CSS Injection for this component */}
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
