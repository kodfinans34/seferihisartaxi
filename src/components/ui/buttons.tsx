import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export const CallButton = ({ className = "" }: { className?: string }) => {
    return (
        <a
            href="tel:+905541154422"
            className={`inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-secondary font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${className}`}
        >
            <Phone className="w-5 h-5" />
            <span>Hemen Ara</span>
        </a>
    );
};

export const WhatsAppButton = ({ className = "" }: { className?: string }) => {
    return (
        <a
            href="https://wa.me/905541154422"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${className}`}
        >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp İletişim</span>
        </a>
    );
};
