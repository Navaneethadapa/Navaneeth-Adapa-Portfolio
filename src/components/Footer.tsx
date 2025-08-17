import { Heart, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/navaneethsaiadapa/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Navaneethadapa', label: 'GitHub' },
    { icon: Code, href: 'https://leetcode.com/u/Navaneethadapa/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:adapanavaneethsai@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden animate-fade-in">
      {/* Enhanced Background Effects with Animated Emojis */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated Floating Emojis Background */}
        <div className="absolute top-10 left-10 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '0s' }}>💻</div>
        <div className="absolute top-20 right-20 text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🚀</div>
        <div className="absolute bottom-32 left-16 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🏎️💨</div>
        <div className="absolute bottom-20 right-32 text-3xl opacity-10 animate-bounce" style={{ animationDelay: '3s' }}>🎯</div>
        <div className="absolute top-1/2 left-1/4 text-2xl opacity-10 animate-float" style={{ animationDelay: '4s' }}>💸</div>
        <div className="absolute top-1/3 right-1/3 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '5s' }}>🔥</div>
        <div className="absolute bottom-1/2 left-20 text-3xl opacity-10 animate-bounce" style={{ animationDelay: '6s' }}>💡</div>
        <div className="absolute top-40 left-1/2 text-2xl opacity-10 animate-float" style={{ animationDelay: '7s' }}>🎨</div>
        <div className="absolute bottom-40 right-10 text-3xl opacity-10 animate-pulse" style={{ animationDelay: '8s' }}>🌟</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Navaneeth Sai Adapa
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI/ML Engineer, Web Developer & Designer passionate about creating 
                innovative solutions that bridge human creativity and machine intelligence.
              </p>
            </div>

            {/* Tech Stack Highlight */}
            <div>
              <p className="text-sm font-semibold text-primary mb-2">Currently Working On Developing AI Solutions:</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Python', 'PyTorch', 'AI'].map((tech) => (
                  <span key={tech} className="bg-muted/30 text-muted-foreground px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 mr-2 group-hover:animate-pulse"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-primary">Let's Connect</h4>
            <div className="space-y-6">
              <p className="text-muted-foreground text-sm">
                Open for opportunities and collaborations
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-fade-in"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <span>📧</span> adapanavaneethsai@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span> Hyderabad, India
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>🕒</span> Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-slide-up" style={{ animationDelay: '1s' }}>
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Navaneeth Sai Adapa. Crafted with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              + AI
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy</button>
            <button className="hover:text-primary transition-colors">Terms</button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Ultra Enhanced Animated Elements */}
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse hover:animate-bounce transition-all duration-300"></div>
        <div className="absolute top-4 right-4 w-1 h-1 bg-secondary rounded-full animate-pulse hover:animate-ping transition-all duration-300" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-accent rounded-full animate-pulse hover:animate-spin transition-all duration-300" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-0.5 h-0.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-8 left-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-16 right-1/3 w-0.5 h-0.5 bg-secondary rounded-full animate-bounce opacity-70" style={{ animationDelay: '5s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;