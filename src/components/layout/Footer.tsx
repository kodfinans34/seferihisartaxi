import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { regions } from "@/data/regions";
import { FooterSignature } from "@/components/ui/FooterSignature";

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
                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <a
                                        href="https://maps.google.com/maps?q=Camikebir,%20Atat%C3%BCrk%20Cd.%20No:1,%2035460%20Seferihisar/%C4%B0zmir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white hover:underline transition-all duration-300 text-sm md:text-base leading-relaxed"
                                    >
                                        Camikebir, Atatürk Cd. No:1, 35460 Seferihisar/İzmir
                                    </a>
                                    <div className="w-full h-[120px] rounded-lg overflow-hidden border border-primary/20 shadow-lg">
                                        <iframe
                                            src="https://maps.google.com/maps?q=Camikebir,%20Atat%C3%BCrk%20Cd.%20No:1,%2035460%20Seferihisar/%C4%B0zmir&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <a
                                        href="https://business.google.com/v/_/AKsrIN1UrZAI0CwWmJ-UEJKqyqUdq5wmx0WUaV9tTNwWKn6xaCpymTCpvxZW/ce9c/_?caid=23676082477&agid=&gclid=Cj0KCQjw7IjOBhDyARIsAFzrWQyxxd0cZWKaPfRpqvUbj3cY5aB6l4HWSV4eiI8zU8DjzbJRGWxiD5waAmA0EALw_wcB&gad_source=1&gad_campaignid=23671448543&gbraid=0AAAABDJ82ObtkYyl6lkRPMtcYO43XTqSX&gclid=Cj0KCQjw7IjOBhDyARIsAFzrWQyxxd0cZWKaPfRpqvUbj3cY5aB6l4HWSV4eiI8zU8DjzbJRGWxiD5waAmA0EALw_wcB"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 mt-1 text-primary hover:text-white font-semibold text-sm bg-primary/10 hover:bg-primary/80 px-4 py-2 rounded-lg border border-primary/30 hover:border-primary transition-all duration-300 w-fit"
                                    >
                                        <Star className="w-4 h-4 fill-primary" />
                                        Google Benim İşletmem
                                    </a>
                                </div>
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
                    <FooterSignature />
                </div>
            </div>
        </footer>
    );
};
