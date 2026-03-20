import { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ExternalLink, Phone, MessageCircle, ThumbsUp, MapPin } from "lucide-react";
import { ReviewStars } from "@/components/ui/ReviewStars";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Müşteri Yorumları | Seferihisar Taksi Google Değerlendirmeleri",
    description: "Seferihisar Taksi hizmetimiz hakkında müşterilerimizin Google üzerinden yaptığı gerçek değerlendirmeler ve yorumlar. 4.9 yıldız ortalama ile bölgenin en güvenilir taksi hizmeti.",
    keywords: ["seferihisar taksi yorumları", "seferihisar taksi değerlendirme", "seferihisar taksi puanı", "google yorumları seferihisar"],
};

const allReviews = [
    {
        author: "Ayşe Y.",
        text: "Çok hızlı ve kibar bir hizmet. Şoför bey çok ilgiliydi, araç temiz ve konforluydu. Kesinlikle tavsiye ederim.",
        date: "2 hafta önce",
        avatar: "A",
        rating: 5,
    },
    {
        author: "Burak K.",
        text: "İzmir Havalimanı transferi için kullandık. Uçağımız rötar yapmasına rağmen bizi bekleyip valizlerimize yardımcı oldular. Profesyonel çalışma.",
        date: "1 ay önce",
        avatar: "B",
        rating: 5,
    },
    {
        author: "Elif M.",
        text: "Sığacık Marina'dan merkeze geçmek için aradık. 5 dakika içinde kapıdaydılar. Araç pırıl pırıl ve klimalıydı.",
        date: "2 ay önce",
        avatar: "E",
        rating: 5,
    },
    {
        author: "Caner D.",
        text: "Gece geç saatte Ürkmez'den taksi bulabilir miyiz diye endişe ederken bizi hemen alıp evimize güvenle bıraktılar. Çok teşekkürler.",
        date: "2 ay önce",
        avatar: "C",
        rating: 5,
    },
    {
        author: "Zeynep A.",
        text: "Teos Antik Kenti dönüşü taksimiz anında geldi. Şoför abinin yöre hakkındaki sohbeti ve muhabbeti şahaneydi. Çok memnunuz.",
        date: "3 ay önce",
        avatar: "Z",
        rating: 5,
    },
    {
        author: "Mehmet T.",
        text: "Seferihisar'dan havalimanına gece 4'te transfer yaptık. Tam zamanında geldiler, araç çok temizdi. Fiyat da gayet makuldü. Tekrar tercih ederiz.",
        date: "3 ay önce",
        avatar: "M",
        rating: 5,
    },
    {
        author: "Selin K.",
        text: "Kedimizle beraber veterinere gitmemiz gerekiyordu, taşıma çantasıyla kabul ettiler. Çok anlayışlı ve profesyonel bir hizmet. Teşekkürler!",
        date: "4 ay önce",
        avatar: "S",
        rating: 5,
    },
    {
        author: "Hasan Ö.",
        text: "Doğanbey sahilden Seferihisar merkeze geçtik. Şoför bey yol boyunca bölgenin güzelliklerini anlattı, çok keyifli bir yolculuktu.",
        date: "4 ay önce",
        avatar: "H",
        rating: 5,
    },
    {
        author: "Fatma B.",
        text: "Yaşlı annem için hastaneye gidiş-dönüş transferi ayarladık. Şoför bey anneme çok kibar davrandı, inip binmesine yardımcı oldu. Allah razı olsun.",
        date: "5 ay önce",
        avatar: "F",
        rating: 5,
    },
    {
        author: "Ali R.",
        text: "Urla'dan Sığacık'a arkadaş grubu olarak gittik. 7 kişi idik ama geniş araçla sorunsuz taşındık. Bagaj alanı da yeterli oldu. Çok memnun kaldık.",
        date: "5 ay önce",
        avatar: "A",
        rating: 5,
    },
    {
        author: "Derya Ş.",
        text: "Çeşme'den Seferihisar'a gece dönüşte aradık. 15 dakikada buluşma noktasındaydılar. Gece tarifesi konusunda önceden bilgi verdiler, şeffaf ve güvenilir.",
        date: "6 ay önce",
        avatar: "D",
        rating: 5,
    },
    {
        author: "Emre Y.",
        text: "WhatsApp'tan konum attık, dakikalar içinde aracımız geldi. Çok pratik ve hızlı bir sistem kurmuşlar. Modern bir taksi hizmeti gerçekten.",
        date: "6 ay önce",
        avatar: "E",
        rating: 5,
    },
];

