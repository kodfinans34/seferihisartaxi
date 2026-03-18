import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { regions } from "@/data/regions";

export const Footer = () => {
    // Take top 6 important regions for the footer links
    const topRegions = regions.slice(0, 6);

    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Seferihisar <span className="text-primary">Taksi</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            İzmir, Seferihisar, Sığacık, Ürkmez ve tüm çevre ilçelerde 7/24 hızlı, güvenilir ve konforlu taksi hizmeti sunuyoruz.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-primary">Hızlı Linkler</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Anasayfa</Link></li>
                            <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="/havalimani-transfer" className="text-gray-400 hover:text-white transition-colors">Havalimanı Transfer</Link></li>
                            <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-primary">Hizmet Bölgeleri</h4>
                        <ul className="space-y-3">
                            {topRegions.map((region) => (
                                <li key={region.slug}>
                                    <Link href={`/taksi/${region.slug}`} className="text-gray-400 hover:text-white transition-colors">
                                        {region.name} Taksi
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-primary">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <a href="tel:+905541154422" className="text-gray-300 hover:text-white font-medium transition-colors text-lg tracking-wide">0554 115 44 22</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-gray-300">Seferihisar Merkez / İzmir</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-gray-300">7/24 Nöbetçi Hizmet</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Seferihisar Taksi. Tüm hakları saklıdır.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://wa.me/905415041938?text=Sizinle%20%C3%A7al%C4%B1%C5%9Fmak%20istiyorum%2C%20Sekiz%20Yaz%C4%B1l%C4%B1m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 hover:scale-105 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            letterSpacing: "0.15em",
                            textDecoration: "none",
                            display: "inline-block",
                        }}
                    >
                        ✦ SEKİZ YAZILIM ✦
                    </a>
                </div>
            </div>
        </footer>
    );
};
