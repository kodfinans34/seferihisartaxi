import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ServiceCard = ({
    title,
    description,
    icon,
    href = "/hizmetlerimiz",
}: {
    title: string;
    description: string;
    icon: ReactNode;
    href?: string;
}) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <Link href={href} className="flex items-center text-primary font-bold hover:text-primary-hover transition-colors mt-auto">
                Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};

export const AreaCard = ({
    title,
    href,
    image,
}: {
    title: string;
    href: string;
    image?: string;
}) => {
    return (
        <Link
            href={href}
            className="group overflow-hidden rounded-[2rem] relative block h-56 md:h-64 bg-secondary shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10 transition-opacity group-hover:opacity-80"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform duration-300">{title}</h3>
                <div className="w-12 h-1 bg-primary mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
        </Link>
    );
};
