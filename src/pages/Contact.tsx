
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
      icon: "✉️"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      icon: "📞"
    },
    {
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
      icon: "📍"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-32"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full apple-gradient text-white border-0 hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to chat about ideas, 
                I'm always excited to connect with fellow creatives and potential collaborators.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title} 
                    className="border-0 shadow-lg hover-lift"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.link}
                        className="flex items-center group"
                      >
                        <div className="text-2xl mr-4">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-apple-blue transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-apple-gray-light/50 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 px-4 bg-apple-gray-light/30">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Based in San Francisco
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Available for remote work worldwide and local meetings in the Bay Area.
          </p>
          
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
