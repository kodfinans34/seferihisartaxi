import Image from "next/image";
import Link from "next/link";
import { Clock, Plane, ShieldCheck, MapPin, ChevronRight, Star, Quote, TrendingUp, Phone, MessageCircle } from "lucide-react";
import { CallButton } from "@/components/ui/buttons";
import { ServiceCard, AreaCard } from "@/components/ui/Cards";
import { SendLocationButton } from "@/components/ui/SendLocationButton";
import { ReviewStars } from "@/components/ui/ReviewStars";
import { blogs } from "@/data/blogs";

const faqs = [
  { q: "Seferihisar taksi açılış ücreti ne kadar?", a: "Taksi açılış ücretleri İzmir UKOME tarafından belirlenmekte olup güncel tarifeler anlık olarak taksimetre üzerinde yazmaktadır. Fiyatlarımız hakkında çağrı merkezimizden tahmini bilgi alabilirsiniz." },
  { q: "Gece saatlerinde Sığacık veya Seferihisar'da taksi bulabilir miyim?", a: "Evet, duraklarımız 7/24 nöbetçi taksi mantığıyla çalışmaktadır. Gecenin ilerleyen saatlerinde bile bir telefonla bulunduğunuz konuma araç isteyebilirsiniz." },
  { q: "İzmir Adnan Menderes Havalimanı (ADB) transferi yapıyor musunuz?", a: "Kesinlikle. İzmir Havalimanı ile Seferihisar Merkez, Sığacık, Özdere ve Ürkmez arasında şoförlü VIP veya standart taksi transfer hizmetimiz bulunmaktadır." },
  { q: "Araçlarda evcil hayvan taşıma prosedürünüz nedir?", a: "Evcil dostlarınızla seyahat etmeniz bizim için sorun değildir. Lütfen aracı çağırırken kedi/köpek kafesi olduğunu veya kılıf gerektiğini belirtiniz." },
  { q: "Uzak mesafeler (Çeşme, Kuşadası, Efes) için sabit ücret mi var taksimetre mi?", a: "Yasalar gereği taksimetre açılması zorunludur. Ancak uzak mesafeler için yola çıkmadan önce size ortalama bir ücret hesaplaması yapılarak ön bilgilendirme sunulur." }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
        }
    }))
};

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
            <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-auto">
              <h2 className="text-xl md:text-2xl font-black text-secondary flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" /> Seferihisar'da Taksi mi Lazım?
              </h2>
              <div className="flex justify-center md:justify-start">
                <SendLocationButton className="w-full sm:w-auto text-base sm:text-lg" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a href="tel:+905541154422" className="w-full sm:w-auto justify-center bg-secondary text-white hover:bg-black font-bold text-base sm:text-lg px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
                Hemen Çağır
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prime SEO Target Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
              <Image src="/seferihisar-bg.png" alt="Seferihisar Taksi Nöbetçi Transfer" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg font-bold text-secondary">
                    <ShieldCheck className="w-6 h-6 text-green-500" /> Binlerce Mutlu Yolcu
                 </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-secondary font-bold text-sm">
                <TrendingUp className="w-4 h-4 text-primary" /> Bölgenin En Güvenilir Turizm Taşımacılığı
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight">
                <span className="text-primary border-b-4 border-primary/30 pb-1">Seferihisar Taksi</span> İhtiyaçlarınız İçin Kesin Çözüm
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                  <p>
                    <strong>Seferihisar Taksi</strong> olarak yılların bize kattığı deneyimle Sığacık, İzmir Havalimanı (ADB), Akarca, Ürkmez ve çevre beldelere 7 gün 24 saat kesintisiz, lüks ve hızlı ulaşım sağlıyoruz. Amacımız sizi sadece bir lokasyondan diğerine götürmek değil; tamamen yepyeni, geniş bagajlı ve klimalı ticari araçlarımızla VIP standartlarında bir yolculuk deneyimi yaşatmaktır.
                  </p>
                  <p>
                    Bulmaya çalıştığınız ister gecenin bir yarısı <em>acil nöbetçi bir taksi</em>, ister ailenizle birlikte güvenle yapacağınız bir tatil transferi, ister can dostunuz <em>evcil hayvanınızla (pet taksi)</em> yapacağınız kısa bir yolculuk olsun; bölgeyi ezbere bilen usta şoför kadromuzla bir telefon uzağınızdayız. Gönül rahatlığıyla seyahat edip asla fahiş bedeller ödemeden en adil <strong>Seferihisar Taksi ücretleriyle</strong> gideceğiniz yere ulaşırsınız.
                  </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
                <a href="tel:+905541154422" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-4 sm:px-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg">
                   <Phone className="w-5 h-5 flex-shrink-0 text-primary" /> 
                   <span className="whitespace-nowrap">Hemen Ulaşın: 0554 115 44 22</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Fleet Images Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Geniş ve Konforlu Araç Filomuz</h2>
            <p className="text-gray-600 font-medium">Sizlere en iyi deneyimi sunmak için sürekli yenilenen, klimalı ve geniş iç hacimli modern araçlarımızla hizmetinizdeyiz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-8 md:pb-12">
            {/* Image 1 */}
            <Link href="/seferihisar-taksi" className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white block cursor-pointer">
              <Image src="/taxi-premium-1.png" alt="Seferihisar Merkez Taksi Filosu ve 7/24 Nöbetçi Taksi" fill className="object-cover group-hover:scale-110 transition-transform duration-700" title="Seferihisar Taksi Filomuz" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white">
                  <h3 className="font-bold text-2xl mb-1 text-primary">Ticari Taksi Filomuz</h3>
                  <p className="text-sm md:text-base text-gray-200 font-medium">İhtiyacınız anında, sıra beklemeden 7/24 kapınızda hazır bekleyen geniş araç ağımız.</p>
                </div>
              </div>
            </Link>
            
            {/* Image 2 */}
            <Link href="/havalimani-transfer" className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white block cursor-pointer md:translate-y-12">
              <Image src="/taxi-premium-2.png" alt="İzmir Adnan Menderes Havalimanı (ADB) VIP Taksi Transfer" fill className="object-cover group-hover:scale-110 transition-transform duration-700" title="İzmir Havalimanı Transfer Taksi" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-primary/95 backdrop-blur-md border border-primary-hover/50 p-5 rounded-2xl text-secondary shadow-lg">
                  <h3 className="font-extrabold text-2xl mb-1">Havalimanı & VIP Transfer</h3>
                  <p className="text-sm md:text-base font-semibold text-secondary/80">İzmir Havalimanı ve Seferihisar arası konforlu, klimalı resmi ticari taksi güvencesi.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
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

      {/* Reviews Section with Mobile Carousel */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Star className="w-8 h-8 fill-primary text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sizden Gelen Müşteri Yorumları</h2>
            <p className="text-gray-400 font-medium text-lg">Yüzlerce mutlu yolcumuzun arasına katılın. Sizlerin memnuniyeti bizim en büyük motivasyonumuz.</p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { author: "Ayşe Y.", text: "Çok hızlı ve kibar bir hizmet. Şoför bey çok ilgiliydi, araç temiz ve konforluydu. Kesinlikle tavsiye ederim." },
              { author: "Burak K.", text: "İzmir Havalimanı transferi için kullandık. Uçağımız rötar yapmasına rağmen bizi bekleyip valizlerimize yardımcı oldular. Profesyonel çalışma." },
              { author: "Elif M.", text: "Sığacık Marina'dan merkeze geçmek için aradık. 5 dakika içinde kapıdaydılar. Araç pırıl pırıl ve klimalıydı." },
              { author: "Caner D.", text: "Gece geç saatte Ürkmez'den taksi bulabilir miyiz diye endişe ederken bizi hemen alıp evimize güvenle bıraktılar. Çok teşekkürler." },
              { author: "Zeynep A.", text: "Teos Antik Kenti dönüşü taksimiz anında geldi. Şoför abinin yöre hakkındaki sohbeti ve muhabbeti şahaneydi. Çok memnunuz." },
            ].map((review, idx) => (
              <div key={idx} className="min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center bg-white/5 backdrop-blur-lg rounded-[2rem] border border-white/10 p-8 flex flex-col h-full hover:bg-white/10 transition-colors">
                <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
                <div className="flex justify-between items-center mb-6 relative z-10">
                    <div className="font-bold text-white text-lg">{review.author}</div>
                    <ReviewStars rating={5.0} />
                </div>
                <p className="text-gray-300 italic flex-grow text-lg leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-2 mt-6 text-xs font-bold text-gray-400 relative z-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 grayscale opacity-70" /> Google'da Doğrulanmış Yorum
                </div>
              </div>
            ))}
            
            {/* Direct Google Review Button Box */}
            <div className="min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center bg-primary rounded-[2rem] border border-primary-hover p-8 flex flex-col items-center justify-center text-center h-full hover:bg-primary-hover transition-colors shadow-xl">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Siz Değerli Müşterimiz?</h3>
                <p className="text-secondary/80 mb-8 font-medium">Hizmetimizden memnun kaldınız mı? Bir dakikanızı ayırıp 5 yıldız vermek ister misiniz?</p>
                <a
                  href="https://g.page/r/CXiz0i0fzzocEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white font-bold py-4 px-8 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 w-full justify-center"
                >
                  <Star className="w-5 h-5 fill-primary text-primary" /> Yorum Bırakın
                </a>
            </div>
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
                <li><Link href="/taksi/doganbey-sahil-taksi" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">Doğanbey Taksi</Link></li>
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

      {/* Latest Blog Posts Section */}
      <section id="blog" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Ulaşım ve Taksi Rehberi</h2>
              <p className="text-gray-600 font-medium max-w-2xl">Bölgeye seyahat etmeden önce mutlaka okumanız gereken faydalı içeriklerimiz.</p>
            </div>
            <Link href="/blog" className="text-primary font-bold hover:text-primary-hover flex items-center">
              Tüm Makaleler <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 6).map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/50 transition-all flex flex-col h-full group">
                <div className="text-sm text-primary font-bold mb-3">{blog.date}</div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                <p className="text-gray-600 line-clamp-3 flex-grow">{blog.description}</p>
                <div className="mt-6 flex items-center text-primary font-semibold text-sm">
                  Devamını Oku <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 font-medium">Bize ulaşmadan önce en çok merak edilenlere buradan göz atabilirsiniz.</p>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-2xl border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-secondary text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-primary">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
