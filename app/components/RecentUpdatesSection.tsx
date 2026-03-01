"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react"; // Using a placeholder icon close to the design's logo

export default function RecentUpdatesSection() {
    const updates = [
        {
            id: 1,
            text: (
                <>
                    How Shopify <span className="font-serif italic text-lg md:text-xl font-normal">Unlocks Growth</span><br />
                    With Rapid Experimentation
                </>
            ),
        },
        {
            id: 2,
            text: (
                <>
                    How Shopify <span className="font-serif italic text-lg md:text-xl font-normal">Unlocks Growth</span><br />
                    With Rapid Experimentation
                </>
            ),
        },
        {
            id: 3,
            text: (
                <>
                    How Shopify <span className="font-serif italic text-lg md:text-xl font-normal">Unlocks Growth</span><br />
                    With Rapid Experimentation
                </>
            ),
        },
    ];

    return (
        <section className="py-24 bg-[#F3FFDB] text-[#0A120E] relative z-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Header Row */}
                <div className="flex items-center gap-6 mb-12">
                    <h3 className="text-sm font-bold tracking-widest whitespace-nowrap">
                        RECENT UPDATES
                    </h3>
                    <div className="h-[1px] bg-black/20 flex-1"></div>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {updates.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="flex flex-col group cursor-pointer"
                        >
                            {/* Image Placeholder Box */}
                            {/* Using a light lime background #E2FAAA resembling the screenshot */}
                            <div className="w-full aspect-[4/3] md:aspect-[5/3] lg:aspect-[4/3] bg-[#E6F9A9] rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                                {/* Central Logo Box - Rotating Image */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="w-14 h-14 bg-[#B5C883] rounded-[14px] flex items-center justify-center shadow-sm"
                                >
                                    <img src="/assets/logo-single.png" alt="Loading" className="w-8 h-8 object-contain opacity-80" />
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col border-b border-black/10 pb-6 w-full group-hover:border-black/30 transition-colors">
                                <p className="text-[#0A120E] text-lg font-medium leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
