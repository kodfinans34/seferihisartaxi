import { MetadataRoute } from "next";
import { regions } from "@/data/regions";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://seferihisartaxi.com";

    // Base static routes
    const routes = [
        "",
        "/en",
        "/hakkimizda",
        "/hizmetlerimiz",
        "/iletisim",
        "/havalimani-transfer",
        "/seferihisar-taksi",
        "/sigacik-taksi",
        "/urkmez-taksi",
        "/yorumlar",
        "/blog",
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

    // Blog routes for SEO
    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...routes, ...dynamicRoutes, ...blogRoutes];
}
