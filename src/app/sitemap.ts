import { MetadataRoute } from "next";
import { regions } from "@/data/regions";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://seferihisartaxi.com";

    // Base static routes
    const routes = [
        "",
        "/hakkimizda",
        "/hizmetlerimiz",
        "/iletisim",
        "/havalimani-transfer",
        "/seferihisar-taksi",
        "/sigacik-taksi",
        "/urkmez-taksi",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic region routes generated from Phase 2
    const dynamicRoutes = regions.map((region) => ({
        url: `${baseUrl}/taksi/${region.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: region.type === "ilce" ? 0.9 : 0.7,
    }));

    return [...routes, ...dynamicRoutes];
}
