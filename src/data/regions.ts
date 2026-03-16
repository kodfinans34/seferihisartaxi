export interface Region {
    name: string;
    slug: string;
    type: "ilce" | "mahalle";
    parent?: string; // e.g., "Seferihisar"
    description: string;
}

export const regions: Region[] = [
    // İzmir İlçeleri
    { name: "Urla", slug: "urla-taksi", type: "ilce", description: "Urla merkez, İskele ve tüm mahallelerinde 7/24 hızlı taksi hizmeti." },
    { name: "Güzelbahçe", slug: "guzelbahce-taksi", type: "ilce", description: "Güzelbahçe ve çevresinde güvenilir ve konforlu taksi ulaşımı." },
    { name: "Narlıdere", slug: "narlidere-taksi", type: "ilce", description: "Narlıdere'den havalimanına ve şehir içine VIP taksi hizmeti." },
    { name: "Balçova", slug: "balcova-taksi", type: "ilce", description: "Balçova teleferik, AVM'ler ve tüm noktalarda nöbetçi taksi." },
    { name: "Çeşme", slug: "cesme-taksi", type: "ilce", description: "Çeşme Alaçatı, Ilıca ve Seferihisar arası konforlu transfer." },
    { name: "Karabağlar", slug: "karabaglar-taksi", type: "ilce", description: "Karabağlar genelinde 7/24 kesintisiz taksici hizmeti." },
    { name: "Menderes", slug: "menderes-taksi", type: "ilce", description: "Menderes ve Havalimanı bölgesi için acil taksi." },
    { name: "Selçuk", slug: "selcuk-taksi", type: "ilce", description: "Selçuk, Efes Antik Kenti ve Şirince turistik taksi ve transfer." },
    // Seferihisar Mahalleleri
    { name: "Atatürk Mahallesi", slug: "seferihisar-ataturk-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Seferihisar Atatürk Mahallesi'nde size en yakın taksi durağı." },
    { name: "Camiikebir Mahallesi", slug: "seferihisar-camiikebir-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Camiikebir Mahallesi 7/24 nöbetçi taksi hizmeti." },
    { name: "Çolak İbrahim Bey Mahallesi", slug: "seferihisar-colak-ibrahim-bey-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Çolak İbrahim Bey mahallesi hızlı ve güvenilir taksi." },
    { name: "Hıdırlık Mahallesi", slug: "seferihisar-hidirlik-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Hıdırlık mahallesinde kapınıza kadar gelen taksi hizmeti." },
    { name: "Turabiye Mahallesi", slug: "seferihisar-turabiye-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Turabiye Mahallesi genelinde 7/24 taksi çağırma." },
    { name: "Tepecik Mahallesi", slug: "seferihisar-tepecik-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Tepecik mahallesinde ekonomik ve konforlu taksi." },
    { name: "Ulamış Mahallesi", slug: "seferihisar-ulamis-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Ulamış köyü ve mahallesinde 7/24 açık taksi." },
    { name: "Düzce Mahallesi", slug: "seferihisar-duzce-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Seferihisar Düzce mahallesi taksi durağı." },
    { name: "Orhanlı Mahallesi", slug: "seferihisar-orhanli-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Orhanlı mahallesi, köy içi ve çevresinde taksi hizmeti." },
    { name: "Kavakdere Mahallesi", slug: "seferihisar-kavakdere-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Kavakdere mahallesi ulaşım ve taksi ihtiyaçlarınız için buradayız." },
    { name: "Gölcük Mahallesi", slug: "seferihisar-golcuk-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Gölcük mahallesi 7/24 hizmetinizde olan taksi durağı." },
    { name: "İhsaniye Mahallesi", slug: "seferihisar-ihsaniye-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "İhsaniye mahallesi hızlı ulaşım ve güvenilir taksi." },
    { name: "Beyler Mahallesi", slug: "seferihisar-beyler-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Beyler mahallesi ve çevresi için kesintisiz taksi hizmeti." },
    { name: "Çamtepe Mahallesi", slug: "seferihisar-camtepe-mahallesi-taksi", type: "mahalle", parent: "Seferihisar", description: "Çamtepe mahallesi konforlu ve güvenli taksi." },
];
