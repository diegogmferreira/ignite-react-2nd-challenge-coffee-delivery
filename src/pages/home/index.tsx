import { CoffeeList } from "./components/coffee-list/index.";
import { HeroSection } from "./components/hero-section";


export function Home() {
  return (
    <div>
      <HeroSection />
      <CoffeeList/>
    </div>
  )
}