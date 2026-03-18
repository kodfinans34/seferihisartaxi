"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Eğer daha önce kapattıysa gösterme (Test için istersen bu satırı // ile kapatabilirsin)
        const hasDismissed = localStorage.getItem("installPromptDismissed");
        
        let timer: NodeJS.Timeout;

        const showPrompt = () => {
            setIsVisible(true);
            timer = setTimeout(() => setIsVisible(false), 6000);
        };

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        // Uygulama yüklü mü kontrol et
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in window.navigator && (window.navigator as any).standalone);

        // Yüklü değilse ve önceden kapatılmadıysa kesinlikle göster (1 saniye gecikmeli)
        if (!isStandalone && !hasDismissed) {
            setTimeout(() => {
                showPrompt();
            }, 500);
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
            if(timer) clearTimeout(timer);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            alert("Otomatik yükleme desteklenmiyor. Lütfen tarayıcınızın menüsünden (Paylaş veya Ayarlar) 'Ana Ekrana Ekle' seçeneğine tıklayın.");
            return;
        }
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setIsVisible(false);
            localStorage.setItem("installPromptDismissed", "true");
        }
        setDeferredPrompt(null);
    };

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("installPromptDismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-24 right-0 md:top-32 md:right-4 z-[100] w-64 bg-primary text-secondary p-3 shadow-2xl rounded-l-2xl md:rounded-2xl border-l-4 border-y border-white md:border-4 flex flex-col font-medium animate-in slide-in-from-right-10 duration-500">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                    <img src="/app-icon-192.png" alt="Taksi" className="w-10 h-10 rounded-xl shadow-md border border-white/50" />
                    <div className="flex flex-col">
                        <span className="font-black text-base">Taksi</span>
                        <span className="text-xs font-bold opacity-80">Ana ekrana ekle</span>
                    </div>
                </div>
                <button 
                    onClick={handleClose}
                    className="p-1 text-secondary/70 hover:text-black hover:bg-white/50 rounded-full transition-colors"
                    aria-label="Kapat"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            
            <button 
                onClick={handleInstallClick}
                className="w-full bg-secondary text-white text-sm font-bold py-2 mt-1 rounded-xl hover:bg-black transition-colors shadow-lg"
            >
                Hemen Ekle
            </button>
        </div>
    );
};
