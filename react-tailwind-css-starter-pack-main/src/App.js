import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";

import MissionSection from "./components/MissionSection";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <Hero />
      <MissionSection /> {/* Adding new section below HeroSection */}
      <Programs/>
       <Testimonials/>
       <Team/>
    </div>
  );
}

export default App;
