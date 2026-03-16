import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası | Seferihisar Taksi",
    description: "Seferihisar Taksi gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-secondary mb-8">Gizlilik Politikası</h1>

                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <p className="mb-6">
                            Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Giriş</h2>
                        <p className="mb-4">
                            Seferihisar Taksi olarak, müşterilerimizin gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz.
                            Bu Gizlilik Politikası, web sitemizi kullandığınızda ve hizmetlerimizden yararlandığınızda kişisel verilerinizi
                            nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Toplanan Bilgiler</h2>
                        <p className="mb-4">
                            Hizmetlerimizi kullandığınızda aşağıdaki bilgileri toplayabiliriz:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>İletişim bilgileriniz (Ad, soyad, telefon numarası)</li>
                            <li>Konum bilgileriniz (Taksi çağırma işlemi için alınan adres veya GPS verileri)</li>
                            <li>Hizmet kullanım geçmişiniz (Güzergah, tarih, saat)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Bilgilerin Kullanımı</h2>
                        <p className="mb-4">
                            Topladığımız bilgileri aşağıdaki amaçlarla kullanmaktayız:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Size talep ettiğiniz taksi hizmetini sunmak</li>
                            <li>Müşteri hizmetleri desteği sağlamak</li>
                            <li>Hizmet kalitemizi artırmak ve web sitemizi geliştirmek</li>
                            <li>Gerektiğinde sizinle iletişime geçmek</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Veri Güvenliği</h2>
                        <p className="mb-4">
                            Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi yetkisiz erişim, kayıp,
                            kötüye kullanım veya ifşaya karşı korumak için endüstri standartlarında güvenlik önlemleri almaktayız.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Üçüncü Taraflarla Paylaşım</h2>
                        <p className="mb-4">
                            Kişisel verileriniz, yasal zorunluluklar veya size hizmet sağlamak için mecburi olan durumlar
                            (örneğin sistem altyapı sağlayıcıları) haricinde kesinlikle üçüncü şahıslara veya kurumlara satılmaz veya paylaşılmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. İletişim</h2>
                        <p className="mb-4">
                            Gizlilik politikamız ile ilgili soru, görüş ve talepleriniz için bizimle iletişime geçebilirsiniz.
                        </p>
                        <p className="font-bold">Telefon: 0554 115 44 22</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
