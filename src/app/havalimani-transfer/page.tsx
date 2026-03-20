import { Metadata } from "next";
import { Plane, CalendarCheck, MapPin } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/ui/buttons";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "İzmir Havalimanı Transfer | Seferihisar Taksi",
    description: "Seferihisar, Sığacık ve Ürkmez'den İzmir Adnan Menderes Havalimanı'na (ADB) 7/24 konforlu ve ekonomik transfer hizmeti.",
    keywords: ["izmir havalimanı transfer seferihisar", "adnan menderes seferihisar taksi", "sığacık havalimanı transfer", "havalimanı vip transfer"],
};

export default function AirportTransferPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <BreadcrumbSchema items={[
                { name: "Anasayfa", href: "/" },
                { name: "Havalimanı Transfer", href: "/havalimani-transfer" }
            ]} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 w-full bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100 relative overflow-hidden">
                        <Plane className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-100/50 -rotate-12" />

                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                                İzmir Havalimanı <span className="text-primary block mt-2">VIP Transfer</span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                İzmir Adnan Menderes Havalimanı (ADB) ile Seferihisar, Sığacık ve Ürkmez arasında
                                uygun fiyatlı ve konforlu ulaşım fırsatı. Uçağınızı kaçırma stresinden kurtulun,
                                isterseniz önceden rezervasyon yaptırın, kapınızdan alalım.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 font-medium text-gray-800">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                                        <CalendarCheck className="w-5 h-5" />
                                    </div>
                                    7/24 Kesintisiz Rezervasyon Seçeneği
                                </li>
                                <li className="flex items-center gap-3 font-medium text-gray-800">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                                        <Plane className="w-5 h-5" />
                                    </div>
                                    Uçuş Takibi ile Rötarlarda Bekleme
                                </li>
                                <li className="flex items-center gap-3 font-medium text-gray-800">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    Tam Zamanında Karşılama ve Kapıya Teslim
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <CallButton className="px-8 shadow-lg shadow-primary/30" />
                                <WhatsAppButton className="px-8" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-6">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-secondary mb-4">Adnan Menderes - Seferihisar</h3>
                            <p className="text-gray-600 mb-4">Havalimanından Seferihisar merkeze veya Seferihisar'dan havalimanına yaklaşık 45 dakikalık konforlu bir yolculuk.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-secondary mb-4">Adnan Menderes - Sığacık</h3>
                            <p className="text-gray-600 mb-4">Havalimanından Sığacık otellerine ve marinaya doğrudan, bagajlarınızla rahatça ulaşım (Yaklaşık 50 dakika).</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-secondary mb-4">Adnan Menderes - Ürkmez/Gümüldür</h3>
                            <p className="text-gray-600 mb-4">Uçaktan indikten sonra yazlığınıza veya otelinize stressiz gidiş (Yaklaşık 55 dakika).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
