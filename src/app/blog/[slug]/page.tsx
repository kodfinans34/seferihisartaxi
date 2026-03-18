import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Calendar, FileText } from "lucide-react";

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

    return {
        title: `${blog.title} | Seferihisar Taksi Rehberi`,
        description: blog.description,
        keywords: [blog.title, "seferihisar taksi rehberi", "izmir taksi blog", "sığacık ulaşım"],
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    // Article Schema for Rich Snippets
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "description": blog.description,
        "datePublished": blog.date,
        "author": {
            "@type": "Organization",
            "name": "Seferihisar Taksi"
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Anasayfaya Dön
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
                        <a href="tel:+905541154422" className="inline-block bg-primary text-secondary font-bold px-8 py-3 rounded-xl hover:bg-primary-hover transition-colors shadow-sm">
                            Hemen Bizi Arayın: 0554 115 44 22
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}