// Google-style avatar colors
const avatarColors = [
    "bg-blue-500", "bg-red-500", "bg-green-500", "bg-amber-500",
    "bg-purple-500", "bg-pink-500", "bg-teal-500", "bg-indigo-500",
    "bg-orange-500", "bg-cyan-500", "bg-emerald-500", "bg-rose-500",
];

const reviewPageSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Seferihisar Taksi",
    "url": "https://seferihisartaxi.com",
    "telephone": "+905541154422",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "134",
        "bestRating": "5"
    },
    "review": allReviews.map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.author },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": String(r.rating),
            "bestRating": "5"
        },
        "reviewBody": r.text
    }))
};

export default function YorumlarPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewPageSchema) }}
            />
            <BreadcrumbSchema items={[
                { name: "Anasayfa", href: "/" },
                { name: "Müşteri Yorumları", href: "/yorumlar" }
            ]} />

            {/* Hero Header */}
            <section className="relative bg-secondary text-white pt-12 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    {/* Google Logo Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 mb-8">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google"
                            className="w-6 h-6"
                        />
                        <span className="font-bold text-white/90 text-sm">Google İşletme Yorumları</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Müşterilerimiz <span className="text-primary">Ne Diyor?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Gerçek yolcularımızın Google üzerinden paylaştığı deneyimler. Her yorum, sunduğumuz hizmetin bir yansımasıdır.
                    </p>

                    {/* Stats Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-7 h-7 fill-primary text-primary" />
                                ))}
                            </div>
                            <span className="text-3xl font-extrabold text-white">4.9</span>
                            <span className="text-sm text-gray-400 font-medium">ortalama puan</span>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-extrabold text-white">134+</span>
                            <span className="text-sm text-gray-400 font-medium">toplam değerlendirme</span>
                        </div>
                        <div className="hidden sm:block w-px h-16 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-extrabold text-primary">%98</span>
                            <span className="text-sm text-gray-400 font-medium">memnuniyet oranı</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-16 -mt-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allReviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6 flex flex-col relative group"
                            >
                                {/* Quote Icon */}
                                <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-100 group-hover:text-primary/10 transition-colors" />

                                {/* Header: Avatar + Author */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 ${avatarColors[idx % avatarColors.length]} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-secondary text-sm">{review.author}</div>
                                        <div className="text-xs text-gray-400">{review.date}</div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                        alt="Google"
                                        className="w-4 h-4 ml-auto opacity-50"
                                    />
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-0.5 mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Helpful Button */}
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                                    <ThumbsUp className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="text-xs text-gray-400 font-medium">Faydalı</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: Leave a Review + Contact */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Leave a Google Review */}
                        <div className="bg-primary rounded-[2rem] p-8 md:p-10 text-center flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-5">
                                <Star className="w-8 h-8 text-secondary fill-secondary" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-secondary mb-3">Siz de Değerlendirin</h2>
                            <p className="text-secondary/70 mb-6 font-medium text-sm">
                                Hizmetimizden memnun kaldıysanız, Google üzerinden bize 5 yıldız vererek destek olabilirsiniz.
                            </p>
                            <a
                                href="https://g.page/r/CXiz0i0fzzocEAE/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-white font-bold py-4 px-8 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 w-full justify-center"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Google&apos;da Yorum Bırakın
                                <ExternalLink className="w-4 h-4 opacity-60" />
                            </a>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-secondary rounded-[2rem] p-8 md:p-10 text-center flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-5">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-white mb-3">Hemen Taksi Çağırın</h2>
                            <p className="text-gray-400 mb-6 font-medium text-sm">
                                7/24 hizmetinizdeyiz. Arayın veya WhatsApp ile ulaşın.
                            </p>
                            <div className="flex flex-col gap-3 w-full">
                                <a
                                    href="tel:+905541154422"
                                    className="bg-primary text-secondary font-bold py-4 px-8 rounded-xl hover:bg-primary-hover transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 justify-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    0554 115 44 22
                                </a>
                                <a
                                    href="https://wa.me/905541154422"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 justify-center"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp İletişim
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed Badge */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://g.page/r/CXiz0i0fzzocEAE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full px-6 py-3 transition-colors"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            <span className="font-bold text-secondary text-sm">Google Haritalar&apos;da Görüntüle</span>
                            <MapPin className="w-4 h-4 text-primary" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
