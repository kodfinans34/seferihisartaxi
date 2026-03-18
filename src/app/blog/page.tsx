import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, FileText } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
    title: "Tüm Makaleler | Seferihisar Taksi Rehberi",
    description: "Seferihisar, Sığacık ve çevresi için faydalı ulaşım rehberleri, gece taksi bulma tüyoları ve seyahat yazıları.",
};

export default function BlogListingPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 fill-blue-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Tüm Makaleler</h1>
                    <p className="text-gray-600 font-medium">Ulaşım rehberimizdeki tüm içeriklere buradan göz atabilirsiniz.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Link href={`/blog/${blog.slug}`} key={blog.slug} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/50 transition-all flex flex-col h-full group">
                            {blog.image && (
                                <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6">
                                    <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            )}
                            <div className="text-sm text-primary font-bold mb-3">{blog.date}</div>
                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">{blog.title}</h3>
                            <p className="text-gray-600 line-clamp-3 flex-grow leading-relaxed">{blog.description}</p>
                            <div className="mt-6 flex items-center text-primary font-bold text-sm bg-primary/10 w-fit px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                Devamını Oku <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
