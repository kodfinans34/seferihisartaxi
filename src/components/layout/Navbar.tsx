"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";

const NAV_LINKS = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Sığacık Taksi", href: "/sigacik-taksi" },
    { name: "Ürkmez Taksi", href: "/urkmez-taksi" },
    { name: "İletişim", href: "/iletisim" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-2"
                : "bg-white/95 backdrop-blur-md shadow-sm py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
                        <Link href="/" className="flex items-center gap-2 xl:gap-3 group">
                            <AnimatedLogo />
                            <div className="text-lg sm:text-xl xl:text-2xl font-bold tracking-tight text-secondary group-hover:text-black transition-colors whitespace-nowrap">
                                Seferihisar <span className="text-primary group-hover:text-primary-hover">Taksi</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center lg:gap-3 xl:gap-6">
                        <div className="hidden lg:flex lg:gap-3 xl:gap-5">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-secondary font-medium px-1 text-sm xl:text-base py-1 transition-colors hover:text-primary group whitespace-nowrap"
                                >
                                    {link.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        <a
                            href="tel:+905541154422"
                            className="flex items-center gap-2 bg-secondary hover:bg-black text-white font-bold px-4 py-2 xl:px-6 xl:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap text-sm xl:text-base"
                        >
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="tracking-wide">0554 115 44 22</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-secondary hover:bg-gray-100 transition-colors focus:outline-none"
                            aria-label="Menüyü Aç"
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-6 space-y-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-lg font-medium text-secondary hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:+905541154422"
                        className="flex items-center justify-center gap-3 w-full px-4 py-4 mt-6 text-lg font-bold text-secondary bg-primary hover:bg-primary-hover rounded-xl shadow-md transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        Hemen Ara: 0554 115 44 22
                    </a>
                </div>
            </div>
        </nav>
    );
};
