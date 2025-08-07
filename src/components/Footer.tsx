"use client"

import { useState } from "react"

export default function Footer() {
  const [activeTab, setActiveTab] = useState("unique-stays")

  const destinations = [
    { name: "Amsterdam", type: "Cottage rentals" },
    { name: "Memphis", type: "Condo rentals" },
    { name: "Charlotte", type: "Cabin rentals" },
    { name: "Dallas", type: "Monthly Rentals" },
    { name: "Detroit", type: "Monthly Rentals" },
    { name: "Albuquerque", type: "Monthly Rentals" },
    { name: "Gulf Shores", type: "Condo rentals" },
    { name: "Niagara Falls", type: "Vacation rentals" },
    { name: "North Myrtle Beach", type: "Vacation rentals" },
    { name: "Portland", type: "Vacation rentals" },
    { name: "Nice", type: "Villa rentals" },
    { name: "Brooklyn", type: "Monthly Rentals" },
    { name: "St. Petersburg", type: "Cottage rentals" },
    { name: "Montreal", type: "Condo rentals" },
    { name: "Lake Michigan", type: "House rentals" },
    { name: "Barcelona", type: "Apartment rentals" },
    { name: "Mount Pocono", type: "Monthly Rentals" },
    { name: "Philadelphia", type: "Monthly Rentals" },
    { name: "Orange Beach", type: "Monthly Rentals" },
    { name: "Kauai County", type: "Monthly Rentals" },
    { name: "San Diego", type: "Condo rentals" },
    { name: "Traverse City", type: "Cabin rentals" },
    { name: "West Palm Beach", type: "Monthly Rentals" },
    { name: "Cleveland", type: "Monthly Rentals" },
    { name: "Richmond City", type: "Monthly Rentals" },
    { name: "Maui", type: "Monthly Rentals" },
    { name: "Wilmington", type: "Villa rentals" },
    { name: "Key West", type: "Villa rentals" },
    { name: "Oahu", type: "Condo rentals" },
    { name: "Ocean City", type: "House rentals" },
    { name: "Milan", type: "Villa rentals" },
    { name: "Washington", type: "Vacation rentals" },
    { name: "San Juan", type: "House rentals" },
    { name: "Charleston", type: "Monthly Rentals" },
    { name: "Branson", type: "House rentals" },
    { name: "Destin", type: "Apartment rentals" },
    { name: "Raleigh", type: "Condo rentals" },
    { name: "Savannah", type: "Cottage rentals" },
    { name: "Manhattan", type: "Condo rentals" },
    { name: "Kansas City", type: "Vacation rentals" },
    { name: "Fort Lauderdale", type: "Villa rentals" },
    { name: "Cincinnati", type: "Vacation rentals" },
    { name: "Medellín", type: "Vacation rentals" },
    { name: "Dublin", type: "Vacation rentals" },
    { name: "Nashville", type: "Vacation rentals" },
    { name: "Chicago", type: "Vacation rentals" },
    { name: "Santa Barbara", type: "Cottage rentals" },
    { name: "St. Louis", type: "Monthly Rentals" }
  ]

  const uniqueStays = [
    { name: "Cabins", location: "United States" },
    { name: "Treehouses", location: "United States" },
    { name: "Tiny Houses", location: "United States" },
    { name: "Beach Houses", location: "United States" },
    { name: "Lakehouses", location: "United States" },
    { name: "Yurt Rentals", location: "United States" },
    { name: "Yurt Rentals", location: "United Kingdom" },
    { name: "Castle Rentals", location: "United States" },
    { name: "Houseboats", location: "United States" },
    { name: "Holiday Caravans", location: "United Kingdom" },
    { name: "Private Island Rentals", location: "United States" },
    { name: "Farm Houses", location: "United States" },
    { name: "Farm Cottages", location: "United Kingdom" },
    { name: "Cabin Rentals", location: "Australia" },
    { name: "Luxury Cabins", location: "United Kingdom" },
    { name: "Luxury Cabins", location: "United States" },
    { name: "Holiday Chalets", location: "United Kingdom" }
  ]

  const chunkedDestinations = []
  for (let i = 0; i < destinations.length; i += 12) {
    chunkedDestinations.push(destinations.slice(i, i + 12))
  }

  const chunkedUniqueStays = []
  for (let i = 0; i < uniqueStays.length; i += 6) {
    chunkedUniqueStays.push(uniqueStays.slice(i, i + 6))
  }

  const supportLinks = [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern"
  ]

  const hostingLinks = [
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Join a free Hosting class"
  ]

  const airbnbLinks = [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnb.org emergency stays"
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Inspiration for future getaways
        </h3>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("unique-stays")}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "unique-stays"
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Unique stays
            </button>
            <button
              onClick={() => setActiveTab("travel-tips")}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "travel-tips"
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Travel tips & inspiration
            </button>
            <button
              onClick={() => setActiveTab("apartments")}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "apartments"
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              Airbnb-friendly apartments
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "unique-stays" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chunkedUniqueStays.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-3">
                  {column.map((stay, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-medium text-sm group-hover:underline cursor-pointer">
                          {stay.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {stay.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === "travel-tips" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chunkedDestinations.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-3">
                  {column.map((destination, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-medium text-sm group-hover:underline cursor-pointer">
                          {destination.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {destination.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === "apartments" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chunkedDestinations.slice(0, 2).map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-3">
                  {column.map((destination, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-medium text-sm group-hover:underline cursor-pointer">
                          {destination.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          Apartment-friendly
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hosting */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Hosting</h4>
              <ul className="space-y-3">
                {hostingLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Airbnb */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Airbnb</h4>
              <ul className="space-y-3">
                {airbnbLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
              <div>
                © 2025 Airbnb, Inc. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <span className="hover:underline cursor-pointer">Privacy</span>
                <span className="hover:underline cursor-pointer">Terms</span>
                <span className="hover:underline cursor-pointer">Sitemap</span>
                <span className="hover:underline cursor-pointer">Company details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
