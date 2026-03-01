import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white bg-transparent">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/assets/logo.png"
                    alt="Cromuniverx"
                    width={180}
                    height={40}
                    className="object-contain h-8 w-auto"
                />
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                    Services
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                    Industries
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">Why us</Link>
                <Link href="#" className="hover:text-white transition-colors">The Cave</Link>
                <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                    Brands
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    Portfolio
                </Link>
            </div>

            {/* Right Button */}
            <Link href="#" className="hidden md:flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                Start Project
            </Link>
        </nav>
    );
}
