"use client";

import { useState, useEffect } from "react";

export const FooterSignature = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    // The prefix that types out and deletes
    const fullText = "TaksiPRO V2 - ";
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const pauseTime = 2500; // How long it stays fully typed

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (!isDeleting && text === fullText) {
            // Wait at the end before deleting
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === "") {
            // Wait empty before starting again
            timer = setTimeout(() => setIsDeleting(false), 500);
        } else {
            // Type or delete a character
            timer = setTimeout(() => {
                setText(
                    isDeleting
                        ? fullText.substring(0, text.length - 1)
                        : fullText.substring(0, text.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <a
            href="https://wa.me/905415041938?text=Merhaba%20Sekiz%20Yazılım.%20Seferihisar%20Taksi%20web%20projenizdeki%20modern%20tasarım%20ve%20hızlı%20SEO%20altyapısı%20dikkatimi%20çekti.%20Kendi%20projem%20için%20de%20benzer%20kalitede%20bir%20teknolojik%20çözüm%20arıyorum,%20detayları%20görüşebilir%20miyiz?"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:opacity-80 transition-all duration-300 inline-flex items-center"
            style={{
                textDecoration: "none",
            }}
        >
            {/* The typewriter part */}
            <span
                style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                }}
            >
                {text}
            </span>
            
            {/* Blinking cursor */}
            <span className="inline-block w-[3px] h-[0.9em] bg-red-400 mx-[2px] opacity-100 group-hover:opacity-50 transition-opacity" style={{ animation: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></span>

            {/* The static part */}
            <span
                style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                }}
            >
                SEKİZ YAZILIM
            </span>
        </a>
    );
};
