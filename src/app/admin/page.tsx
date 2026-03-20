"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { collection, query, orderBy, getDocs, deleteDoc, doc, limit } from "firebase/firestore";
import {
    Star, MessageCircle, Flag, Copy, ExternalLink, MapPin, Clock,
    LogOut, Shield, Megaphone, Navigation, Trash2, RefreshCw,
    CheckCircle, AlertTriangle, Monitor, Smartphone, Lock
} from "lucide-react";

// ─── Reviews Data ───
const siteReviews = [
    { author: "Ayşe Y.", text: "Çok hızlı ve kibar bir hizmet. Şoför bey çok ilgiliydi, araç temiz ve konforluydu.", rating: 5 },
    { author: "Burak K.", text: "İzmir Havalimanı transferi için kullandık. Uçağımız rötar yapmasına rağmen bizi bekleyip valizlerimize yardımcı oldular.", rating: 5 },
    { author: "Elif M.", text: "Sığacık Marina'dan merkeze geçmek için aradık. 5 dakika içinde kapıdaydılar.", rating: 5 },
    { author: "Caner D.", text: "Gece geç saatte Ürkmez'den taksi bulabilir miyiz diye endişe ederken bizi hemen alıp evimize güvenle bıraktılar.", rating: 5 },
    { author: "Zeynep A.", text: "Teos Antik Kenti dönüşü taksimiz anında geldi. Şoför abinin yöre hakkındaki sohbeti şahaneydi.", rating: 5 },
    { author: "Mehmet T.", text: "Seferihisar'dan havalimanına gece 4'te transfer yaptık. Tam zamanında geldiler.", rating: 5 },
    { author: "Selin K.", text: "Kedimizle beraber veterinere gitmemiz gerekiyordu, taşıma çantasıyla kabul ettiler.", rating: 5 },
    { author: "Hasan Ö.", text: "Doğanbey sahilden Seferihisar merkeze geçtik. Şoför bey bölgenin güzelliklerini anlattı.", rating: 5 },
    { author: "Fatma B.", text: "Yaşlı annem için hastaneye gidiş-dönüş transferi ayarladık. Şoför bey anneme çok kibar davrandı.", rating: 5 },
    { author: "Ali R.", text: "Urla'dan Sığacık'a arkadaş grubu olarak gittik. 7 kişiyi geniş araçla sorunsuz taşıdılar.", rating: 5 },
    { author: "Derya Ş.", text: "Çeşme'den Seferihisar'a gece dönüşte aradık. 15 dakikada buluşma noktasındaydılar.", rating: 5 },
    { author: "Emre Y.", text: "WhatsApp'tan konum attık, dakikalar içinde aracımız geldi. Çok pratik bir sistem kurmuşlar.", rating: 5 },
];

// ─── Types ───
interface LocationLog {
    id: string;
    timestamp: string;
    lat: number;
    lon: number;
    mapsUrl: string;
}

// ─── PC Blocker Component ───
function PCBlocker() {
    return (
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-8 text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold text-white mb-4">Mobil Panel</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
                Bu yönetim paneli <strong className="text-primary">mobil cihazlar</strong> için optimize edilmiştir.
                PC sürümü sadece yönetici onayı ile açılabilir.
            </p>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                <Monitor className="w-6 h-6 text-gray-500" />
                <span className="text-gray-500 font-medium text-sm">Masaüstü erişim kısıtlıdır</span>
                <Lock className="w-5 h-5 text-gray-600" />
            </div>
        </div>
    );
}

