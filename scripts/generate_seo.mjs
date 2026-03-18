import fs from 'fs';
import path from 'path';

// 73 Yeni Özel Lokasyon
const LOCATIONS = [
  "Konak", "Alsancak", "Bornova", "Buca", "Karşıyaka", "Bostanlı", "Bayraklı", "Çiğli", "Mavişehir", "Gaziemir", "Optimum AVM", "Fuar İzmir", "Kemalpaşa", "Torbalı", "Ayrancılar", "Menemen", "Aliağa", "Foça", "Eski Foça", "Yeni Foça", "Dikili", "Çandarlı", "Bergama", "Kınık", "Ödemiş", "Tire", "Bayındır", "Karaburun", "Mordoğan", "Sığacık Kaleiçi", "Akarca Sahil", "Akkum Plajı", "Ekmeksiz Plajı", "Teos Antik Kenti", "Doğanbey Sahil", "Payamlı", "Ürkmez Merkez", "Gümüldür Sahil", "Özdere", "Ahmetbeyli", "Pamucak Sahili", "Şirince Konaklama", "Meryem Ana Yolu", "Kuşadası Merkez", "Bademler Köyü", "Kavacık", "Seferihisar Sanayi", "İzmir Şehir Hastanesi", "Dokuz Eylül Hastanesi", "Ege Üniv Hastanesi", "Adnan Menderes Havaalanı", "İzmir Otogar", "Basmane Tren Garı", "Üçkuyular İskelesi", "Fahrettin Altay", "Çamlı", "Yelki", "Urla İskele", "Çeşmealtı", "Özbek", "Gülbahçe", "İYTE Kampüsü", "Demircili Koy", "Kuşçular", "Yağcılar", "Şifne", "Dalyan", "Ildır", "Boyalık Sahil", "Ovacık Köy", "Çiftlikköy", "Zeytinalanı"
];

// Combine unique parts for intros
const intros1 = [
  "{LOC} bölgesinde 7/24 hizmet veren en güvenilir taksi ağıyız.",
  "{LOC} konumunda acil ulaşıma ihtiyaç duyduğunuzda anında kapınızdayız.",
  "İzmir'in gözde yerlerinden {LOC} istikametine kesintisiz, lüks araçlarımızla seyahat edin.",
  "{LOC} lokasyonuna gitmek için veya oradan dönüşlerinizde durağımız bir telefon kadar yakın.",
  "Kalabalık veya ıssız olması fark etmeksizin {LOC} genelinde usta şoförlerimizle nöbetteyiz."
];

const intros2 = [
  " Deneyimli şoförlerimiz sayesinde rotanızı en kısa yoldan tamamlamaktayız.",
  " Yoğun trafikte saatlerce beklememek adına kestirme yolları kullanan firmamız hizmetinizde.",
  " Tüm araçlarımız klimalı olup yaz kış fark etmeksizin mükemmel sıcaklık/soğukluk ayarlarıyla gelir.",
  " Temizlik standartlarımızdan ödün vermiyor, ailelerin kullanımına uygun dezenfekte edilmiş haliyle yola çıkıyoruz.",
  " Şehir içi karmaşasını hissetmeden seyahatinizin huzurunu çıkarmanızı önemsiyoruz."
];

const intros3 = [
  " Hemen taksi numaralarımızı arayın ve kaliteli yolculuğun tadını çıkarın.",
  " Sürpriz ücret ve kötü sürprizler olmadan, açılış fiyatlı taksimetre uygulamamız sabittir.",
  " Geniş bagaj hacmine sahip filomuzla yükleriniz ne kadar büyük olursa olsun sorun yaşamıyoruz.",
  " Adres teyidi yapmaya bile gerek kalmadan GPS teknolojisiyle sizi konumunuzdan tam saniyesinde alıyoruz.",
  " Evcil hayvanlarınızla güvenle binebileceğiniz, güler yüzlü bir taşımacılık prosedürüne sahibiz."
];

// Features
const featureTitles = [
  "Acil Ulaşım Desteği","Hızlı Bekleme Yok","Kesintisiz 7/24 Açık","Bagaj Rahatlığı","Lüks Araç Sınıfı","Sabit Taksimetre","Hijyen Garantisi","Emniyetli Sürüş","Önceden Rezervasyon","Planlı Şehir Aktarımı"
];

const featureTexts = [
  "Araçlarımızın bakımları eksiksizdir yolda kalmazsınız.",
  "Saat fark etmeden gece gündüz vardiyalı araç temini.",
  "Gittiğiniz lokasyonları ezbere bilen çevreye hakim uzmanlar.",
  "Çocuklu ailelere özel sabırlı, anlayışlı ve dürüst hizmet.",
  "En son teknoloji takip sistemleriyle adreslerinize tam dakika tam isabet.",
  "Pazar ya da market dönüşü poşet yığınlarından kurtulmanız için bagaja yardım asistanlığı.",
  "Turistik bölgelere yabancıysanız size bölge hakkında ufak tüyolar verebilen dost canlısı yüzler.",
  "Ücreti ne tutar derdine son veren tahmini ücret bilgilendirmesi.",
  "Hemen her ilçede konuşlanmış araç filomuzla sıra dışı hız garantisi."
];

