import { extraRegions } from "./extraRegions";

export interface FAQ {
    question: string;
    answer: string;
}

export interface Region {
    name: string;
    slug: string;
    type: "ilce" | "mahalle";
    parent?: string; // e.g., "Seferihisar"
    description: string;
    uniqueSellingPoint?: string;
    popularDestinations?: string[];
    faqs?: FAQ[];
}

export const regions: Region[] = [
    // İzmir İlçeleri
    {
        name: "Urla",
        slug: "urla-taksi",
        type: "ilce",
        description: "Urla merkez, İskele ve Urla sanat sokağı çevresinde 7/24 hızlı taksi hizmeti.",
        uniqueSellingPoint: "Urla İskele'den Şehir Merkezine VIP Aktarım",
        popularDestinations: ["Urla İskele", "Urla Sanat Sokağı", "Malgaca Pazarı", "Karantina Adası"],
        faqs: [
            { question: "Urla'dan Adnan Menderes Havalimanı kaç km?", answer: "Urla merkezden Havalimanı yaklaşık 45 kilometredir ve yolculuk ortalama 40 dakika sürmektedir." },
            { question: "Urla gece taksi bulabilir miyim?", answer: "Evet, Urla genelinde 7/24 nöbetçi taksi araçlarımız hizmetinizdedir." }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce-taksi",
        type: "ilce",
        description: "Güzelbahçe sahil boyu ve balık restoranları çevresinde güvenilir taksi ulaşımı.",
        uniqueSellingPoint: "Güzelbahçe Sahil Şeridinde Anında Hizmet",
        popularDestinations: ["Güzelbahçe Sahili", "Balık Hali", "Yelki", "Çamlı"],
        faqs: [
            { question: "Güzelbahçe sahilinden Seferihisar'a taksi ne kadar yazar?", answer: "Taksimetre ücretlerimiz güncel UKOME tarifesi üzerinden hesaplanmaktadır, net bilgi için çağrı merkezimizi arayabilirsiniz." },
            { question: "Güzelbahçe'ye taksi çağırma süresi nedir?", answer: "Araçlarımız genellikle çağrı sonrası 5-10 dakika içerisinde konumunuza ulaşır." }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere-taksi",
        type: "ilce",
        description: "Narlıdere Sahilevleri'nden şehir merkezine ve havalimanına VIP taksi hizmeti.",
        uniqueSellingPoint: "Narlıdere Sahilevleri'ne Özel Vip Transfer",
        popularDestinations: ["Sahilevleri", "Narlıdere Şehitlik", "Çatalkaya", "Narlı Mahallesi"],
        faqs: [
            { question: "Narlıdere'den Havalimanına taksi ne kadar sürer?", answer: "Trafik durumuna bağlı olarak çevre yolundan yaklaşık 20-25 dakika içerisinde ulaşım sağlanmaktadır." }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova-taksi",
        type: "ilce",
        description: "Balçova teleferik, termal oteller, Agora AVM ve tüm noktalarda nöbetçi taksi.",
        uniqueSellingPoint: "Termal Oteller ve AVM'ler Etrafında Hızlı Taksi",
        popularDestinations: ["Balçova Teleferik", "Agora AVM", "Balçova Termal", "İnciraltı"],
        faqs: [
            { question: "Balçova Teleferik önüne taksi gelebilir mi?", answer: "Evet, turistik noktalara ve AVM çıkışlarına çok kısa sürede araç yönlendirebiliyoruz." },
            { question: "Balçova - Seferihisar arası ulaşım var mı?", answer: "Tabii ki, ilçeler arası taşıma hizmetimiz mevcuttur. 7/24 arayabilirsiniz." }
        ]
    },
    {
        name: "Çeşme",
        slug: "cesme-taksi",
        type: "ilce",
        description: "Çeşme Alaçatı, Ilıca planörleri, marinadan Seferihisar'a konforlu transferler.",
        uniqueSellingPoint: "Alaçatı ve Çeşme Marina Güzergahlarında VİP Hizmet",
        popularDestinations: ["Alaçatı Çarşı", "Çeşme Marina", "Ilıca Plajı", "Boyalık"],
        faqs: [
            { question: "Çeşme Alaçatı'dan İzmir Havalimanı'na taksi bulabilir miyim?", answer: "Evet, turizm sezonu boyunca ve kışın VIP transfer ve taksi hizmetimiz Çeşme - Havalimanı hattında çalışmaktadır." },
            { question: "Gece geç saatlerde Alaçatı'da taksi sorunu yaşar mıyım?", answer: "Numaramızı aradığınız takdirde nöbetçi araçlarımız size en kısa sürede yönlendirilecektir." }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar-taksi",
        type: "ilce",
        description: "Karabağlar sanayi, Yeşilyurt, Bozyaka hatlarında genelinde 7/24 kesintisiz taksici.",
        uniqueSellingPoint: "Karabağlar'ın Tüm Mahallelerine 5 Dakikada Taksi",
        popularDestinations: ["Yeşilyurt", "Bozyaka", "Eski İzmir", "Üçkuyular Meydan"],
        faqs: [
            { question: "Karabağlar'dan Seferihisar Merkezine taksi ulaşımı mümkün mü?", answer: "Evet, İzmir içi her türlü noktadan alım yapıp Seferihisar bölgesine transfer yapabiliyoruz." }
        ]
    },
    {
        name: "Menderes",
        slug: "menderes-taksi",
        type: "ilce",
        description: "Adnan Menderes Havalimanı, Gümüldür ve Özdere bölgesi için acil taksi hizmeti.",
        uniqueSellingPoint: "Havalimanı ve Gümüldür Hattında Uzman Transfer",
        popularDestinations: ["Adnan Menderes Havalimanı", "Gümüldür Sahil", "Özdere", "Oğlananası"],
        faqs: [
            { question: "Havalimanından (ADB) karşılanmak için taksiyi ne zaman aramalıyım?", answer: "Uçağınız inmeden önce veya indikten hemen sonra arayarak aracınızın çıkış kapısında sizi beklemesini sağlayabilirsiniz." },
            { question: "Menderes Gümüldür arası taksi ne tutar?", answer: "Taksimetre tarifesi ile gitmektedir. Bagajınız fazlaysa geniş araç yönlendirmesi yapılır." }
        ]
    },
    {
        name: "Selçuk",
        slug: "selcuk-taksi",
        type: "ilce",
        description: "Selçuk merkez, Efes Antik Kenti ve Şirince turistik taksi ve transfer çözümleri.",
        uniqueSellingPoint: "Efes ve Şirince Turistik Gezi Taksisi",
        popularDestinations: ["Efes Antik Kenti", "Şirince Köyü", "Meryem Ana Evi", "Pamucak Sahili"],
        faqs: [
            { question: "Şirince'den taksi ile inmek kolay mı?", answer: "Şirince'nin dar ve kalabalık yollarında tecrübeli şoförlerimiz sayesinde konforla ve takılmadan aşağı merkeze inebilirsiniz." },
            { question: "Selçuk'tan Kuşadası'na taksi gidiyor mu?", answer: "Evet, Selçuk'tan komşu turistik ilçelere VIP ve normal araçlarımızla seyahat edebilirsiniz." }
        ]
    },

    // Seferihisar Mahalleleri
    {
        name: "Atatürk Mahallesi",
        slug: "seferihisar-ataturk-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Seferihisar Atatürk Mahallesi'nde size en yakın, ekonomik, ve hızlı taksi durağı.",
        uniqueSellingPoint: "Seferihisar Merkeze Yürüme Mesafesinde Hızlı Araç",
        popularDestinations: ["Seferihisar Kapalı Pazaryeri", "Devlet Hastanesi", "Çarşı Merkezi"],
        faqs: [
            { question: "Atatürk mahallesine taksi ne kadar sürede gelir?", answer: "Merkez mahallemiz olduğu için gündüz saatlerinde maksimum 3-5 dakika içinde araç kapınıza gelir." }
        ]
    },
    {
        name: "Camiikebir Mahallesi",
        slug: "seferihisar-camiikebir-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Camiikebir Mahallesi tarihi dokusunda, dar sokaklara uygun 7/24 nöbetçi taksi hizmeti.",
        uniqueSellingPoint: "Tarihi Sokaklara Deneyimli Ulaşım",
        popularDestinations: ["Camiikebir Meydanı", "Eski Bankalar Sokak", "Tarihi Seferihisar Hamamı"],
        faqs: [
            { question: "Eski evlerin arasına taksi girebiliyor mu?", answer: "Evet, mahallenin dar yollarına hakimiyetimiz sayesinde adresinizin kapısına kadar gelebiliyoruz." }
        ]
    },
    {
        name: "Çolak İbrahim Bey Mahallesi",
        slug: "seferihisar-colak-ibrahim-bey-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Sığacık yoluna bağlanan Çolak İbrahim Bey mahallesi için güvenilir ve temiz taksi.",
        uniqueSellingPoint: "Sığacık Yönüne Kolay Çıkış",
        popularDestinations: ["Sığacık Yolu Kavşağı", "Yeni Konutlar", "Eski Mezarlık"],
        faqs: [
            { question: "Çolak İbrahim Bey'den Sığacık Kaleiçi ne kadar sürer?", answer: "Trafik normal olduğunda yaklaşık 6-8 dakika gibi kısa bir sürede ulaşım sağlanır." }
        ]
    },
    {
        name: "Hıdırlık Mahallesi",
        slug: "seferihisar-hidirlik-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Akarca yonünde yer alan Hıdırlık mahallesinde lüks ve büyük bagajlı taksi imkanı.",
        uniqueSellingPoint: "Akarca ve Akkum Hatlarına Avantajlı Ulaşım",
        popularDestinations: ["Hıdırlık Camii", "Akarca Sapağı", "Kültür Merkezi"],
        faqs: [
            { question: "Hıdırlık mahallesine büyük valizler için geniş taksi gelir mi?", answer: "Araç filomuz geniştir, çağrı yaparken belirtirseniz bagajlı araç (station wagon vb) gönderilir." }
        ]
    },
    {
        name: "Turabiye Mahallesi",
        slug: "seferihisar-turabiye-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Otogar arkasındaki Turabiye Mahallesi genelinde otobüsten iner inmez 7/24 taksi çağırma.",
        uniqueSellingPoint: "Seferihisar Otogarı Yolcularına Direkt Hizmet",
        popularDestinations: ["Seferihisar İlçe Terminali", "Turabiye Parkı", "Sanayi Sitesi"],
        faqs: [
            { question: "Seferihisar Otogarında Gece 3'te taksi bulabilir miyim?", answer: "Evet, gece ve sabaha karşı otogara gelen tüm otobüs saatlerinde nöbetçi araçlarımız otogar çevresinde beklemektedir." }
        ]
    },
    {
        name: "Tepecik Mahallesi",
        slug: "seferihisar-tepecik-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Akarca sahil şeridini de içine alan Tepecik mahallesinde ekonomik ve konforlu yazlıkçı taksisi.",
        uniqueSellingPoint: "Akarca Plajı'nda Hızlı Hizmet",
        popularDestinations: ["Akarca Altıntepe Plajı", "Tepecik Yazlıklar", "Gece Pazarı"],
        faqs: [
            { question: "Akarca sahilinden merkeze taksi ücret tarifesi nedir?", answer: "Açılış ücreti dahil güncel UKOME taksimetre hesabı geçerlidir. Yaklaşık 10-15 dakikalık bir sürüş mesafesidir." },
            { question: "Deniz dönüşü ıslak kıyafetlerle taksiye binebilir miyiz?", answer: "Müşterilerimizin konforu için yaz aylarında kılıflı araçlarımız vardır, şoförlerimize önceden belirtebilirsiniz." }
        ]
    },
    {
        name: "Ulamış Mahallesi",
        slug: "seferihisar-ulamis-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Urla Karayolu üzerindeki Ulamış köy yolu ve mahalli pazarı çevresinde 7/24 açık taksi.",
        uniqueSellingPoint: "Ulamış Köy Pazarı ve Yavaş Şehir Konforu",
        popularDestinations: ["Ulamış Köy Meydanı", "Tarihi Fırın", "Bademli Yolu"],
        faqs: [
            { question: "Ulamış köyü pazarı günleri taksi bulmak zor mu?", answer: "Cumartesi günleri kurulan üretici pazarı zamanında özel nöbetçi sayımızı artırıyoruz, hiç zorluk çekmezsiniz." }
        ]
    },
    {
        name: "Düzce Mahallesi",
        slug: "seferihisar-duzce-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Düzce (eski Hereke) tepelerinde manzaralı alanlar için kesintisiz Seferihisar Düzce mahallesi taksi.",
        uniqueSellingPoint: "Doğa Yollarına Uygun Güvenli Araçlar",
        popularDestinations: ["Düzce Köy Kahvesi", "Organik Tarım Alanları", "Zeytinlikler"],
        faqs: [
            { question: "Düzce dağlık alanlarına her taksi çıkıyor mu?", answer: "Evet, araçlarımızın hepsi yeni nesil ve güçlü motora sahip olduğu için köyün en tepe noktalarına ve bozuk yollarına güvenle ulaşım sağlar." }
        ]
    },
    {
        name: "Orhanlı Mahallesi",
        slug: "seferihisar-orhanli-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Menderes yolu üzerindeki Orhanlı mahallesi, taş mektep ve köy içi ve çevresinde taksi hizmeti.",
        uniqueSellingPoint: "Doğa Yürüyüşçüleri ve Kırsal Seçim",
        popularDestinations: ["Taş Mektep", "Orhanlı Organik Pazarı", "Köy İçi"],
        faqs: [
            { question: "Orhanlı köyünden İzmir Adnan Menderes Havalimanı na direkt ulaşım var mı?", answer: "Evet, Orhanlı ana yol üzerinden çevre yoluna çok yakın olduğundan havalimanına hızlı transfer yapıyoruz." }
        ]
    },
    {
        name: "Kavakdere Mahallesi",
        slug: "seferihisar-kavakdere-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Tarım alanları ve sakinliğiyle bilinen Kavakdere mahallesi ulaşım ve taksi ihtiyaçlarınız için buradayız.",
        uniqueSellingPoint: "Hızlı Köy Transferleri",
        popularDestinations: ["Kavakdere Merkez", "Köy Yolları", "Bağlar"],
        faqs: [
            { question: "Kavakdere'ye taksinin gelmesi ortalama kaç dakika sürüyor?", answer: "Yol durumuna göre yaklaşık 12-15 dakika içerisinde aracımız adresinizde olmaktadır." }
        ]
    },
    {
        name: "Gölcük Mahallesi",
        slug: "seferihisar-golcuk-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Gölcük mahallesi ve dağ eteklerinde 7/24 hizmetinizde olan taksi durağı.",
        uniqueSellingPoint: "Gölcük Kırsal Ulaşım Hizmeti",
        popularDestinations: ["Gölcük Göleti Mevkii", "Köy Kahvehanesi"],
        faqs: [
            { question: "Gölcük köyüne gece geç saat ulaşım sağlanabiliyor mu?", answer: "Nöbetçi numaralarımız 24 saat açıktır. Ancak köy yolculukları için makul bir süre önceden aramanız bekleme sürenizi kısaltacaktır." }
        ]
    },
    {
        name: "İhsaniye Mahallesi",
        slug: "seferihisar-ihsaniye-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Ulamış komşusu İhsaniye mahallesi hızlı ulaşım, tarla ve bahçe yollarında da güvenilir taksi.",
        uniqueSellingPoint: "Tarımsal Alan Müşterileri için Pratik Taksi",
        popularDestinations: ["İhsaniye Köy Merkezi", "Zeytinlik Yolları"],
        faqs: [
            { question: "Bahçe yollarına taksi girer mi?", answer: "Aracın gövdesine zarar vermeyecek açık her türlü tarla, bahçe yolu girişlerine hizmet veriyoruz." }
        ]
    },
    {
        name: "Beyler Mahallesi",
        slug: "seferihisar-beyler-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Seferihisar'ın en uzak dağ köyü olan Beyler mahallesi ve çevresi baraj civarı için kesintisiz taksi.",
        uniqueSellingPoint: "Beyler Barajı ve Dağlık Bölgeler Taksi",
        popularDestinations: ["Beyler Barajı", "Köy Tarım Kooperatifi", "Eski Evler"],
        faqs: [
            { question: "Beyler köyünden merkeze ulaşım ücreti sabitlenebilir mi?", answer: "Normalde taksimetre zorunludur ancak çok uzak dağ köyleri için önceden bilgi alarak tahmini bir mesafe veya pazar payı hesaplatabilirsiniz." }
        ]
    },
    {
        name: "Çamtepe Mahallesi",
        slug: "seferihisar-camtepe-mahallesi-taksi",
        type: "mahalle",
        parent: "Seferihisar",
        description: "Orman ve çamlıklarla çevrili Çamtepe mahallesi konforlu, geniş bagajlı ve güvenli taksi.",
        uniqueSellingPoint: "Çamtepe Mesire Alanlarına Ulaşım",
        popularDestinations: ["Çamtepe Mesire Yeri", "Menderes Köy Sınırı"],
        faqs: [
            { question: "Çamtepe köyüne taksi çağırdığımda ücret nereden yazılmaya başlar?", answer: "Taksimetre, taksi bulunduğunuz noktadan yani araca bindiğiniz andan itibaren açılır." }
        ]
    },
    ...extraRegions
];
