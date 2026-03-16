import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/data/regions";
import { CallButton, WhatsAppButton } from "@/components/ui/buttons";
import { MapPin, Clock, ShieldCheck, Star } from "lucide-react";
import { ReviewStars } from "@/components/ui/ReviewStars";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate Static Params for all SEO combinations
export async function generateStaticParams() {
    return regions.map((region) => ({
        slug: region.slug,
    }));
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const region = regions.find((r) => r.slug === resolvedParams.slug);

    if (!region) {
        return { title: "Bulunamadı" };
    }

    const baseKeyword = region.type === "ilce" ? `${region.name} taksi` : `${region.parent} ${region.name} taksi`;

    return {
        title: `${region.name} Taksi | 7/24 Hızlı Taksi Çağır`,
        description: region.description,
        keywords: [baseKeyword, `${region.name} nöbetçi taksi`, `${region.name} en yakın taksi`, `${region.name} taksi numarası`],
    };
}

export default async function RegionTaxiPage({ params }: Props) {
    const resolvedParams = await params;
    const region = regions.find((r) => r.slug === resolvedParams.slug);

    if (!region) {
        notFound();
    }

    const prefix = region.type === "mahalle" && region.parent ? `${region.parent} ` : "";
    const locationName = `${prefix}${region.name}`;

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Card */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -z-10"></div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-hover border border-primary/20 mb-6 font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {locationName} Bölgesinde Aktif
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                        {locationName} <span className="text-primary">Taksi</span> Hizmeti
                    </h1>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                        {region.description} {locationName} ve çevresinde bulunduğunuz konuma en kısa sürede
                        ulaşarak sizi gitmek istediğiniz yere güvenle ulaştırıyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <CallButton className="flex-1 text-lg shadow-lg shadow-primary/20" />
                        <WhatsAppButton className="flex-1 text-lg" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50/80 p-6 rounded-2xl flex flex-col items-center text-center border border-gray-100 transition-colors hover:border-primary/30">
                            <Clock className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-secondary">7/24 Kesintisiz</h3>
                            <p className="text-gray-600 text-sm">{locationName} için gece gündüz nöbetçi araçlarımız hazır.</p>
                        </div>
                        <div className="bg-gray-50/80 p-6 rounded-2xl flex flex-col items-center text-center border border-gray-100 transition-colors hover:border-primary/30">
                            <MapPin className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-secondary">Hızlı Ulaşım</h3>
                            <p className="text-gray-600 text-sm">Konumunuzu gönderin, en yakın aracımız dakikalar içinde gelsin.</p>
                        </div>
                        <div className="bg-gray-50/80 p-6 rounded-2xl flex flex-col items-center text-center border border-gray-100 transition-colors hover:border-primary/30">
                            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-secondary">Güvenli Seyahat</h3>
                            <p className="text-gray-600 text-sm">Düzenli bakımlı araçlar ve profesyonel şoför kadrosu.</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto mb-12">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Star className="w-8 h-8 fill-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">{locationName} Müşteri Yorumları</h2>
                    <div className="flex justify-center mb-6">
                        <ReviewStars rating={5.0} />
                    </div>
                    <p className="text-xl text-gray-700 italic mb-8">
                        "{locationName} bölgesinde ne zaman taksiye ihtiyacım olsa hemen geliyorlar. Çok kibar ve hızlı bir hizmet. Herkese tavsiye ederim."
                    </p>
                </div>

                {/* Internal SEO Links */}
                <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Seferihisar Taksi Hizmet Bölgeleri</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                        {regions.filter(r => r.type === "mahalle").map((r) => (
                            <Link
                                href={`/taksi/${r.slug}`}
                                key={r.slug}
                                className={`p-3 rounded-xl border text-center text-sm font-medium transition-all ${r.slug === region.slug ? 'bg-primary text-secondary border-primary shadow-md' : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-sm'}`}
                            >
                                {r.name}
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-secondary mb-6">İzmir ve İlçeleri Taksi Hizmeti</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {regions.filter(r => r.type === "ilce").map((r) => (
                            <Link
                                href={`/taksi/${r.slug}`}
                                key={r.slug}
                                className={`p-3 rounded-xl border text-center text-sm font-medium transition-all ${r.slug === region.slug ? 'bg-primary text-secondary border-primary shadow-md' : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-sm'}`}
                            >
                                {r.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
