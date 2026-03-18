"use client";

import { useState } from "react";
import { Navigation } from "lucide-react";

export const SendLocationButton = ({ className = "" }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLocation = () => {
    if (!navigator.geolocation) {
      alert("Tarayıcınız konum özelliğini desteklemiyor.");
      return;
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoading(false);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const mapsUrl = `https://maps.google.com/?q=${lat},${lon}`;
        
        const message = `Merhaba, bulunduğum bu konuma acil taksi alabilir miyim? Konum: ${mapsUrl}`;
        const whatsappUrl = `https://wa.me/905541154422?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, "_blank");
      },
      (error) => {
        setIsLoading(false);
        let errorMsg = "Konum alınamadı.";
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg = "Lütfen tarayıcı ayarlarından konum erişimine izin verin.";
        }
        alert(errorMsg);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <button
      onClick={handleSendLocation}
      disabled={isLoading}
      className={`bg-white text-secondary hover:bg-gray-100 font-bold px-6 sm:px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-3 ${className}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Konum Bulunuyor...
        </>
      ) : (
        <>
          <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="currentColor" />
          Konumumu Gönder
        </>
      )}
    </button>
  );
};
