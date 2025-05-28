
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-24 px-4 bg-apple-gray-light/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-lift"
            />
          </div>
          
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hi, I'm a passionate
              <span className="block bg-gradient-to-r from-apple-green to-apple-blue bg-clip-text text-transparent">
                Creative Professional
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in digital design and development, 
              I specialize in creating beautiful, functional, and user-centered 
              digital experiences that make a lasting impact.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe in the power of good design to solve problems, tell stories, 
              and connect people. Every project is an opportunity to push boundaries 
              and create something extraordinary.
            </p>
            
            <Button 
              asChild 
              className="apple-gradient-green text-white border-0 hover:opacity-90 transition-opacity"
            >
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
