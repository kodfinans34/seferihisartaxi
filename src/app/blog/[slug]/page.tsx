import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Calendar, FileText, Phone, MessageCircle } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        return { title: "Blog Bulunamadı" };
    }

    const title = `${blog.title} | Seferihisar Taksi Rehberi`;
    
    return {
        title: title,
        description: blog.description,
        keywords: [blog.title, "seferihisar taksi rehberi", "izmir taksi blog", "sığacık ulaşım"],
        openGraph: {
            title: title,
            description: blog.description,
            url: `https://seferihisartaxi.com/blog/${blog.slug}`,
            images: blog.image ? [blog.image] : undefined,
            type: "article",
        },
        twitter: {
            title: title,
            description: blog.description,
            images: blog.image ? [blog.image] : undefined,
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    // BlogPosting Schema for Rich Snippets (Google Discover & Search)
    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.image ? `https://seferihisartaxi.com${blog.image}` : "https://seferihisartaxi.com/seo-resmi.jpeg",
        "datePublished": blog.date,
        "dateModified": blog.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://seferihisartaxi.com/blog/${blog.slug}`
        },
        "author": {
            "@type": "Organization",
            "name": "Seferihisar Taksi",
            "url": "https://seferihisartaxi.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Seferihisar Taksi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://seferihisartaxi.com/logo.png"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <BreadcrumbSchema items={[
                { name: "Anasayfa", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: blog.title, href: `/blog/${blog.slug}` }
            ]} />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 bg-white hover:bg-primary group text-secondary hover:text-white font-bold px-6 py-3.5 rounded-2xl shadow-sm border border-gray-100 min-w-[200px] justify-center mb-8 transition-all hover:-translate-y-1 hover:shadow-md">
                    <ArrowLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" /> 
                    <span>Anasayfaya Dön</span>
                </Link>

                <article className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {blog.date}</span>
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-primary" /> Ulaşım Rehberi</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                        {blog.title}
                    </h1>

                    {blog.image && (
                        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative h-64 md:h-[400px] w-full">
                            <Image 
                                src={blog.image} 
                                alt={blog.title} 
                                fill 
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-6">
                        {blog.content.map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 text-center bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-secondary mb-4">Ulaşıma mı İhtiyacınız Var?</h3>
                        <p className="text-gray-600 mb-6">Seferihisar ve çevresinde profesyonel araç kiralama veya taksi ihtiyaçlarınız için anında rezervasyon yapabilirsiniz.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+905541154422" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-white font-bold px-6 py-4 rounded-xl hover:bg-black transition-colors shadow-lg hover:-translate-y-1">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>Ara: 0554 115 44 22</span>
                            </a>
                            <a href="https://wa.me/905541154422" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg hover:-translate-y-1">
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp İletişim</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
