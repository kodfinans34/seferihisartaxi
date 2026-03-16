import { Metadata } from "next";
import { Clock, Plane, ShieldCheck, MapPin } from "lucide-react";
import { ServiceCard } from "@/components/ui/Cards";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Seferihisar Taksi",
    description: "İzmir Seferihisar'da sunduğumuz 7/24 taksi, havalimanı transferi, şehir içi ve şehirler arası vip taksi hizmetlerimizi inceleyin.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Hizmetlerimiz</h1>
                    <p className="text-lg text-gray-700">
                        İhtiyacınıza uygun çeşitli taksi ve transfer hizmetleriyle her zaman yanınızdayız.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard
                        title="7/24 Taksi"
                        description="Gece veya gündüz, yağmur veya çamur demeden her an taksi hizmeti. Acil durumlarda bile bir telefon uzağınızdayız."
                        icon={<Clock className="w-8 h-8" />}
                        href="/iletisim"
                    />
                    <ServiceCard
                        title="Havalimanı Transfer"
                        description="Adnan Menderes Havalimanı (ADB) için VIP konforunda ve tam vaktinde lüks transfer hizmeti."
                        icon={<Plane className="w-8 h-8" />}
                        href="/havalimani-transfer"
                    />
                    <ServiceCard
                        title="Şehirler Arası"
                        description="Sadece İzmir içi değil, diğer şehirlere de güvenli, konforlu ve indirimli seyahat imkanı sağlıyoruz."
                        icon={<ShieldCheck className="w-8 h-8" />}
                        href="/iletisim"
                    />
                    <ServiceCard
                        title="Turistik Geziler"
                        description="Efes, Şirince, Çeşme, Urla ve Sığacık çevresinde özel şoförlü turistik seyahat hizmeti."
                        icon={<MapPin className="w-8 h-8" />}
                        href="/sigacik-taksi"
                    />
                </div>
            </div>
        </div>
    );
}
