"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { collection, query, orderBy, getDocs, deleteDoc, doc, limit, addDoc, setDoc, getDoc } from "firebase/firestore";
import {
    Star, MessageCircle, ExternalLink, MapPin, Clock,
    LogOut, Shield, Megaphone, Navigation, Trash2, RefreshCw,
    CheckCircle, AlertTriangle, Monitor, Smartphone, Lock,
    Eye, Save, Power, Wrench, ShieldAlert, MousePointerClick, Search,
    Car, Fuel, Calculator, TrendingUp, DollarSign, Route, Plus
} from "lucide-react";

// ─── Types ───
interface LocationLog {
    id: string;
    timestamp: string;
    lat: number;
    lon: number;
    mapsUrl: string;
}

interface RideLog {
    id: string;
    from: string;
    to: string;
    fare: number;
    date: string;
}

// ─── PC Blocker ───
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

// ─── Login ───
function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
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

// ─── Tab 1: Reklam (Ads) ───
function AdsTab() {
    const [headline1, setHeadline1] = useState("Seferihisar Taksi");
    const [headline2, setHeadline2] = useState("7/24 Hızlı Hizmet");
    const [description, setDescription] = useState("Seferihisar, Sığacık, Ürkmez bölgesinde güvenilir taksi. Havalimanı transfer, VIP araç. Hemen arayın!");
    const [displayUrl, setDisplayUrl] = useState("seferihisartaxi.com");
    const [phone, setPhone] = useState("0554 115 44 22");
    const [saved, setSaved] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const saveAdDraft = async () => {
        try {
            await setDoc(doc(db, "adsDrafts", "current"), {
                headline1, headline2, description, displayUrl, phone,
                updatedAt: new Date().toISOString()
            });
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        } catch (err) {
            console.error("Save error:", err);
        }
    };

    useEffect(() => {
        const loadDraft = async () => {
            try {
                const snap = await getDoc(doc(db, "adsDrafts", "current"));
                if (snap.exists()) {
                    const d = snap.data();
                    if (d.headline1) setHeadline1(d.headline1);
                    if (d.headline2) setHeadline2(d.headline2);
                    if (d.description) setDescription(d.description);
                    if (d.displayUrl) setDisplayUrl(d.displayUrl);
                    if (d.phone) setPhone(d.phone);
                }
            } catch (err) {
                console.error("Load draft error:", err);
            }
        };
        loadDraft();
    }, []);

    return (
        <div className="space-y-4">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
                <a
                    href="https://ads.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                    <Megaphone className="w-6 h-6 text-blue-400" />
                    <span className="text-white text-xs font-bold">Google Ads Aç</span>
                </a>
                <a
                    href="https://ads.google.com/aw/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                    <MousePointerClick className="w-6 h-6 text-purple-400" />
                    <span className="text-white text-xs font-bold">Kampanyalar</span>
                </a>
            </div>

            {/* Invalid Click Protection */}
            <a
                href="https://ads.google.com/aw/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-500/10 border border-red-500/30 rounded-2xl p-4 active:scale-95 transition-transform"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShieldAlert className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                        <h4 className="text-red-400 font-bold text-sm">Sahte Tıklama Koruma</h4>
                        <p className="text-gray-500 text-xs mt-0.5">Geçersiz tıklama raporunu gör</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-red-400/50 ml-auto" />
                </div>
            </a>

            {/* Ad Builder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary" /> Reklam Oluşturucu
                </h3>
                <div className="space-y-3">
                    <div>
                        <label className="text-gray-400 text-xs font-bold mb-1 block">Başlık 1</label>
                        <input value={headline1} onChange={(e) => setHeadline1(e.target.value.slice(0, 30))}
                            className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                        <span className="text-gray-600 text-[10px] mt-1 block text-right">{headline1.length}/30</span>
                    </div>
                    <div>
                        <label className="text-gray-400 text-xs font-bold mb-1 block">Başlık 2</label>
                        <input value={headline2} onChange={(e) => setHeadline2(e.target.value.slice(0, 30))}
                            className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary" />
                        <span className="text-gray-600 text-[10px] mt-1 block text-right">{headline2.length}/30</span>
                    </div>
                    <div>
                        <label className="text-gray-400 text-xs font-bold mb-1 block">Açıklama</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value.slice(0, 90))} rows={2}
                            className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
                        <span className="text-gray-600 text-[10px] mt-1 block text-right">{description.length}/90</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-gray-400 text-xs font-bold mb-1 block">URL</label>
                            <input value={displayUrl} onChange={(e) => setDisplayUrl(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs font-bold mb-1 block">Telefon</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-primary" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    <button onClick={() => setShowPreview(!showPreview)}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform">
                        <Eye className="w-4 h-4" /> {showPreview ? "Gizle" : "Önizleme"}
                    </button>
                    <button onClick={saveAdDraft}
                        className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform ${saved ? "bg-green-500 text-white" : "bg-primary text-secondary"}`}>
                        {saved ? <><CheckCircle className="w-4 h-4" /> Kaydedildi!</> : <><Save className="w-4 h-4" /> Kaydet</>}
                    </button>
                </div>
            </div>

            {/* Google Preview */}
            {showPreview && (
                <div className="bg-white rounded-2xl p-4 border border-gray-200">
                    <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                        <Search className="w-3 h-3" /> Google Arama Önizlemesi
                    </p>
                    <p className="text-xs text-green-700 font-medium">Sponsorlu · {displayUrl}</p>
                    <h4 className="text-blue-700 font-bold text-base leading-snug mt-0.5">
                        {headline1} | {headline2}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{description}</p>
                    <p className="text-green-700 text-xs mt-1 font-medium">📞 {phone}</p>
                </div>
            )}

            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">AW-18027028171 izleme kodu aktif</span>
                </div>
            </div>
        </div>
    );
}

