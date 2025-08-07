import Header from "@/components/Header"
import SearchSection from "@/components/SearchSection"
import PropertySections from "@/components/PropertySections"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20 md:pb-0">
        <SearchSection />
        <PropertySections />
      </main>
      <Footer />
    </div>
  )
}
