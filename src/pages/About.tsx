
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: "Expert", icon: "🎨" },
    { name: "Web Development", level: "Advanced", icon: "💻" },
    { name: "Mobile Design", level: "Advanced", icon: "📱" },
    { name: "Branding", level: "Intermediate", icon: "🎯" },
    { name: "Photography", level: "Intermediate", icon: "📸" },
    { name: "Video Editing", level: "Beginner", icon: "🎬" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A passionate creative professional dedicated to crafting exceptional digital experiences
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-apple-gray-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                My Journey
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a creative professional with over 5 years of experience in digital design and development. 
                My journey began with a passion for creating beautiful, functional designs that solve real problems 
                and connect with people on an emotional level.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Throughout my career, I've had the privilege of working with startups, established companies, 
                and individual entrepreneurs, helping them bring their visions to life through thoughtful design 
                and strategic thinking.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not designing or coding, you can find me exploring new technologies, reading design blogs, 
                or capturing moments through photography. I believe that continuous learning and curiosity are 
                essential for staying innovative in this ever-evolving field.
              </p>
              
              <Button className="apple-gradient text-white border-0 hover:opacity-90 transition-opacity">
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              A diverse skill set honed through years of practice and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="border-0 shadow-lg hover-lift glass-effect fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {skill.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-apple-blue/10 text-apple-blue rounded-full text-sm font-medium">
                    {skill.level}
                  </span>
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

export default About;
