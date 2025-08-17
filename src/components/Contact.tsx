import { useState } from 'react';
import { Mail, Github, Linkedin, Code, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/navaneethsaiadapa/',
      color: 'hover:text-blue-500',
      description: 'Professional Network'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Navaneethadapa',
      color: 'hover:text-white',
      description: 'Code Repository'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:adapanavaneethsai@gmail.com.com',
      color: 'hover:text-red-500',
      description: 'Direct Contact'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/Navaneethadapa/',
      color: 'hover:text-orange-500',
      description: 'Coding Challenges'
    }
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left h-full">
            {/* Get In Touch Section */}
            <div className="glass rounded-2xl p-6 mb-4 h-[260px] flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                I'm always open to exploring new opportunities, discussing innovative projects, and building impactful collaborations. If you're interested in learning more about my work or have ideas that align with what I do, I'd be glad to connect. Feel free to reach out anytime. I look forward to meaningful conversations and potential partnerships.
              </p>
            </div>

            {/* Contact Details */}
            <div className="glass rounded-2xl p-8 h-[280px] flex flex-col">
              <h4 className="text-lg font-semibold mb-6 text-primary">Contact Information</h4>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30">
                  <div className="text-primary bg-primary/10 p-2 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground text-sm">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30">
                  <div className="text-primary bg-primary/10 p-2 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground text-sm">adapanavaneethsai@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Send a Message
                </span>
              </h3>

              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                  Email Address
                </label>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:-translate-y-1 group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

              {/* Additional Info */}
              <p className="text-center text-muted-foreground text-sm">
                I'll get back to you within 24 hours!
              </p>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's an AI-powered solution, a stunning web application, or an innovative design project, 
              let's collaborate and bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              
              <Button asChild variant="outline" className="hover-glow">
              <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer">
                View My Resume
              </a>
              </Button>


              <Button asChild className="bg-gradient-primary text-primary-foreground hover-glow">
              <a
                href="https://calendly.com/adapanavaneethsai/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;