// ─── Tab 2: Taksici Araçları ───
function ToolsTab() {
    const [distance, setDistance] = useState("");
    const [fareResult, setFareResult] = useState<number | null>(null);
    const [rideFrom, setRideFrom] = useState("");
    const [rideTo, setRideTo] = useState("");
    const [rideFare, setRideFare] = useState("");
    const [rides, setRides] = useState<RideLog[]>([]);
    const [todayTotal, setTodayTotal] = useState(0);
    const [fuelLiters, setFuelLiters] = useState("");
    const [fuelPrice, setFuelPrice] = useState("43.50");
    const [fuelResult, setFuelResult] = useState<number | null>(null);

    // Fare calculator (example tariff)
    const OPENING_FEE = 35;
    const PER_KM = 18;
    const NIGHT_MULTIPLIER = 1.5;

    const calculateFare = (isNight: boolean) => {
        const km = parseFloat(distance);
        if (isNaN(km) || km <= 0) return;
        const base = OPENING_FEE + (km * PER_KM);
        setFareResult(Math.round(isNight ? base * NIGHT_MULTIPLIER : base));
    };

    const calculateFuel = () => {
        const liters = parseFloat(fuelLiters);
        const price = parseFloat(fuelPrice);
        if (isNaN(liters) || isNaN(price)) return;
        setFuelResult(Math.round(liters * price * 100) / 100);
    };

    // Load today's rides
    const loadRides = async () => {
        try {
            const q = query(collection(db, "rides"), orderBy("date", "desc"), limit(20));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as RideLog[];
            setRides(data);

            const today = new Date().toLocaleDateString("tr-TR");
            const total = data.filter(r => new Date(r.date).toLocaleDateString("tr-TR") === today)
                .reduce((sum, r) => sum + r.fare, 0);
            setTodayTotal(total);
        } catch (err) {
            console.error("Load rides error:", err);
        }
    };

    const addRide = async () => {
        const fare = parseFloat(rideFare);
        if (!rideFrom || !rideTo || isNaN(fare)) return;
        try {
            await addDoc(collection(db, "rides"), {
                from: rideFrom, to: rideTo, fare,
                date: new Date().toISOString()
            });
            setRideFrom(""); setRideTo(""); setRideFare("");
            loadRides();
        } catch (err) {
            console.error("Add ride error:", err);
        }
    };

    const deleteRide = async (id: string) => {
        try {
            await deleteDoc(doc(db, "rides", id));
            loadRides();
        } catch (err) {
            console.error("Delete ride error:", err);
        }
    };

    useEffect(() => { loadRides(); }, []);

    return (
        <div className="space-y-4">
            {/* Daily Earnings Summary */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold">Bugünkü Kazanç</p>
                        <p className="text-3xl font-extrabold text-white mt-1">₺{todayTotal.toLocaleString("tr-TR")}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>

            {/* Quick Ride Logger */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4 text-primary" /> Yolculuk Ekle
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-3">
                    <input value={rideFrom} onChange={(e) => setRideFrom(e.target.value)}
                        placeholder="Nereden"
                        className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary placeholder:text-gray-600" />
                    <input value={rideTo} onChange={(e) => setRideTo(e.target.value)}
                        placeholder="Nereye"
                        className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary placeholder:text-gray-600" />
                    <input value={rideFare} onChange={(e) => setRideFare(e.target.value)}
                        placeholder="₺ Ücret" type="number"
                        className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-primary placeholder:text-gray-600" />
                </div>
                <button onClick={addRide}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-secondary rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform">
                    <Plus className="w-4 h-4" /> Kaydet
                </button>
            </div>

            {/* Recent Rides */}
            {rides.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <Route className="w-4 h-4 text-primary" /> Son Yolculuklar
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                        {rides.slice(0, 10).map((ride) => (
                            <div key={ride.id} className="flex items-center justify-between bg-white/5 rounded-xl py-2 px-3">
                                <div className="flex-1">
                                    <p className="text-white text-xs font-medium">{ride.from} → {ride.to}</p>
                                    <p className="text-gray-500 text-[10px]">{new Date(ride.date).toLocaleString("tr-TR")}</p>
                                </div>
                                <span className="text-primary font-bold text-sm mr-2">₺{ride.fare}</span>
                                <button onClick={() => deleteRide(ride.id)}
                                    className="p-1 bg-red-500/10 rounded-lg active:scale-90 transition-transform">
                                    <Trash2 className="w-3 h-3 text-red-400" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fare Calculator */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-primary" /> Ücret Hesapla
                </h3>
                <div className="flex gap-2 mb-3">
                    <input value={distance} onChange={(e) => setDistance(e.target.value)}
                        placeholder="Mesafe (km)" type="number"
                        className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary placeholder:text-gray-600" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => calculateFare(false)}
                        className="bg-white/10 text-white rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform">
                        ☀️ Gündüz
                    </button>
                    <button onClick={() => calculateFare(true)}
                        className="bg-white/10 text-white rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform">
                        🌙 Gece (x1.5)
                    </button>
                </div>
                {fareResult !== null && (
                    <div className="mt-3 bg-primary/10 rounded-xl p-3 text-center">
                        <span className="text-gray-400 text-xs">Tahmini ücret: </span>
                        <span className="text-primary font-extrabold text-xl">₺{fareResult}</span>
                    </div>
                )}
                <p className="text-gray-600 text-[10px] mt-2">Açılış: ₺{OPENING_FEE} + km başı ₺{PER_KM}</p>
            </div>

            {/* Fuel Calculator */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-primary" /> Yakıt Hesapla
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <input value={fuelLiters} onChange={(e) => setFuelLiters(e.target.value)}
                        placeholder="Litre" type="number"
                        className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-primary placeholder:text-gray-600" />
                    <input value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)}
                        placeholder="₺/Litre" type="number"
                        className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-primary placeholder:text-gray-600" />
                </div>
                <button onClick={calculateFuel}
                    className="w-full bg-white/10 text-white rounded-xl py-3 text-xs font-bold active:scale-95 transition-transform">
                    Hesapla
                </button>
                {fuelResult !== null && (
                    <div className="mt-3 bg-primary/10 rounded-xl p-3 text-center">
                        <span className="text-gray-400 text-xs">Toplam: </span>
                        <span className="text-primary font-extrabold text-xl">₺{fuelResult}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Tab 3: Konum Logları ───
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
                <button onClick={fetchLogs}
                    className="bg-white/10 p-2 rounded-xl active:scale-90 transition-transform">
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
                                <button onClick={() => deleteLog(log.id)}
                                    className="p-1.5 bg-red-500/10 rounded-lg active:scale-90 transition-transform">
                                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                                </button>
                            </div>
                            <div className="text-gray-300 text-xs mb-3 font-mono">
                                {log.lat.toFixed(6)}, {log.lon.toFixed(6)}
                            </div>
                            <a href={log.mapsUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary/10 text-primary rounded-xl py-2.5 text-xs font-bold active:scale-95 transition-transform">
                                <MapPin className="w-3.5 h-3.5" /> Google Maps&apos;te Aç
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Tab 4: Güvenlik ───
function SecurityTab() {
    const [maintenance, setMaintenance] = useState(false);
    const [mLoading, setMLoading] = useState(true);

    useEffect(() => {
        const loadState = async () => {
            try {
                const snap = await getDoc(doc(db, "settings", "maintenance"));
                if (snap.exists()) setMaintenance(snap.data().enabled ?? false);
            } catch (err) { console.error(err); }
            setMLoading(false);
        };
        loadState();
    }, []);

    const toggleMaintenance = async () => {
        const newVal = !maintenance;
        setMaintenance(newVal);
        try {
            await setDoc(doc(db, "settings", "maintenance"), {
                enabled: newVal, updatedAt: new Date().toISOString()
            });
        } catch (err) {
            console.error(err);
            setMaintenance(!newVal);
        }
    };

    return (
        <div className="space-y-4">
            {/* Maintenance Toggle */}
            <div className={`border rounded-2xl p-5 transition-colors ${maintenance ? "bg-amber-500/10 border-amber-500/30" : "bg-white/5 border-white/10"}`}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${maintenance ? "bg-amber-500/20" : "bg-green-500/20"}`}>
                            {maintenance ? <Wrench className="w-5 h-5 text-amber-400" /> : <Power className="w-5 h-5 text-green-400" />}
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Bakım Modu</h3>
                            <p className="text-gray-500 text-xs">{maintenance ? "Site bakımda" : "Site aktif"}</p>
                        </div>
                    </div>
                    <button onClick={toggleMaintenance} disabled={mLoading}
                        className={`relative w-14 h-8 rounded-full transition-colors ${maintenance ? "bg-amber-500" : "bg-gray-600"}`}>
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${maintenance ? "translate-x-7" : "translate-x-1"}`} />
                    </button>
                </div>
                {maintenance && (
                    <p className="text-amber-400/80 text-xs bg-amber-500/10 rounded-xl p-3">
                        ⚠️ Bakım modu aktif. Ziyaretçiler sitenize erişemez.
                    </p>
                )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
                <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer"
                    className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <span className="text-white text-xs font-bold">Cloudflare</span>
                </a>
                <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <ExternalLink className="w-6 h-6 text-gray-400" />
                    <span className="text-white text-xs font-bold">Vercel</span>
                </a>
            </div>

            {/* Attack Guide */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /> Saldırı Altındaysanız
                </h4>
                <ol className="space-y-2 text-gray-400 text-xs">
                    <li className="flex gap-2"><span className="text-primary font-bold">1.</span> Cloudflare panelini açın</li>
                    <li className="flex gap-2"><span className="text-primary font-bold">2.</span> &quot;Under Attack Mode&quot; aktifleştirin</li>
                    <li className="flex gap-2"><span className="text-primary font-bold">3.</span> Saldırı bitene kadar aktif tutun</li>
                </ol>
            </div>

            {/* Status */}
            <div className="space-y-2">
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">SSL Aktif</span>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">Firebase Auth Aktif</span>
                </div>
            </div>
        </div>
    );
}

// ─── Main ───
const TABS = [
    { id: "ads", label: "Reklam", icon: Megaphone },
    { id: "tools", label: "Araçlar", icon: Car },
    { id: "logs", label: "Konumlar", icon: MapPin },
    { id: "security", label: "Güvenlik", icon: Shield },
];

export default function AdminPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("ads");
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return () => { window.removeEventListener("resize", checkMobile); unsubscribe(); };
    }, []);

    if (loading) return (
        <div className="min-h-screen bg-secondary flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
    );

    if (!isMobile) return <PCBlocker />;
    if (!user) return <LoginScreen />;

    return (
        <div className="min-h-screen bg-secondary pb-24">
            <div className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-xl border-b border-white/10 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-white font-extrabold text-lg">Yönetim</h1>
                        <p className="text-gray-500 text-xs">Seferihisar Taksi</p>
                    </div>
                    <button onClick={() => signOut(auth)}
                        className="bg-white/10 p-2.5 rounded-xl active:scale-90 transition-transform">
                        <LogOut className="w-4 h-4 text-gray-400" />
                    </button>
                </div>
            </div>

            <div className="px-4 py-6">
                {activeTab === "ads" && <AdsTab />}
                {activeTab === "tools" && <ToolsTab />}
                {activeTab === "logs" && <LocationLogsTab />}
                {activeTab === "security" && <SecurityTab />}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 px-2 py-2 flex justify-around z-50">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all active:scale-90 ${isActive ? "bg-primary/10 text-primary" : "text-gray-600"}`}>
                            <Icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
                            <span className="text-[10px] font-bold">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
