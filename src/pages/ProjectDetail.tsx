
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mock project data - in a real app, this would come from an API
  const project = {
    id: parseInt(id || "1"),
    title: "E-Commerce Platform",
    category: "Web Development",
    client: "TechStart Inc.",
    duration: "3 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    description: "A comprehensive e-commerce platform designed to provide seamless shopping experiences for modern consumers. The project involved creating a user-friendly interface, implementing secure payment processing, and developing a robust content management system.",
    challenge: "The main challenge was creating a platform that could handle high traffic volumes while maintaining fast load times and providing an intuitive user experience across all devices.",
    solution: "We implemented a responsive design with optimized performance, integrated multiple payment gateways, and created a scalable architecture that can grow with the business needs.",
    tools: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 fade-in">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/portfolio">← Back to Portfolio</Link>
            </Button>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <span className="text-apple-blue font-medium">{project.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Duration</h3>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Year</h3>
                  <p className="text-muted-foreground">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-apple-gray-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Tools & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              The technology stack that powered this project
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 fade-in-up">
            {project.tools.map((tool, index) => (
              <Card key={tool} className="border-0 shadow-lg">
                <CardContent className="px-6 py-3">
                  <span className="font-medium text-foreground">{tool}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-4 bg-apple-gray-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Project Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Additional visuals from the project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and bring your vision to life.
          </p>
          <Button 
            asChild 
            size="lg"
            className="apple-gradient text-white border-0 hover:opacity-90 transition-opacity"
          >
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
