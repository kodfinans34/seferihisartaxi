export interface BlogPost {
    title: string;
    slug: string;
    description: string;
    content: string[]; // Paragraflar
    date: string;
    image?: string;
}

export const blogs: BlogPost[] = [
    {
        title: "İzmir Havalimanı (ADB) - Seferihisar Arası En Kolay Ulaşım",
        slug: "izmir-havalimani-seferihisar-ulasim-rehberi",
        description: "Adnan Menderes Havalimanından Seferihisar ve Sığacık'a gitmenin en rahat, güvenli ve ekonomik yolları hakkında kapsamlı rehber.",
        date: "2024-03-20",
        image: "/blog-airport.png",
        content: [
            "İzmir Adnan Menderes (ADB) havalimanına uçakla geldiğinizde, bagajlarınızla birlikte Seferihisar veya Sığacık gibi tatil beldelerine ulaşmak yorucu bir deneyim olabilir. Toplu taşıma araçları (İZBAN vb.) her ne kadar ucuz görünse de aktarmalar, kalabalık ve bekleme süreleri nedeniyle tatilinizin enerjisini daha ilk dakikalardan tüketebilir.",
            "Özellikle yaz sezonunda aşırı yolcu yoğunluğu, valizi fazla olan aileler için özel araç zorunluluğunu beraberinde getiriyor. Tam bu noktada devreye 7/24 hizmetinizde olan transfer ve taksi firmaları girer.",
            "Uygun fiyat tarifesi ile anlaştığınız bir taksimetreli araç, sizi uçağınızın kapısında karşılayıp otelinizin veya sitenizin önünde indirebilir. Ulaşımı dert etmeden Ege'nin serin sularına ve yavaş şehir (cittaslow) Seferihisar'ın oksijenine kendinizi bırakmak için bizleri tercih edebilirsiniz."
        ]
    },
    {
        title: "Sığacık Kaleiçi ve Teos Antik Kenti'ne Nasıl Gidilir?",
        slug: "sigacik-kaleici-teos-antik-kenti-taksiyle-ulasim",
        description: "Tarihin ve denizin iç içe girdiği Sığacık marinanın kalbine, pazarına ve Teos antik kentine ulaşım seçenekleri.",
        date: "2024-03-21",
        image: "/blog-tourism.png",
        content: [
            "Sığacık, Türkiye'nin 'Cittaslow' (Sakin Şehir) unvanını alan ilk ilçesi olan Seferihisar'ın tartışmasız en gözde turistik noktasıdır. Pazar günleri açılan üretici pazarından, taş duvarların içinden boy veren Kaleiçi sokaklarına kadar her bir köşesi huzur doludur.",
            "Teos Antik Kenti'nin giriş rotası ise genelde Sığacık içinden sağlanır. Ancak antik kente giden yol oldukça uzun ve yokuşludur. Tarihe yolculuk yaparken sıcak İzmir güneşinde yaya kalmamak büyük önem taşır.",
            "Durak taksilerimizi çağırarak doğrudan Teos Antik Kenti bilet gişesine kadar klimalı konforla ulaşabilirsiniz. Bölgenin dar sokaklarını ezbere bilen usta şoförler ile tatilinize pratiklik katmak bizim işimiz."
        ]
    },
    {
        title: "Seferihisar Acil Gece Taksisi Bulma Tüyoları",
        slug: "seferihisar-gece-ve-acil-taksi-bulma-tuyolari",
        description: "Seferihisar'da gece hayatı dönüşünde ya da sabaha karşı acil durumlarda araç ve nöbetçi taksi bulmanın basit adımları.",
        date: "2024-03-22",
        image: "/blog-night.png",
        content: [
            "Gündüz cıvıl cıvıl olan sahil bölgelerinde, gün batımından sonra özellikle eğlence mekanları kapandığında araç ve toplu taşıma bulmak imkansızlaşır. Yazlıkçı dostlarımızın Sığacık sahilinde deniz ürünleri ve müzik eşliğinde geçirdikleri güzel bir akşamın sonunda evlerine dönüş stresine girmeleri çok yaygındır.",
            "Seferihisar içerisinde 12 ay boyunca nöbetçi ve gece acil taksisi hizmeti verilmektedir. Gece yolculuklarında şoför deneyimi, alkollü sürücülerden kaçınabilme ve bölgenin ıssız yollarında yol tarifi bilme yetisi, güvenliğiniz için olmazsa olmazdır.",
            "Güvenliğinizi şansa bırakmayın. Gece vakti aracınızın kapınızda olduğundan emin olmanızı sağlayan hızlı GPS sistemli çağrı merkezlerimizle gece ulaşımlarına bir çözüm getiriyoruz."
        ]
    },
    {
        title: "Seferihisar Otogar ve Şehirlerarası Aktarmalar",
        slug: "seferihisar-otogardan-mahallelere-taksi-transfer",
        description: "Şehirlerarası otobüsten indiğiniz Seferihisar otogarından evinize, otelinize ya da merkeze bagajlarla en rahat nasıl gidilir?",
        date: "2024-03-23",
        image: "/blog-airport.png",
        content: [
            "Uzun, yorucu bir otobüs seyahati sonrası sabahın köründe veya gecenin bir yarısı Seferihisar Otogarı'na (Turabiye tarafı) adım attınız. Yüzlerce kiloluk ağır bavullar ve tatil eşyalarıyla minibüse binmeye çalışmak büyük bir eziyet olabiliyor.",
            "Özellikle yaz sıcağında, Seferihisar ilçesinin Akarca, Ürkmez veya Doğanbey gibi uzak sahil mahallelerine otogardan geçmek meşakkatlidir.",
            "Siz otogara inmeden bir telefon ile ön rezervasyon yaptığınız takdirde, taksiniz kapıda sizi ve bagajlarınızı bekler. Bütçenize uygun olarak tasarlanmış fiyatlarla bu eziyetleri ortadan kaldırıyoruz."
        ]
    },
    {
        title: "İzmir Şehir Hastanesine Seferihisar'dan Gitmek",
        slug: "seferihisar-izmir-sehir-hastanesi-acil-ulasim",
        description: "Sağlık sorunları erteleme kabul etmez. Seferihisar'dan Bayraklı Şehir Hastanesine taksiyle en güvenli ve hızlı rota seçenekleri.",
        date: "2024-03-24",
        image: "/blog-airport.png",
        content: [
            "Sağlık, söz konusu olduğunda geriye kalan her şey teferruattır. Acil hastalık durumlarında veya İzmir Şehir Hastanesi, Dokuz Eylül, Ege Üniversitesi gibi komplekslere sabahın erken saatlerindeki poliklinik randevularınıza ulaşmak için yolda vakit kaybetmemelisiniz.",
            "Toplu taşimayla üç farklı vasıta değiştirerek, kalabalık ve hastalık riski taşıyan mekanlarda eziyet çekerek hastaneye gitmek özellikle yaşlı ebeveynler için eziyettir.",
            "Aracın en pürüzsüz haliyle, şoförlerimizin nazik yardımlarıyla hasta yolcularımızın güvenliğini ön planda tutan bir taşıma vizyonumuz var."
        ]
    },
    {
        title: "Efes Antik Kenti ve Şirince'ye Günübirlik VIP Tur",
        slug: "seferihisardan-efes-ve-sirince-gunubirlik-taksi-turu",
        description: "Ege yollarında şoförlü bir araç kiralayarak Seferihisar'dan komşu ilçe Selçuk'a tarihi tur yapmak.",
        date: "2024-03-25",
        image: "/blog-tourism.png",
        content: [
            "Sadece denizin tadını çıkarmak değil, aynı zamanda tarihi mirasımıza yakından şahit olmak istiyorsanız Selçuk bölgesi paha biçilemez. Şirince'nin efsanevi evlerinde şarap tadımı yapmak ve Efes Antik kenti kütüphane manzarasına dalmak...",
            "Tüm gün boyunca yollarda araç kullanıp otopark sıralarında can çekişmek istemezseniz, özel araç ve şoför size harika bir konfor sağlar.",
            "Grupların rahatça yayılabileceği VIP veya geniş iç hacimli taksiler ile kendinizi özel hissedeceğiniz günübirlik geziler düzenleme imkanına sahibiz."
        ]
    },
    {
        title: "Evcil Hayvanınızla Konforlu Seyahat Edebilmek (Pet Taksi)",
        slug: "seferihisar-evcil-hayvan-pet-kabul-eden-taksi",
        description: "Kedi veya köpek dostunuzla sokağa çıkmak zor olmasın! Evcil hayvan dostu güvenilir pet taksi imkanları.",
        date: "2024-03-26",
        image: "/blog-tourism.png",
        content: [
            "Veteriner randevunuza yetişirken sokakta dakikalarca taksi çevirip içeri hayvan olduğu için binemediğiniz durumlar can sıkıcı olabilir. İzmir genelinde çoğu sürücü bu konuda hassastır.",
            "Bizler hayvan dostlarımızı yük olarak değil yolcu olarak gören, koltuk koruyucu ve taşıma çantası uyumlu pratik çözümler sunan bir sistem benimsiyoruz.",
            "Can dostlarınız hijyenik bir ortamda, onlara alerjik gelmeyecek klimalı temiz ortamlarda dilediğiniz rotaya sorunsuz ulaştırılır."
        ]
    },
    {
        title: "Çeşme Veya Alaçatı'dan Seferihisar'a Otel Transferi",
        slug: "cesme-alacati-seferihisar-otel-vip-transfer-taksi",
        description: "Çeşme ve Alaçatı plaj gecelerinin ardından Seferihisar'daki yazlığınıza veya otelinize nasıl güvenle ulaşırsınız?",
        date: "2024-03-27",
        image: "/blog-night.png",
        content: [
            "Tatilin eğlenceli dozunu Çeşme beach kulüplerinde ve Alaçatı sokaklarında zirveye taşıdınız. Gecenin ilerleyen saatlerinde, uykusuzluk ve yorgunluk devreye girdiğinde araç kullanmak büyük bir hayati risk doğurur.",
            "O yüzden turistik beldeler arası geçişte mutlaka bir turizm şoförü barındıran taksileri düşünmelisiniz. Geniş araçlar, arka koltukta uzanarak yapacağınız emniyetli seyahat fırsatı sunar.",
            "Huzur içinde, uyanık ve dinç şoförünüzün tecrübelerine sırtınızı yaslayarak Alaçatı rüzgarından Sığacık sahiline doğru gözleriniz kapalı seyahat edebilirsiniz."
        ]
    },
    {
        title: "Urla Bağ Yolları ve Sanat Sokağı Seyahat Stratejisi",
        slug: "urla-bag-yolu-seferihisar-arasi-sarap-turu-taksi",
        description: "Gastronomi rotalarına özel şık restoranlar, bağ yolları ve Urla enginar bahçeleri arasına rahat araç kiralama veya taksi imkanı.",
        date: "2024-03-28",
        image: "/blog-tourism.png",
        content: [
            "Urla ve Seferihisar, Michelin yıldızlı gastronomi şeflerinin yeni yükselen duraklarından olmuştur. Urla kırsalında yer alan meşhur bağ yolları, yeme içme kültürünün Ege’deki zirvesidir.",
            "Bu restoranlarda harika bir ziyafet çektikten sonra, doğanın sessiz ve engebeli yollarından şehir hayatına geri dönme fikri genelde korkutucudur. Üstelik araç park etmenin çok zor olduğu sanat sokağı dar caddeleri, sürücüyü kasar.",
            "Taksi hizmetimiz tam da böyle günler için kurtarıcı görevi görür. Tıpkı şahsi aracınızmış gibi kapınızdan alıp restoranın en uç kapısına kadar hizmet sağlarken, yemeğinizin bittiği saatte geri sizi bekliyor olabiliriz."
        ]
    },
    {
        title: "Seferihisar'da 2024 Taksi Ücretleri Adaleti",
        slug: "seferihisar-taksi-ucretleri-hesaplama-ve-tarife",
        description: "Taksicilikte şeffaflık çok önemlidir. Güncel tarifeler, valiz ücretleri ve açılış rakamları hakkında dolandırılmamak için bilmeniz gerekenler.",
        date: "2024-03-29",
        image: "/blog-airport.png",
        content: [
            "Turizm sektörünün büyümesiyle taksi piyasasında yaşanan en büyük tartışma ücret şeffaflığıdır. Bir yolcu olarak herhangi bir araca bindiğinizde cebinizden çıkacak miktar konusunda içinizin rahat etmesi en demokratik hakkınızdır.",
            "İzmir sınırlarında UKOME tarafından belirlenmiş tek bir güncel tarife bulunur. Hem açılış ücreti, hem kilometre başına binen maliyet mühürlü taksimetreler üzerinden anlık yazar. Asla gizli saklı veya turist tarifesi adı altında dolandırıcılık teşvik edilemez.",
            "Bagajlar için veya kalabalık olma durumları için ekstra şoför bahşişi harici yasadışı fiyat çekilmez. Kurumsal ve esnaf ruhlu profesyonel firmalarla seyahat etiğinizde gözünüzün değil, anın tadını yola çevirebilirsiniz."
        ]
    }
];
