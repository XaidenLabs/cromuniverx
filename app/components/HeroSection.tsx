import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B08]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/bg.png"
                    alt="Background pattern"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
            </div>

            {/* Decorative Lines */}
            {/* Top Right Line */}
            <div className="absolute top-[15%] right-[5%] lg:right-[10%] z-10 hidden md:block">
                <div className="w-[20vw] lg:w-[300px] h-[80px] lg:h-[100px] border-t border-r border-[#C5F24D]/30 relative rounded-tr-xl">
                    {/* Dot */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#C5F24D]"></div>
                </div>
            </div>

            {/* Bottom Left Line */}
            <div className="absolute bottom-[10%] left-[5%] lg:left-[10%] z-10 hidden md:block">
                <div className="w-[30vw] lg:w-[400px] h-[60px] lg:h-[80px] border-b border-l border-[#C5F24D]/30 relative rounded-bl-xl">
                    {/* Dot */}
                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#C5F24D]"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">
                {/* Center Logo Icon */}
                <div className="mb-8 relative w-20 h-20">
                    <Image
                        src="/assets/logo-hero.svg"
                        alt="Cromuniverx Icon"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight mb-6 leading-[1.1]">
                    Power Up that <span className="text-[#C5F24D] italic font-serif">Creative<br />Idea</span> with Cromuniverx
                </h1>

                {/* Subheadline */}
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
                    A full Suite Business Tech <span className="font-semibold text-[#C5F24D]">Agentry</span>, bringing you Innovative software,
                    Agentic AI automation, and creative design solutions that propel your
                    business forward
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center scale-90 sm:scale-100">
                    <button className="relative z-10 bg-[#C5F24D] text-black font-semibold rounded-full px-6 py-3.5 md:px-8 border border-[#C5F24D] hover:bg-[#b0d944] transition-colors">
                        Free Consultation
                    </button>

                    <button className="relative -ml-6 border border-[#C5F24D] border-l-0 bg-transparent text-white font-semibold rounded-r-full pr-6 pl-10 py-3.5 md:pr-8 md:pl-12 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        Start Project
                    </button>
                </div>
            </div>
        </section>
    );
}
