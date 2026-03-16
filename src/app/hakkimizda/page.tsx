import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Seferihisar Taksi",
    description: "Yılların tecrübesiyle Seferihisar, Sığacık ve Ürkmez bölgelerinde güvenilir taksi hizmeti veren durağımız hakkında bilgi edinin.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">Hakkımızda</h1>

                <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="mb-6">
                        Seferihisar Taksi olarak uzun yıllardır Seferihisar, Sığacık, Ürkmez ve çevre bölgelerde profesyonel yolcu taşımacılığı hizmeti sunuyoruz. Amacımız, misafirlerimize her zaman güvenli, konforlu ve zamanında ulaşım imkanı sağlamaktır.
                    </p>
                    <p className="mb-6">
                        Son model, düzenli bakımları yapılan araçlarımız ve güler yüzlü, deneyimli şoför kadromuzla 7 gün 24 saat hizmetinizdeyiz. Bizim için her yolcu özeldir ve müşteri memnuniyeti en büyük önceliğimizdir.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-12 mb-4">Vizyonumuz</h2>
                    <p className="mb-6">
                        Bölgemizin en çok tercih edilen, en güvenilir ve en yenilikçi ulaşım firması olmak; hizmet kalitemizi her geçen gün teknoloji ile birleştirerek artırmaktır.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-12 mb-4">Misyonumuz</h2>
                    <p className="mb-6">
                        Taşıdığımız her bireyin güvenliğini, konforunu ve zamanını en az kendi vaktimiz kadar değerli görüp, dürüst ve ilkeli çalışma prensibimizden taviz vermeden kaliteli bir taksi hizmeti sunmak.
                    </p>
                </div>
            </div>
        </div>
    );
}
