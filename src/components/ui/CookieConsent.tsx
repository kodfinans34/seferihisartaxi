"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem("cookieConsent", "true");
    };

    const handleDecline = () => {
        setIsVisible(false);
        // Optional: you can still set false to avoid showing it endlessly
        localStorage.setItem("cookieConsent", "false");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[100] bg-white text-secondary p-5 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                    <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 h-fit">
                        <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Çerez Politikası</h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                            Size daha iyi ve kişiselleştirilmiş bir deneyim sunabilmek için çerezleri (cookies) kullanıyoruz. Sitemizi kullanarak çerez politikamızı onaylamış olursunuz. 
                            <Link href="/gizlilik-politikasi" className="text-primary hover:underline ml-1">Detaylı Bilgi</Link>
                        </p>
                    </div>
                </div>
                <button 
                    onClick={handleDecline}
                    className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-full p-1.5 transition-colors flex-shrink-0"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            <div className="flex items-center gap-3">
                <button 
                    onClick={handleAccept}
                    className="flex-1 bg-secondary text-white font-bold py-2.5 rounded-xl hover:bg-black transition-colors"
                >
                    Kabul Ediyorum
                </button>
                <button 
                    onClick={handleDecline}
                    className="flex-1 bg-gray-100 text-gray-600 font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
                >
                    Reddet
                </button>
            </div>
        </div>
    );
};
