import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";



function App  () {
  return (
   <>
     <Navbar />
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <div id="hero" className="scroll-section">
  <HeroSection />
</div>

<div id="feature" className="scroll-section">
  <FeatureSection />
</div>

<div id="workflow" className="scroll-section">
  <Workflow />
</div>

<div id="pricing" className="scroll-section">
  <Pricing />
</div>

<div id="testimonials" className="scroll-section">
  <Testimonials />
</div>

<div id="footer" className="scroll-section">
  <Footer />
</div>


     </div>
    </>
    
     
  );
};

export default App;
