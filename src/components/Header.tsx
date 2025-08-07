"use client";

import {
  Globe,
  Menu,
  User,
  Search,
  Heart,
  UserCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// --- Icons --- //
const HomeIcon = () => (
  <svg width="25" height="25" viewBox="0 0 28 28" fill="none" className="h-8 w-8">
    <path d="M14 3L4 11.5V24H11V17H17V24H24V11.5L14 3Z" stroke="#717171" strokeWidth="2" fill="none" />
    <path d="M2 26H26" stroke="#717171" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 26C5 26 5.5 25 6 24.5C6.5 24 7 24 7 24" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 26C9 26 9.5 25 10 24.5C10.5 24 11 24 11 24" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 26C17 26 17.5 25 18 24.5C18.5 24 19 24 19 24" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 26C21 26 21.5 25 22 24.5C22.5 24 23 24 23 24" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExperienceIcon = () => (
  <svg width="25" height="25" viewBox="0 0 28 28" fill="none" className="h-8 w-8">
    <path d="M14 2C10 2 7 5.5 7 10C7 14.5 10 18 14 18C18 18 21 14.5 21 10C21 5.5 18 2 14 2Z" stroke="#717171" strokeWidth="2" fill="none" />
    <path d="M10 10C10 10 10.5 8 14 8C17.5 8 18 10 18 10" stroke="#717171" strokeWidth="1.5" />
    <path d="M10 13C10 13 10.5 15 14 15C17.5 15 18 13 18 13" stroke="#717171" strokeWidth="1.5" />
    <rect x="12" y="18" width="4" height="3" stroke="#717171" strokeWidth="1.5" fill="none" />
    <path d="M11 21H17L16 24H12L11 21Z" stroke="#717171" strokeWidth="1.5" fill="none" />
    <path d="M10 24H18" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ServicesIcon = () => (
  <svg width="25" height="25" viewBox="0 0 28 28" fill="none"className="h-8 w-8">
    <path d="M14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4" stroke="#717171" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 4V6" stroke="#717171" strokeWidth="2" />
    <path d="M6 20H26C26 20 26 12 21 8C18.5 6 16 6 16 6H14C14 6 11.5 6 9 8C4 12 4 20 4 20H6Z" stroke="#717171" strokeWidth="2" fill="none" />
    <path d="M4 22H26" stroke="#717171" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="5" r="1" fill="#717171" />
  </svg>
);

// --- Component --- //
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- MOBILE HEADER --- */}
      <header className="bg-white relative z-10 block md:hidden">
        <div className="px-6 py-4">
          {/* Search Bar */}
          <div className="bg-white rounded-full border border-gray-300 shadow-md mb-6">
            <div className="flex items-center px-6 py-4">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-gray-600 font-medium">Start your search</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-between px-4">
            <div className="flex flex-col items-center cursor-pointer">
              <div className="mb-1"><HomeIcon /></div>
              <span className="text-xs font-medium text-gray-700">Homes</span>
            </div>

            <div className="flex flex-col items-center cursor-pointer relative">
              <div className="mb-1 relative">
                <ExperienceIcon />
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
              </div>
              <span className="text-xs font-medium text-gray-700">Experiences</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-black rounded-full"></div>
            </div>

            <div className="flex flex-col items-center cursor-pointer relative">
              <div className="mb-1 relative">
                <ServicesIcon />
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
              </div>
              <span className="text-xs font-medium text-gray-700">Services</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE BOTTOM NAV --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 block md:hidden">
        <div className="flex items-center justify-around py-2">
          <div className="flex flex-col items-center cursor-pointer p-2">
            <Search className="h-5 w-5 text-[#FF385C] mb-1" />
            <span className="text-xs font-medium text-[#FF385C]">Explore</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer p-2">
            <Heart className="h-5 w-5 text-gray-500 mb-1" />
            <span className="text-xs text-gray-500">Wishlists</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer p-2">
            <UserCircle className="h-5 w-5 text-gray-500 mb-1" />
            <span className="text-xs text-gray-500">Log in</span>
          </div>
        </div>
      </div>

      {/* --- DESKTOP HEADER --- */}
      <header className="hidden md:block">
        <div className="mx-2 px-6 lg:px-8 relative">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image src="/airbnb_logo.png" alt="Airbnb" width={102} height={32} className="h-16 w-auto" />
            </div>

            {/* Center Nav */}
            <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-6">
              {/* Homes */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="group-hover:scale-105 transition-transform"><HomeIcon /></div>
                <span className="text-[16px] font-medium text-gray-700 group-hover:text-gray-900">Homes</span>
              </div>

              {/* Experiences */}
              <div className="flex items-center space-x-2 cursor-pointer group relative">
                <div className="relative group-hover:scale-105 transition-transform">
                  <ExperienceIcon />
                  <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                </div>
                <span className="text-[16px] font-medium text-gray-700 group-hover:text-gray-900">Experiences</span>
              </div>

              {/* Services */}
              <div className="flex items-center space-x-2 cursor-pointer group relative">
                <div className="relative group-hover:scale-105 transition-transform">
                  <ServicesIcon />
                  <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                </div>
                <span className="text-[16px] font-medium text-gray-700 group-hover:text-gray-900">Services</span>
              </div>
            </nav>

            {/* Right: User Options */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:bg-gray-50 font-medium text-[16px] px-3 py-2 rounded-full hidden md:block">Become a Host</button>
              <button className="p-3 hover:bg-gray-50 rounded-full bg-gray-100">
                <Globe className="h-5 w-5 text-gray-700" />
              </button>
              <div className="flex items-center border border-gray-300 rounded-full py-2 px-3 hover:shadow-md bg-gray-100 transition-shadow cursor-pointer">
                <Menu className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STICKY COMPACT DESKTOP HEADER --- */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 hidden md:block ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-2 px-6 lg:px-8 relative">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image src="/airbnb_logo.png" alt="Airbnb" width={102} height={32} className="h-16 w-auto" />
            </div>

            {/* Compact Search */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center cursor-pointer">
              <div className="flex items-center px-6 py-2">🏠 <span className="ml-2 text-[16px] font-semibold text-gray-800">Anywhere</span></div>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <div className="flex items-center px-6 py-2"><span className="text-[16px] font-semibold text-gray-800">Anytime</span></div>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <div className="flex items-center px-6 py-2 pr-2">
                <span className="text-[16px] font-semibold text-gray-800">Add guests</span>
                <button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white p-2 rounded-full transition-colors ml-4">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:bg-gray-50 font-medium text-[16px] px-3 py-2 rounded-full hidden md:block">Become a Host</button>
              <button className="p-3 hover:bg-gray-50 rounded-full bg-gray-100">
                <Globe className="h-5 w-5 text-gray-700" />
              </button>
              <div className="flex items-center border border-gray-300 rounded-full py-2 px-3 hover:shadow-md bg-gray-100 transition-shadow cursor-pointer">
                <Menu className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
