import "./App.css";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./sections/HeroSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import Service from "./sections/Service";
import HowItWorks from "./sections/HowItWorks";
import SupportedCoins from "./sections/SupportedCoins";

function App() {
  return (
    <main className="space-y-28">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <Service />
      <HowItWorks />
      <SupportedCoins />
    </main>
  );
}

export default App;
