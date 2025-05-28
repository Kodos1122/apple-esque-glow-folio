
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      gradient: "apple-gradient"
    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      gradient: "apple-gradient-green"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      gradient: "apple-gradient-orange"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating 
            exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer border-0 shadow-lg hover-lift overflow-hidden fade-in-up"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-apple-blue font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-2">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center fade-in">
          <Button 
            asChild 
            size="lg"
            className="apple-gradient text-white border-0 hover:opacity-90 transition-opacity"
          >
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
