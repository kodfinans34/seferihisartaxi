import Image from "next/image";
import Link from "next/link";
import { Clock, Plane, ShieldCheck, MapPin, ChevronRight, Star } from "lucide-react";
import { CallButton } from "@/components/ui/buttons";
import { ServiceCard, AreaCard } from "@/components/ui/Cards";
import { ReviewStars } from "@/components/ui/ReviewStars";

export default function Home() {
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
              7/24 Hizmetinizdeyiz
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seferihisar'da <span className="text-primary">Hızlı ve Güvenli</span> Taksi Hizmeti
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Seferihisar, Sığacık, Ürkmez ve çevresinde profesyonel, konforlu ve ekonomik ulaşım. İstediğiniz yere zamanında ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              <CallButton className="w-full sm:w-auto text-lg px-8 py-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Banner */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-secondary text-center md:text-left">
              Seferihisar'da Taksi mi Lazım?
            </h2>
            <a href="tel:+905541154422" className="bg-secondary text-white hover:bg-black font-bold text-xl px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-3">
              Hemen Çağır
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 font-medium">Size en iyi hizmeti sunmak için profesyonel ekibimiz ve modern araçlarımızla 7/24 yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="7/24 Kesintisiz"
              description="Günün her saati, haftanın her günü kesintisiz taksi hizmeti sunuyoruz."
              icon={<Clock className="w-8 h-8" />}
            />
            <ServiceCard
              title="Hızlı Ulaşım"
              description="Nerede olursanız olun, çağrınıza anında yanıt veriyor ve en kısa sürede yanınızda oluyoruz."
              icon={<Plane className="w-8 h-8" />}
            />
            <ServiceCard
              title="Güvenli Yolculuk"
              description="Deneyimli şoförlerimiz ve bakımlı araçlarımızla güvenle seyahat edersiniz."
              icon={<ShieldCheck className="w-8 h-8" />}
            />
            <ServiceCard
              title="Geniş Hizmet Ağı"
              description="Seferihisar, Sığacık, Ürkmez ve çevredeki tüm bölgelere hakimiz."
              icon={<MapPin className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Hizmet Bölgelerimiz</h2>
              <p className="text-gray-600 font-medium max-w-2xl">İzmir'in incisi Seferihisar ve çevresinde her noktaya ulaşım sağlıyoruz.</p>
            </div>
            <Link href="/hizmetlerimiz" className="text-primary font-bold hover:text-primary-hover flex items-center">
              Tüm Bölgeler <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AreaCard title="Seferihisar Merkez" href="/seferihisar-taksi" image="/seferihisar-bg.png" />
            <AreaCard title="Sığacık Marina" href="/sigacik-taksi" image="/sigacik-bg.png" />
            <AreaCard title="Ürkmez Sahil" href="/urkmez-taksi" image="/urkmez-bg.png" />
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
            <h2 className="text-3xl font-bold text-secondary mb-4">Müşteri Yorumları</h2>
            <div className="flex justify-center mb-6">
              <ReviewStars rating={5.0} />
            </div>
            <p className="text-xl text-gray-700 italic mb-8">
              "Çok hızlı ve kibar bir hizmet. Şoför bey çok ilgiliydi, araç temiz ve konforluydu. Kesinlikle tavsiye ederim."
            </p>
            <a
              href="https://g.page/r/CXiz0i0fzzocEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white border-2 border-gray-200 text-secondary font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Google'da Değerlendir
            </a>
          </div>
        </div>
      </section>

      {/* SEO & Keywords Discovery Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Seferihisar ve Çevresinde 7/24 Yanınızdayız</h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-medium">
              İster acil bir taksi ihtiyacı, ister planlı bir havalimanı transferi olsun. Şehrin her noktasından bizi hemen arayabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Local SEO Targets */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" />
                Popüler Duraklar
              </h3>
              <ul className="space-y-3">
                <li><Link href="/seferihisar-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Seferihisar Merkez Taksi</Link></li>
                <li><Link href="/sigacik-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Sığacık Taksi</Link></li>
                <li><Link href="/urkmez-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Ürkmez Taksi</Link></li>
                <li><Link href="/taksi/seferihisar-doganbey-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Doğanbey Taksi</Link></li>
                <li><Link href="/taksi/seferihisar-camiikebir-mahallesi-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Camikebir Taksi</Link></li>
                <li><Link href="/taksi/seferihisar-tepecik-mahallesi-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Tepecik Taksi</Link></li>
              </ul>
            </div>

            {/* Action Targets */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Clock className="text-primary w-5 h-5" />
                Hızlı Hizmet
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 font-medium text-sm">Seferihisar Acil Taksi</li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar Gece Taksi</li>
                <li className="text-gray-600 font-medium text-sm">7/24 Hızlı Taksi Çağır</li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar VIP Taksi</li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar Uygun Fiyatlı Taksi</li>
                <li className="text-gray-600 font-medium text-sm">İzmir Seferihisar Taksi Fiyatları</li>
              </ul>
            </div>

            {/* Transfer Targets */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Plane className="text-primary w-5 h-5" />
                Transfer & Turizm
              </h3>
              <ul className="space-y-3">
                <li><Link href="/havalimani-transfer" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Seferihisar İzmir Havaalanı Transfer</Link></li>
                <li><Link href="/havalimani-transfer" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Sığacık Havaalanı Transfer</Link></li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar Adnan Menderes Taksi</li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar Özel Transfer Hizmeti</li>
                <li className="text-gray-600 font-medium text-sm">Sığacık Liman Taksi</li>
                <li className="text-gray-600 font-medium text-sm">Seferihisar Havaalanı Transfer Ücreti</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="tel:+905541154422" className="w-full sm:w-auto px-8 py-4 bg-primary text-secondary font-bold rounded-xl shadow-lg hover:bg-primary-hover transition-all text-center">
              Hemen Taksi Seferihisar
            </a>
            <a href="https://wa.me/905541154422" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#20bd5a] transition-all text-center">
              WhatsApp'tan Çağır
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
