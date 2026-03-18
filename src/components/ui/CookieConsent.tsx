"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            setIsVisible(true);
            
            // Auto hide after 3 seconds
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            // Auto hide on scroll down
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsVisible(false);
                }
            };
            window.addEventListener("scroll", handleScroll);

            return () => {
                clearTimeout(timer);
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem("cookieConsent", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-[340px] z-[100] bg-white/95 backdrop-blur-md text-secondary p-3 rounded-2xl shadow-xl border border-gray-200 flex flex-col gap-3 animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between gap-3">
                <div className="flex gap-2">
                    <div className="bg-primary/20 p-1.5 rounded-full flex-shrink-0 h-fit mt-0.5">
                        <Cookie className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm mb-0.5">Çerezler</h3>
                        <p className="text-[11px] text-gray-500 leading-tight font-medium">
                            Deneyiminizi geliştirmek için çerezleri kullanıyoruz.
                            <Link href="/gizlilik-politikasi" className="text-primary hover:underline ml-1">Detaylar</Link>
                        </p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-full p-1 transition-colors flex-shrink-0"
                    aria-label="Kapat"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
            
            <button 
                onClick={handleAccept}
                className="w-full bg-secondary text-white text-xs font-bold py-2 rounded-xl hover:bg-black transition-colors"
            >
                Kabul Ediyorum
            </button>
        </div>
    );
};
