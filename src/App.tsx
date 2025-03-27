import "./App.css";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./sections/HeroSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";

function App() {
  return (
    <main className="space-y-28">
      <Navbar />
      <HeroSection />

      <WhyChooseUsSection />
    </main>
  );
}

export default App;
