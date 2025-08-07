import { Heart, Star } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  rating: string;
  isGuestFavorite?: boolean;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  rating,
  isGuestFavorite = false,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer w-[200px] flex-shrink-0">
      <div
        className="relative w-full mb-2 rounded-xl overflow-hidden border border-gray-200 bg-white"
        style={{
          aspectRatio: "2/2.1",
          height: "auto",
          boxShadow:
            "inset 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 border-radius-inner-xl"
        />
        <button className="absolute top-2 right-2 p-1 hover:scale-110 transition-transform">
          <Heart className="h-5 w-5 text-white fill-black/20 hover:fill-red-500 hover:text-red-500 stroke-2" />
        </button>
        {isGuestFavorite && (
          <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-0.5 shadow-sm">
            <span className="text-xs font-semibold text-gray-800">
              Guest favorite
            </span>
          </div>
        )}
      </div>

      <div className="space-y-0.5">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-900 text-sm leading-tight truncate pr-2 flex-1">
            {title}
          </h3>
          <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
            <Star className="h-3 w-3 fill-black text-black" />
            <span className="text-xs text-gray-900 font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-tight">{location}</p>
        <p className="text-gray-900 text-sm leading-tight">
          <span className="font-semibold">{price}</span>
        </p>
      </div>
    </div>
  );
}
