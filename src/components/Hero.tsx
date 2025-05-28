
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 apple-gradient opacity-5" />
      
      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Creative
          <span className="block bg-gradient-to-r from-apple-blue to-apple-purple bg-clip-text text-transparent">
            Professional
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences through innovative design, 
          thoughtful development, and creative problem-solving.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="apple-gradient text-white border-0 hover:opacity-90 transition-opacity text-lg px-8 py-3"
          >
            <Link to="/portfolio">View My Work</Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white transition-all text-lg px-8 py-3"
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-apple-blue/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-apple-purple/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
