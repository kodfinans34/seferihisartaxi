import Link from "next/link";
import { Star } from "lucide-react";

export const ReviewStars = ({ rating = 5 }: { rating?: number }) => {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(rating)
                            ? "fill-primary text-primary"
                            : "fill-gray-300 text-gray-300"
                        }`}
                />
            ))}
            <span className="ml-2 font-bold text-lg">{rating.toFixed(1)}</span>
        </div>
    );
};
