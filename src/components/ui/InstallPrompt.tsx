"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export const InstallPrompt = () => {
    const [isInstallable, setIsInstallable] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show if user hasn't dismissed it before
        const hasDismissed = localStorage.getItem("installPromptDismissed");
        
        // Listen for the beforeinstallprompt event (Android/Chrome)
        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            if (!hasDismissed) {
                setIsInstallable(true);
                setIsVisible(true);
            }
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        // Detect iOS (iOS doesn't fire beforeinstallprompt, we just show instruction)
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };
        
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator as any).standalone;

        if (isIos() && !isInStandaloneMode() && !hasDismissed) {
            setIsVisible(true);
            // On iOS we don't have deferredPrompt, we just have to tell them how.
        }

        return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            alert("Ana ekrana eklemek için: Safari'de alttaki 'Paylaş' ikonuna tıklayıp 'Ana Ekrana Ekle' (Add to Home Screen) seçeneğini seçin.");
            return;
        }
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setIsVisible(false);
        }
        setDeferredPrompt(null);
    };

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("installPromptDismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-primary text-secondary px-4 py-3 shadow-md border-b-2 border-primary-hover flex items-center justify-between font-medium">
            <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-lg shadow-sm">
                    {/* Simplified mini taxi icon just for the prompt */}
                    <Download className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-sm leading-tight pr-2">
                    <span className="font-bold">Taksi Uygulamamız</span>
                    <br />
                    <span>Daha hızlı erişim için ana ekrana ekleyin!</span>
                </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
                <button 
                    onClick={handleInstallClick}
                    className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-black transition-colors shadow-sm"
                >
                    Ekle
                </button>
                <button 
                    onClick={handleClose}
                    className="p-1.5 text-secondary hover:bg-black/10 rounded-full transition-colors flex-shrink-0 ml-1"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
