"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandsSection() {
    const brands = [
        { name: "Hostinger", src: "/assets/brands/hostinger.png", width: 140, height: 40 },
        { name: "Microsoft", src: "/assets/brands/microsoft.png", width: 140, height: 40 },
        { name: "Adobe", src: "/assets/brands/adobe.png", width: 110, height: 40 },
        { name: "Meta", src: "/assets/brands/meta.png", width: 110, height: 40 },
        { name: "Google", src: "/assets/brands/google.png", width: 100, height: 40 },
        { name: "AWS", src: "/assets/brands/aws.png", width: 60, height: 40 },
        { name: "Salesforce", src: "/assets/brands/salesforce.png", width: 80, height: 40 },
    ];

    return (
        <section className="py-24 bg-[#F8FAEC] text-center border-t border-[#1C2A24] overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-medium text-[#1E2E25] mb-2 tracking-tight"
                >
                    Trusted & in Partnership with
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-medium text-[#1E2E25] mb-12"
                >
                    50+ Global <span className="text-[#3E7060]">brands</span>
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-80 mix-blend-multiply"
                >
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.name}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative flex justify-center grayscale hover:grayscale-0 transition-grayscale duration-300"
                        >
                            <Image
                                src={brand.src}
                                alt={`${brand.name} logo`}
                                width={brand.width}
                                height={brand.height}
                                className="object-contain h-6 md:h-6 w-auto"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
