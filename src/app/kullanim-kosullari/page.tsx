import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kullanım Koşulları | Seferihisar Taksi",
    description: "Seferihisar Taksi web sitesi ve hizmetleri kullanım koşulları.",
};

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-secondary mb-8">Kullanım Koşulları</h1>

                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <p className="mb-6">
                            Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Taraflar ve Kabul</h2>
                        <p className="mb-4">
                            Bu Kullanım Koşulları, Seferihisar Taksi web sitesini ziyaret eden tüm kullanıcılar için geçerlidir.
                            Siteyi kullanarak veya hizmetlerimizden yararlanarak bu koşulları kabul etmiş sayılırsınız.
                            Eğer bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Sunulan Hizmetler</h2>
                        <p className="mb-4">
                            Seferihisar Taksi, Seferihisar ve çevresinde ticari taksi taşımacılığı hizmeti sunan bir kuruluştur.
                            Web sitesi üzerinden yapılan çağrılar veya WhatsApp iletişimleri bilgilendirme ve rezervasyon amaçlıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Kullanıcı Yükümlülükleri</h2>
                        <p className="mb-4">
                            Kullanıcılar aşağıdaki kurallara uymakla yükümlüdür:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Taksi çağırırken veya rezervasyon yaparken doğru adres ve iletişim bilgileri vermek.</li>
                            <li>Taksi çağrısını iptal etmesi gerektiğinde bunu en kısa sürede şoföre veya çağrı merkezine bildirmek.</li>
                            <li>Araçlara binerken Türkiye Cumhuriyeti kanunlarına uygun, genel ahlak ve kuralları çerçevesinde hareket etmek.</li>
                            <li>Web sitesinde yer alan form veya iletişim kanallarını spam veya kötü niyetli amaçlarla kullanmamak.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Fiyatlandırma ve Ödeme</h2>
                        <p className="mb-4">
                            Hizmet ücretlerimiz UKOME (Ulaşım Koordinasyon Merkezi) tarafından belirlenen güncel taksimetre
                            tarifelerine göre hesaplanmaktadır. Havalimanı veya şehirlerarası transferler gibi özel durumlar
                            için taraflar arası yapılan anlaşmalar geçerlidir.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
                        <p className="mb-4">
                            Sitemiz üzerinden sunulan kesintisiz hizmet için çaba göstersek de, teknik arızalar, mücbir sebepler veya internet sağlayıcılarından
                            kaynaklı gecikmelerden Seferihisar Taksi sorumlu tutulamaz. Benzer şekilde, trafik ve yol durumu gibi elde olmayan sebeplerle yaşanan
                            gecikmeler konusunda maksimum özen gösterilmekle birlikte şirketimiz garanti vermemektedir.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Fikri Mülkiyet Hakları</h2>
                        <p className="mb-4">
                            Bu sitede yer alan tüm içerik (logo, metinler, görseller, kodlar) Seferihisar Taksi'ye aittir ve
                            izinsiz kopyalanamaz, çoğaltılamaz veya başka amaçlarla kullanılamaz.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Değişiklik Hakları</h2>
                        <p className="mb-4">
                            Seferihisar Taksi, dilediği zaman bu kullanım koşullarını, site içeriğini veya sunulan hizmetleri önceden haber
                            vermeksizin değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
