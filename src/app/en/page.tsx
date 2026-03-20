import Image from "next/image";
import Link from "next/link";
import { Clock, Plane, ShieldCheck, MapPin, ChevronRight, Star } from "lucide-react";
import { ReviewStars } from "@/components/ui/ReviewStars";

export const metadata = {
  title: "Seferihisar Taxi 24/7 & Izmir Airport Transfer | Sigacik Taxi",
  description: "Fast, reliable, and cheap taxi services in Seferihisar, Sigacik, and Izmir Adnan Menderes Airport (ADB). Call our 24/7 English speaking taxi service.",
  keywords: ["Seferihisar Taxi", "Sigacik Taxi", "Izmir Airport Transfer", "English speaking taxi Izmir", "Seferihisar to Airport", "Urkmez Taxi"]
};

export default function EnglishHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available 24/7
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Fast and Safe</span> Taxi Service in Seferihisar
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Professional, comfortable, and economic transportation in Seferihisar, Sigacik, Urkmez, and Izmir ADB Airport. Reach your destination on time.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              {/* Manual buttons instead of CallButton to have English text */}
              <a href="tel:+905541154422" className="bg-primary text-secondary hover:bg-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-3">
                Call Taxi Now
              </a>
              <a href="https://wa.me/905541154422" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-3">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Banner */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-secondary text-center md:text-left">
              Need a Taxi in Seferihisar or Sigacik?
            </h2>
            <a href="tel:+905541154422" className="bg-secondary text-white hover:bg-black font-bold text-xl px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-3">
              Book Instantly
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 font-medium">We are always at your service 24/7 with our professional team and modern fleet to offer you the best ride.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">24/7 Non-Stop</h3>
                <p className="text-gray-600">We provide uninterrupted taxi services every hour of the day.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Plane className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Airport Transfer</h3>
                <p className="text-gray-600">VIP & standard transportation options to Izmir Adnan Menderes Airport (ADB).</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Safe Journey</h3>
                <p className="text-gray-600">Travel safely with our experienced drivers and well-maintained vehicles.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Wide Network</h3>
                <p className="text-gray-600">Complete local knowledge over Seferihisar, Sigacik, Urla, and Urkmez.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Service Areas</h2>
              <p className="text-gray-600 font-medium max-w-2xl">We provide transportation to all points in and around the pearl of Izmir, Seferihisar.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <img src="/seferihisar-bgt.png" alt="Seferihisar Taxi" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-bold">Seferihisar Center</div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <img src="/sigacik-bg.png" alt="Sigacik Taxi" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-bold">Sigacik Marina & Teos</div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <img src="/urkmez-bg.png" alt="Urkmez Taxi" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-xl font-bold">Urkmez Beach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 fill-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Customer Reviews</h2>
            <div className="flex justify-center mb-6">
              <ReviewStars rating={5.0} />
            </div>
            <p className="text-xl text-gray-700 italic mb-8">
              "Very fast and polite service. The driver was very attentive, the vehicle was clean and comfortable. Definitely recommend it for tourists staying in Sigacik."
            </p>
            <a
              href="https://g.page/r/CXiz0i0fzzocEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white border-2 border-gray-200 text-secondary font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Rate us on Google
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
