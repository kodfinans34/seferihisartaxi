import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/data/regions";
import { seoData } from "@/data/seoContent";
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

    const seo = seoData[region.slug];
    const baseKeyword = region.type === "ilce" ? `${region.name} taksi` : `${region.parent} ${region.name} taksi`;

    const title = seo ? seo.title : `${region.name} Taksi | ${region.uniqueSellingPoint || '7/24 Hızlı ve Güvenilir Taksi Hizmeti'}`;
    const description = seo ? seo.description : region.description;

    return {
        title: title,
        description: description,
        keywords: [baseKeyword, `${region.name} gece taksi`, `${region.name} acil taksi`, `${region.name} en yakın taksi durağı`],
        openGraph: {
            title: title,
            description: description,
            url: `https://seferihisartaxi.com/taksi/${region.slug}`,
            type: "article",
        },
        twitter: {
            title: title,
            description: description,
        }
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
    const seo = seoData[region.slug];

    // Generate FAQ Schema
    const faqSchema = region.faqs && region.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": region.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Card */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -z-10"></div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-hover border border-primary/20 mb-6 font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {locationName} Bölgesinde Aktif
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
                        {seo ? seo.h1 : <>{locationName} <span className="text-primary">Taksi</span> Hizmeti</>}
                    </h1>

                    {region.uniqueSellingPoint && (
                        <h2 className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
                            {region.uniqueSellingPoint}
                        </h2>
                    )}

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                        {seo ? seo.intro : `${region.description} ${locationName} ve çevresinde bulunduğunuz konuma en kısa sürede ulaşarak sizi gitmek istediğiniz yere güvenle ulaştırıyoruz.`}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <CallButton className="flex-1 text-lg shadow-lg shadow-primary/20" />
                        <WhatsAppButton className="flex-1 text-lg" />
                    </div>

                    {/* Features Grid Unique */}
                    {seo ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {seo.features.map((f: any, idx: number) => (
                                <div key={idx} className="bg-gray-50/80 p-6 rounded-2xl flex flex-col items-center text-center border border-gray-100 transition-colors hover:border-primary/30">
                                    {f.icon === 'clock' && <Clock className="w-10 h-10 text-primary mb-4" />}
                                    {f.icon === 'shield' && <ShieldCheck className="w-10 h-10 text-primary mb-4" />}
                                    {f.icon === 'map' && <MapPin className="w-10 h-10 text-primary mb-4" />}
                                    {f.icon === 'star' && <Star className="w-10 h-10 text-primary mb-4" />}
                                    <h3 className="font-bold text-lg mb-2 text-secondary">{f.title}</h3>
                                    <p className="text-gray-600 text-sm">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
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
                    )}
                </div>

                {/* Popular Destinations for Unique Content */}
                {region.popularDestinations && region.popularDestinations.length > 0 && (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-6">{locationName} Popüler Duraklar</h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {region.popularDestinations.map((dest, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl text-gray-700 font-medium">
                                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                                    <span>{dest}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Review Section Unique */}
                {seo ? (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto mb-8">
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-8 h-8 fill-blue-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary mb-4">{seo.review.name} - Müşteri Yorumu</h2>
                        <div className="flex justify-center mb-6">
                            <ReviewStars rating={5.0} />
                        </div>
                        <p className="text-xl text-gray-700 italic mb-8">
                            "{seo.review.text}"
                        </p>
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto mb-8">
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
                )}

                {/* FAQ Section for Rich Snippets */}
                {region.faqs && region.faqs.length > 0 && (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
                        <h2 className="text-2xl font-bold text-secondary mb-8">{locationName} Hakkında Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4">
                            {region.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                    <h3 className="text-lg font-bold text-secondary mb-2">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
