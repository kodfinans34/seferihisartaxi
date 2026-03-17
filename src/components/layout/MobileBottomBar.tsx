"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, MessageCircle, Info } from "lucide-react";

export const MobileBottomBar = () => {
    const pathname = usePathname();

    const navItems = [
        { icon: <Home className="w-6 h-6" />, label: "Anasayfa", href: "/" },
        { icon: <Info className="w-6 h-6" />, label: "Hizmetler", href: "/hizmetlerimiz" },
        { icon: <Phone className="w-7 h-7" />, label: "Hemen Ara", href: "tel:+905541154422", isPrimary: true },
        { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", href: "https://wa.me/905541154422", isExternal: true },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    if (item.isPrimary) {
                        return (
                            <div key={index} className="relative flex flex-col items-center">
                                {/* Animated Taxi Logo */}
                                <div className="absolute -top-14 pointer-events-none select-none">
                                    <img
                                        src="/taxi-mobile.png"
                                        alt="Seferihisar Taksi"
                                        className="w-16 h-auto animate-taxi-mobile drop-shadow-lg"
                                    />
                                </div>
                                <a
                                    href={item.href}
                                    className="flex flex-col items-center justify-center w-16 h-16 bg-primary text-secondary rounded-full -mt-8 shadow-lg border-4 border-white transform transition-transform active:scale-95 relative z-10"
                                >
                                    {item.icon}
                                </a>
                            </div>
                        );
                    }

                    if (item.isExternal) {
                        return (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-[#25D366] transition-colors"
                            >
                                <div className="mb-1">{item.icon}</div>
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isActive ? "text-primary font-bold" : "text-gray-500 hover:text-black"
                                }`}
                        >
                            <div className={`mb-1 ${isActive ? "scale-110 transition-transform" : ""}`}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
            {/* Safe area padding for iPhones */}
            <div className="h-safe-bottom bg-white"></div>
        </div>
    );
};
