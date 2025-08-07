"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { useRef } from "react";

export default function PropertySections() {
  const losAngelesRef = useRef<HTMLDivElement>(null);
  const sanDiegoRef = useRef<HTMLDivElement>(null);
  const palmSpringsRef = useRef<HTMLDivElement>(null);
  const bigBearRef = useRef<HTMLDivElement>(null);
  const joshuaTreeRef = useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const losAngelesProperties = [
    {
      id: "1",
      image: "https://ext.same-assets.com/1951721302/2912848744.jpeg",
      title: "Guest suite in Los Angeles",
      location: "Los Angeles",
      price: "$238 for 2 nights",
      rating: "4.85",
      isGuestFavorite: true,
    },
    {
      id: "2",
      image: "https://ext.same-assets.com/1951721302/453168885.jpeg",
      title: "Room in Los Angeles",
      location: "Los Angeles",
      price: "$115 for 2 nights",
      rating: "4.94",
      isGuestFavorite: true,
    },
    {
      id: "3",
      image: "https://ext.same-assets.com/1951721302/561518707.jpeg",
      title: "Cottage in Los Angeles",
      location: "Los Angeles",
      price: "$320 for 2 nights",
      rating: "4.93",
      isGuestFavorite: true,
    },
    {
      id: "4",
      image: "https://ext.same-assets.com/1951721302/3776680705.jpeg",
      title: "Home in Topanga",
      location: "Topanga",
      price: "$386 for 2 nights",
      rating: "4.9",
      isGuestFavorite: true,
    },
    {
      id: "5",
      image: "https://ext.same-assets.com/1951721302/3867191280.jpeg",
      title: "Guest suite in Los Angeles",
      location: "Los Angeles",
      price: "$162 for 2 nights",
      rating: "4.85",
      isGuestFavorite: false,
    },
    {
      id: "6",
      image: "https://ext.same-assets.com/1951721302/763784093.jpeg",
      title: "Apartment in Los Angeles",
      location: "Los Angeles",
      price: "$180 for 2 nights",
      rating: "4.82",
      isGuestFavorite: true,
    },
    {
      id: "7",
      image: "https://ext.same-assets.com/1951721302/3648047307.jpeg",
      title: "Modern home in Los Angeles",
      location: "Los Angeles",
      price: "$420 for 2 nights",
      rating: "4.91",
      isGuestFavorite: true,
    },
    {
      id: "8",
      image: "https://ext.same-assets.com/1951721302/1650802464.jpeg",
      title: "Studio in Los Angeles",
      location: "Los Angeles",
      price: "$95 for 2 nights",
      rating: "4.76",
      isGuestFavorite: false,
    },
  ];

  const sanDiegoProperties = [
    {
      id: "9",
      image: "https://ext.same-assets.com/1951721302/763784093.jpeg",
      title: "Room in San Diego",
      location: "San Diego",
      price: "$221 for 2 nights",
      rating: "4.96",
      isGuestFavorite: true,
    },
    {
      id: "10",
      image: "https://ext.same-assets.com/1951721302/3648047307.jpeg",
      title: "Room in San Diego",
      location: "San Diego",
      price: "$142 for 2 nights",
      rating: "4.97",
      isGuestFavorite: true,
    },
    {
      id: "11",
      image: "https://ext.same-assets.com/1951721302/1650802464.jpeg",
      title: "Shared hotel room in San Diego",
      location: "San Diego",
      price: "$137 for 2 nights",
      rating: "5.0",
      isGuestFavorite: false,
    },
    {
      id: "12",
      image: "https://ext.same-assets.com/1951721302/1589752273.jpeg",
      title: "Apartment in San Diego",
      location: "San Diego",
      price: "$252 for 2 nights",
      rating: "4.88",
      isGuestFavorite: true,
    },
    {
      id: "13",
      image: "https://ext.same-assets.com/1951721302/2290202020.jpeg",
      title: "Cottage in San Diego",
      location: "San Diego",
      price: "$400 for 2 nights",
      rating: "4.84",
      isGuestFavorite: false,
    },
    {
      id: "14",
      image: "https://ext.same-assets.com/1951721302/2912848744.jpeg",
      title: "Beachfront condo in San Diego",
      location: "San Diego",
      price: "$380 for 2 nights",
      rating: "4.89",
      isGuestFavorite: true,
    },
    {
      id: "15",
      image: "https://ext.same-assets.com/1951721302/453168885.jpeg",
      title: "Modern loft in San Diego",
      location: "San Diego",
      price: "$295 for 2 nights",
      rating: "4.93",
      isGuestFavorite: true,
    },
    {
      id: "16",
      image: "https://ext.same-assets.com/1951721302/561518707.jpeg",
      title: "Garden view apartment",
      location: "San Diego",
      price: "$175 for 2 nights",
      rating: "4.78",
      isGuestFavorite: false,
    },
  ];

  const palmSpringsProperties = [
    {
      id: "17",
      image: "https://ext.same-assets.com/1951721302/619434945.jpeg",
      title: "Apartment in Palm Springs",
      location: "Palm Springs",
      price: "$229 for 2 nights",
      rating: "4.95",
      isGuestFavorite: true,
    },
    {
      id: "18",
      image: "https://ext.same-assets.com/1951721302/234758435.jpeg",
      title: "Villa in Yucca Valley",
      location: "Yucca Valley",
      price: "$467 for 2 nights",
      rating: "4.95",
      isGuestFavorite: true,
    },
    {
      id: "19",
      image: "https://ext.same-assets.com/1951721302/388658729.jpeg",
      title: "Room in Palm Springs",
      location: "Palm Springs",
      price: "$157 for 2 nights",
      rating: "4.89",
      isGuestFavorite: true,
    },
    {
      id: "20",
      image: "https://ext.same-assets.com/1951721302/2477382822.jpeg",
      title: "Home in Palm Springs",
      location: "Palm Springs",
      price: "$838 for 2 nights",
      rating: "4.82",
      isGuestFavorite: false,
    },
    {
      id: "21",
      image: "https://ext.same-assets.com/1951721302/858011120.jpeg",
      title: "Home in Palm Desert",
      location: "Palm Desert",
      price: "$444 for 2 nights",
      rating: "4.78",
      isGuestFavorite: true,
    },
    {
      id: "22",
      image: "https://ext.same-assets.com/1951721302/2912848744.jpeg",
      title: "Desert retreat",
      location: "Palm Springs",
      price: "$525 for 2 nights",
      rating: "4.86",
      isGuestFavorite: true,
    },
    {
      id: "23",
      image: "https://ext.same-assets.com/1951721302/453168885.jpeg",
      title: "Poolside villa",
      location: "Palm Springs",
      price: "$695 for 2 nights",
      rating: "4.92",
      isGuestFavorite: true,
    },
    {
      id: "24",
      image: "https://ext.same-assets.com/1951721302/561518707.jpeg",
      title: "Mid-century modern home",
      location: "Palm Springs",
      price: "$380 for 2 nights",
      rating: "4.88",
      isGuestFavorite: false,
    },
  ];

  const bigBearProperties = [
    {
      id: "25",
      image: "https://ext.same-assets.com/1951721302/3085148771.jpeg",
      title: "Cabin in Big Bear Lake",
      location: "Big Bear Lake",
      price: "$539 for 2 nights",
      rating: "4.94",
      isGuestFavorite: true,
    },
    {
      id: "26",
      image: "https://ext.same-assets.com/1951721302/3273946950.jpeg",
      title: "Cabin in Big Bear Lake",
      location: "Big Bear Lake",
      price: "$388 for 2 nights",
      rating: "4.95",
      isGuestFavorite: true,
    },
    {
      id: "27",
      image: "https://ext.same-assets.com/1951721302/2937271557.jpeg",
      title: "Cabin in Big Bear Lake",
      location: "Big Bear Lake",
      price: "$609 for 2 nights",
      rating: "4.98",
      isGuestFavorite: true,
    },
    {
      id: "28",
      image: "https://ext.same-assets.com/1951721302/1503700450.jpeg",
      title: "Cabin in Big Bear Lake",
      location: "Big Bear Lake",
      price: "$510 for 2 nights",
      rating: "4.95",
      isGuestFavorite: true,
    },
    {
      id: "29",
      image: "https://ext.same-assets.com/1951721302/1581996190.jpeg",
      title: "Cabin in Big Bear Lake",
      location: "Big Bear Lake",
      price: "$562 for 2 nights",
      rating: "4.87",
      isGuestFavorite: true,
    },
    {
      id: "30",
      image: "https://ext.same-assets.com/1951721302/2912848744.jpeg",
      title: "Lakefront cabin",
      location: "Big Bear Lake",
      price: "$650 for 2 nights",
      rating: "4.91",
      isGuestFavorite: true,
    },
    {
      id: "31",
      image: "https://ext.same-assets.com/1951721302/453168885.jpeg",
      title: "Mountain retreat",
      location: "Big Bear Lake",
      price: "$475 for 2 nights",
      rating: "4.89",
      isGuestFavorite: true,
    },
    {
      id: "32",
      image: "https://ext.same-assets.com/1951721302/561518707.jpeg",
      title: "Cozy cabin with spa",
      location: "Big Bear Lake",
      price: "$420 for 2 nights",
      rating: "4.83",
      isGuestFavorite: false,
    },
  ];

  const joshuaTreeProperties = [
    {
      id: "33",
      image: "https://ext.same-assets.com/1951721302/650769236.jpeg",
      title: "Cabin in Joshua Tree",
      location: "Joshua Tree",
      price: "$323 for 2 nights",
      rating: "4.98",
      isGuestFavorite: true,
    },
    {
      id: "34",
      image: "https://ext.same-assets.com/1951721302/4239552373.jpeg",
      title: "Home in Joshua Tree",
      location: "Joshua Tree",
      price: "$930 for 2 nights",
      rating: "4.95",
      isGuestFavorite: true,
    },
    {
      id: "35",
      image: "https://ext.same-assets.com/1951721302/3161745585.jpeg",
      title: "Tiny home in Joshua Tree",
      location: "Joshua Tree",
      price: "$716 for 2 nights",
      rating: "5.0",
      isGuestFavorite: true,
    },
    {
      id: "36",
      image: "https://ext.same-assets.com/1951721302/1639482830.jpeg",
      title: "Home in Joshua Tree",
      location: "Joshua Tree",
      price: "$1,171 for 2 nights",
      rating: "5.0",
      isGuestFavorite: true,
    },
    {
      id: "37",
      image: "https://ext.same-assets.com/1951721302/3845123833.jpeg",
      title: "Home in Joshua Tree",
      location: "Joshua Tree",
      price: "$863 for 2 nights",
      rating: "4.99",
      isGuestFavorite: true,
    },
    {
      id: "38",
      image: "https://ext.same-assets.com/1951721302/2912848744.jpeg",
      title: "Desert hideaway",
      location: "Joshua Tree",
      price: "$545 for 2 nights",
      rating: "4.94",
      isGuestFavorite: true,
    },
    {
      id: "39",
      image: "https://ext.same-assets.com/1951721302/453168885.jpeg",
      title: "Stargazing retreat",
      location: "Joshua Tree",
      price: "$680 for 2 nights",
      rating: "4.97",
      isGuestFavorite: true,
    },
    {
      id: "40",
      image: "https://ext.same-assets.com/1951721302/561518707.jpeg",
      title: "Rock climbing lodge",
      location: "Joshua Tree",
      price: "$395 for 2 nights",
      rating: "4.85",
      isGuestFavorite: false,
    },
  ];

  const ScrollableSection = ({
    title,
    properties,
    scrollRef,
  }: {
    title: string;
    properties: typeof losAngelesProperties;
    scrollRef: React.RefObject<HTMLDivElement>;
  }) => (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4 px-6 lg:px-0">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
          {title}
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 ml-2 text-gray-600" />
        </h2>
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => scroll(scrollRef, "left")}
            className="p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow bg-white"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={() => scroll(scrollRef, "right")}
            className="p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow bg-white"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide pb-4 lg:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="mx-auto max-w-7xl lg:px-8 py-6 md:py-12">
      <ScrollableSection
        title="Popular homes in Los Angeles"
        properties={losAngelesProperties}
        scrollRef={losAngelesRef}
      />

      <ScrollableSection
        title="Available in San Diego this weekend"
        properties={sanDiegoProperties}
        scrollRef={sanDiegoRef}
      />

      <ScrollableSection
        title="Stay in Palm Springs"
        properties={palmSpringsProperties}
        scrollRef={palmSpringsRef}
      />

      <ScrollableSection
        title="Available in Big Bear Lake this weekend"
        properties={bigBearProperties}
        scrollRef={bigBearRef}
      />

      <ScrollableSection
        title="Homes in Joshua Tree"
        properties={joshuaTreeProperties}
        scrollRef={joshuaTreeRef}
      />
    </div>
  );
}