const names = ["Ahmet C.", "Canan E.", "Berk A.", "Demet T.", "Hasan V.", "Ayşe K.", "Kerem P.", "Orhan S.", "Mine F.", "Derya M.", "Kamil H.", "Selin U.", "Osman B.", "Merve C."];
const reviewTexts = [
  "{LOC} konumunda mahsur kaldım sanmıştım, hemen yetiştiler.",
  "Şoför arkadaşa çok teşekkür ederim, {LOC} yolculuğumuz oldukça huzurlu geçti.",
  "Özellikle {LOC} gibi kalabalık yerlerde ilk defa durağa sormadan hızlı bir taksi buldum.",
  "Bagajlarım çoktu, sağolsunlar {LOC} yolunda hiç sarsmadan lüks bir taşıma yaptılar.",
  "Açıkçası ben {LOC} etrafında taksi bulamam diyordum, 5 dakikada sokağıma yanaştılar.",
  "Misafirlerimi {LOC} noktasından aldırmak için gönderdim, adamlar harika ilgilenmiş.",
  "Hem arabalar yeni kokuyor hem de {LOC} yollarını herkesten iyi ezberlemişler."
];

const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generatedRegions = [];
const generatedSeo = {};

// We use Set to prevent duplicates by accidental name mappings
const seenSlugs = new Set();

LOCATIONS.forEach(loc => {
    let slug = loc.toLowerCase().replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ç/g, 'c').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + "-taksi";
    
    // basic deduplication
    let counter = 1;
    let originalSlug = slug;
    while(seenSlugs.has(slug)) {
        slug = originalSlug + "-" + counter;
        counter++;
    }
    seenSlugs.add(slug);

    const cleanName = loc;
    
    generatedRegions.push({
        name: cleanName,
        slug: slug,
        type: "ilce", // default generic for routing matching
        description: `${cleanName} bölgesinden her yere güvenli, hızlı ve 7 gün 24 saat acil araçlarla taksi taşımacılığı işlemi yapılmaktadır.`,
        uniqueSellingPoint: `${cleanName} Ulaşımında Sınırsız Kalite ve Vip Seçeneği`,
        popularDestinations: [`${cleanName} Meydan`, `${cleanName} Çevresi`],
        faqs: [
            { question: `${cleanName} taksi açılış ücreti ne kadardır?`, answer: "İzmir UKOME tarafından belirlenmiş en güncel resmi taksimetre açılış ücreti ne ise size yönlendirilen araçlarımızda da eksiksiz o rakam uygulanır." },
            { question: `${cleanName} çevresinde çok geç saatlerde bile araba bulabilir miyim?`, answer: "Kesinlikle! Gece nöbetçi uygulamamız 12 ay boyunca devam etmektedir. Dilediğiniz vakitte arayabilirsiniz." }
        ]
    });
    
    const intro = choose(intros1).replace(/{LOC}/g, cleanName) + choose(intros2) + choose(intros3);
    const rev = choose(reviewTexts).replace(/{LOC}/g, cleanName);
    
    let icon1 = choose(["clock", "shield", "map", "star"]);
    let icon2 = choose(["clock", "shield", "map", "star"]);
    if (icon1 === icon2) icon2 = "star";

    generatedSeo[slug] = {
        title: `${cleanName} Taksi - En Yakın Durak İletişim Numarası`,
        description: `${cleanName} ve çevre bölgelerde VIP konforunda ekonomik, güvenilir ve geniş bagajlı acil araç arıyorsanız sitemize göz atın.`,
        h1: `${cleanName} Gece Gündüz Hızlı Taksi`,
        intro: intro,
        features: [
            { icon: icon1, title: choose(featureTitles), text: choose(featureTexts) },
            { icon: icon2, title: choose(featureTitles), text: choose(featureTexts) }
        ],
        review: { name: choose(names), text: rev }
    };
});

const regionsExport = `import { Region } from "./regions";\nexport const extraRegions: Region[] = ${JSON.stringify(generatedRegions, null, 4)};`;
const seoExport = `export const extraSeoData = ${JSON.stringify(generatedSeo, null, 4)};`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/extraRegions.ts'), regionsExport);
fs.writeFileSync(path.join(process.cwd(), 'src/data/extraSeo.ts'), seoExport);

console.log("Success: " + generatedRegions.length + " unique SEO pages generated.");
