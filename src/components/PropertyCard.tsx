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
  price,
  rating,
  isGuestFavorite = false,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer w-[208px] flex-shrink-0">
      <div
        className="relative w-full mb-2 rounded-xl overflow-hidden border border-gray-200 bg-white"
        style={{
          aspectRatio: "2/1.85",
          height: "auto",
          boxShadow:
            "inset 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 borderRadius-lg"
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
      <div className="space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-900 text-sm leading-tight truncate pr-2 flex-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between px-2">
          <p className="text-sm text-neutral-500">
            <span className=" text-gray-600">{price}</span> 
          </p>
          <div className="flex items-center flex-shrink-0">
            <Star className="h-3 w-3 fill-gray-600" />
            <span className="text-xs text-gray-600 font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
