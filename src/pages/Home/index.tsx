import { homeItems } from "@/constants/home/home-items"
import BackgroundHome from "@/components/Home/BackgroundHome/BackgroundHome"
import HomeCard from "@/components/Home/HomeCard/HomeCard"
import HeroSection from "@/components/Home/HeroSection/HeroSection"

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      <BackgroundHome />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20">
        <HeroSection
         />

        <div className="mt-20 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          {homeItems.map((item) => (
            <HomeCard
              key={item.title}
              homeItem={item}
            />
          ))}
        </div>
        
      </div>
    </main>
  )
}

export default HomePage