// ─── Login Component ───
function LoginScreen({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin();
        } catch {
            setError("E-posta veya şifre hatalı!");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-2xl font-extrabold text-white">Yönetim Paneli</h1>
                    <p className="text-gray-400 text-sm mt-2">Seferihisar Taksi</p>
                </div>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="E-posta"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-4 text-lg placeholder:text-gray-500 focus:outline-none focus:border-primary"
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-4 text-lg placeholder:text-gray-500 focus:outline-none focus:border-primary"
                    />
                    {error && <p className="text-red-400 text-sm text-center font-medium">{error}</p>}
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-primary text-secondary font-bold py-4 rounded-xl text-lg hover:bg-primary-hover transition-all active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Tab: Reviews ───
function ReviewsTab() {
    const [copied, setCopied] = useState(false);
    const reviewLink = "https://g.page/r/CXiz0i0fzzocEAE/review";

    const copyLink = () => {
        navigator.clipboard.writeText(reviewLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
                <a
                    href="https://business.google.com/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-white text-xs font-bold text-center">Tüm Yorumları Yönet</span>
                </a>
                <button
                    onClick={copyLink}
                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                    {copied ? <CheckCircle className="w-6 h-6 text-green-400" /> : <Copy className="w-6 h-6 text-green-400" />}
                    <span className="text-white text-xs font-bold text-center">{copied ? "Link Kopyalandı!" : "Yorum Linki Kopyala"}</span>
                </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-3">
                {siteReviews.map((review, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-white text-sm">{review.author}</span>
                            <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed mb-3">{review.text}</p>
                        <div className="flex gap-2">
                            <a
                                href="https://business.google.com/reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-blue-500/10 text-blue-400 rounded-xl py-2.5 text-xs font-bold active:scale-95 transition-transform"
                            >
                                <MessageCircle className="w-3.5 h-3.5" /> Cevap Yaz
                            </a>
                            <a
                                href="https://support.google.com/business/answer/4596773"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/10 text-red-400 rounded-xl py-2.5 text-xs font-bold active:scale-95 transition-transform"
                            >
                                <Flag className="w-3.5 h-3.5" /> İtiraz Et
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Tab: Location Logs ───
function LocationLogsTab() {
    const [logs, setLogs] = useState<LocationLog[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "locationLogs"), orderBy("timestamp", "desc"), limit(50));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as LocationLog[];
            setLogs(data);
        } catch (err) {
            console.error("Log fetch error:", err);
        }
        setLoading(false);
    };

    const deleteLog = async (id: string) => {
        try {
            await deleteDoc(doc(db, "locationLogs", id));
            setLogs(prev => prev.filter(l => l.id !== id));
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    useEffect(() => { fetchLogs(); }, []);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-sm">
                    <Navigation className="w-4 h-4 text-primary inline mr-2" />
                    Son Konum Talepleri
                </h3>
                <button
                    onClick={fetchLogs}
                    className="bg-white/10 p-2 rounded-xl active:scale-90 transition-transform"
                >
                    <RefreshCw className={`w-4 h-4 text-gray-400 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-500">Yükleniyor...</div>
            ) : logs.length === 0 ? (
                <div className="text-center py-12">
                    <MapPin className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">Henüz konum kaydı yok</p>
                    <p className="text-gray-600 text-xs mt-1">Müşteriler &ldquo;Konumumu Gönder&rdquo; butonuna tıkladığında burada görünecek.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {logs.map((log) => (
                        <div key={log.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                                    <span className="text-gray-400 text-xs">{new Date(log.timestamp).toLocaleString("tr-TR")}</span>
                                </div>
                                <button
                                    onClick={() => deleteLog(log.id)}
                                    className="p-1.5 bg-red-500/10 rounded-lg active:scale-90 transition-transform"
                                >
                                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                                </button>
                            </div>
                            <div className="text-gray-300 text-xs mb-3 font-mono">
                                {log.lat.toFixed(6)}, {log.lon.toFixed(6)}
                            </div>
                            <a
                                href={log.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary/10 text-primary rounded-xl py-2.5 text-xs font-bold active:scale-95 transition-transform"
                            >
                                <MapPin className="w-3.5 h-3.5" /> Google Maps&apos;te Aç
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Tab: Google Ads ───
function AdsTab() {
    return (
        <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Megaphone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm">Google Ads</h3>
                        <p className="text-gray-500 text-xs">Kampanya ID: AW-18027028171</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <a
                        href="https://ads.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-xl py-4 font-bold text-sm active:scale-95 transition-transform"
                    >
                        <ExternalLink className="w-4 h-4" /> Google Ads Panelini Aç
                    </a>
                    <a
                        href="https://ads.google.com/aw/campaigns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl py-3 font-bold text-xs active:scale-95 transition-transform"
                    >
                        Kampanyaları Görüntüle
                    </a>
                    <a
                        href="https://ads.google.com/aw/conversions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl py-3 font-bold text-xs active:scale-95 transition-transform"
                    >
                        Dönüşüm İzleme
                    </a>
                </div>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">Dönüşüm Kodu Aktif</span>
                </div>
                <p className="text-gray-500 text-xs">Google Ads dönüşüm izleme kodu sitenizde aktif olarak çalışmaktadır (layout.tsx).</p>
            </div>
        </div>
    );
}

// ─── Tab: Security ───
function SecurityTab() {
    return (
        <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm">Güvenlik Paneli</h3>
                        <p className="text-gray-500 text-xs">Saldırı koruma ve site güvenliği</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <a
                        href="https://dash.cloudflare.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-xl py-4 font-bold text-sm active:scale-95 transition-transform"
                    >
                        <Shield className="w-4 h-4" /> Cloudflare Paneli
                    </a>
                    <a
                        href="https://vercel.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl py-3 font-bold text-xs active:scale-95 transition-transform"
                    >
                        Vercel Dashboard
                    </a>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Saldırı Altındaysanız
                </h4>
                <ol className="space-y-2 text-gray-400 text-xs leading-relaxed">
                    <li className="flex gap-2"><span className="text-primary font-bold">1.</span> Cloudflare panelini açın</li>
                    <li className="flex gap-2"><span className="text-primary font-bold">2.</span> &quot;Under Attack Mode&quot; seçeneğini aktifleştirin</li>
                    <li className="flex gap-2"><span className="text-primary font-bold">3.</span> Saldırı bitene kadar aktif tutun</li>
                    <li className="flex gap-2"><span className="text-primary font-bold">4.</span> Ardından tekrar kapatın</li>
                </ol>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">SSL Sertifikası Aktif</span>
                </div>
                <p className="text-gray-500 text-xs">seferihisartaxi.com HTTPS ile korunmaktadır.</p>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">Firebase Auth Aktif</span>
                </div>
                <p className="text-gray-500 text-xs">Admin paneli Firebase Authentication ile korunmaktadır.</p>
            </div>
        </div>
    );
}

// ─── Main Admin Page ───
const TABS = [
    { id: "reviews", label: "Yorumlar", icon: Star },
    { id: "logs", label: "Konumlar", icon: MapPin },
    { id: "ads", label: "Reklam", icon: Megaphone },
    { id: "security", label: "Güvenlik", icon: Shield },
];

export default function AdminPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("reviews");
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Check viewport
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Auth state
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });

        return () => {
            window.removeEventListener("resize", checkMobile);
            unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // PC Blocker
    if (!isMobile) {
        return <PCBlocker />;
    }

    // Login
    if (!user) {
        return <LoginScreen onLogin={() => {}} />;
    }

    // Dashboard
    return (
        <div className="min-h-screen bg-secondary pb-24">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-xl border-b border-white/10 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-white font-extrabold text-lg">Yönetim</h1>
                        <p className="text-gray-500 text-xs">Seferihisar Taksi</p>
                    </div>
                    <button
                        onClick={() => signOut(auth)}
                        className="bg-white/10 p-2.5 rounded-xl active:scale-90 transition-transform"
                    >
                        <LogOut className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="px-4 py-6">
                {activeTab === "reviews" && <ReviewsTab />}
                {activeTab === "logs" && <LocationLogsTab />}
                {activeTab === "ads" && <AdsTab />}
                {activeTab === "security" && <SecurityTab />}
            </div>

            {/* Bottom Tab Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 px-2 py-2 flex justify-around z-50">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all active:scale-90 ${
                                isActive ? "bg-primary/10 text-primary" : "text-gray-600"
                            }`}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
                            <span className="text-[10px] font-bold">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
