"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 md:bottom-28 right-4 md:right-6 z-40 bg-primary hover:bg-primary-hover text-secondary p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 group border-2 border-secondary animate-in fade-in zoom-in group"
      aria-label="Yukarı Çık"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[10px] font-black px-2 py-0.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        TAKSİ
      </div>
      <ChevronUp className="w-6 h-6 stroke-[3] group-hover:drop-shadow-lg" />
    </button>
  );
};
