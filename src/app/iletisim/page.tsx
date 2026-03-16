import { Metadata } from "next";
import { Phone, MapPin, Mail, Navigation } from "lucide-react";

export const metadata: Metadata = {
    title: "İletişim | Seferihisar Taksi",
    description: "Seferihisar taksi durağımıza ulaşmak için iletişim sayfamızı ziyaret edin. 7/24 taksi çağırmak için telefon numaramız: 0554 115 44 22",
    keywords: ["seferihisar taksi iletişim", "seferihisar taksi numarası", "seferihisar taksi telefonu", "sığacık taksi numarası"],
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">İletişim</h1>
                    <p className="text-lg text-gray-700">
                        Bize 7/24 ulaşabilirsiniz. Taksi çağırmak, rezervasyon yapmak veya fiyat bilgisi almak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-secondary mb-6">İletişim Bilgilerimiz</h2>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary mb-1">Telefon</h3>
                                <a href="tel:+905541154422" className="text-primary font-bold text-xl hover:text-primary-hover transition-colors">
                                    0554 115 44 22
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Navigation className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary mb-1">Hizmet Bölgeleri</h3>
                                <p className="text-gray-600">Seferihisar, Sığacık, Ürkmez, Doğanbey, Akarca, Payamlı ve tüm çevresi.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-secondary mb-1">Adres</h3>
                                <p className="text-gray-600">Seferihisar Merkez, İzmir, Türkiye</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <p className="font-medium text-gray-800">
                                Önceden rezervasyon yapmak veya özel transfer fiyatı almak için WhatsApp üzerinden de yazabilirsiniz.
                            </p>
                            <a
                                href="https://wa.me/905541154422"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-colors w-full sm:w-auto"
                            >
                                WhatsApp'tan Yazın
                            </a>
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-inner">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100063.83226955748!2d26.757042502847934!3d38.196397368686644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb9ccce6eafe67%3A0xe74f4b1efc9f8099!2sSeferihisar%2C%20%C4%B0zmir!5e0!3m2!1str!2str!4v1700685600000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
