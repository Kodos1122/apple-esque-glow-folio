
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Modern e-commerce platform with seamless user experience",
      gradient: "apple-gradient"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Intuitive mobile banking application design",
      gradient: "apple-gradient-green"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Complete brand identity for tech startup",
      gradient: "apple-gradient-orange"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      description: "Professional corporate website with CMS integration",
      gradient: "apple-gradient"
    },
    {
      id: 5,
      title: "Fitness App Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      description: "User-friendly fitness tracking application",
      gradient: "apple-gradient-green"
    },
    {
      id: 6,
      title: "Restaurant Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      description: "Complete branding package for upscale restaurant",
      gradient: "apple-gradient-orange"
    }
  ];

  const categories = ["All", "Web Development", "UI/UX Design", "Branding"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of projects that showcase my passion for creating exceptional digital experiences
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "apple-gradient text-white border-0"
                    : "border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer border-0 shadow-lg hover-lift overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        asChild
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Link to={`/project/${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-sm text-apple-blue font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
