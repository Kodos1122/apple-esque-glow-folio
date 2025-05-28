
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <PortfolioPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
