import { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/ui/buttons";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { regions } from "@/data/regions";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Seferihisar Taksi | Seferihisar Merkez 7/24 Taksi",
    description: "Seferihisar merkezde hızlı, güvenli ve ekonomik taksi hizmeti. 7/24 Seferihisar taksi çağırmak için hemen arayın.",
    keywords: ["seferihisar taksi", "seferihisar merkez taksi", "seferihisar nöbetçi taksi", "izmir seferihisar taksi", "seferihisar taksi durağı"],
};

export default function SeferihisarTaxi() {
    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <BreadcrumbSchema items={[
                { name: "Anasayfa", href: "/" },
                { name: "Seferihisar Taksi", href: "/seferihisar-taksi" }
            ]} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        Seferihisar <span className="text-primary">Taksi</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Seferihisar merkez ve tüm mahallelerinde 7/24 kesintisiz taksi hizmeti sunuyoruz.
                        İster hastaneye, ister otogara, ister alışverişe gitmek isteyin; güler yüzlü
                        şoförlerimiz ve konforlu araçlarımızla her zaman yanınızdayız.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <CallButton className="flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                            <Clock className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">7/24 Hizmet</h3>
                            <p className="text-gray-600 text-sm">Günün her saati Seferihisar'da nöbetçi taksi.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                            <MapPin className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Konumunuza Gelsin</h3>
                            <p className="text-gray-600 text-sm">Arayın, en kısa sürede kapınızda olalım.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center">
                            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Güvenli Seyahat</h3>
                            <p className="text-gray-600 text-sm">Deneyimli şoförler ile huzurlu yolculuk.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Seferihisar Taksi Hizmet Bölgeleri</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                        {regions.filter(r => r.type === "mahalle").map((region) => (
                            <Link
                                href={`/taksi/${region.slug}`}
                                key={region.slug}
                                className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center text-gray-700 text-sm font-medium hover:bg-primary/10 hover:border-primary hover:text-primary transition-all hover:shadow-sm"
                            >
                                {region.name}
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-secondary mb-6">İzmir ve İlçeleri Taksi Hizmeti</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {regions.filter(r => r.type === "ilce").map((region) => (
                            <Link
                                href={`/taksi/${region.slug}`}
                                key={region.slug}
                                className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center text-gray-700 text-sm font-medium hover:bg-primary/10 hover:border-primary hover:text-primary transition-all hover:shadow-sm"
                            >
                                {region.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
