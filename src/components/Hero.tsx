import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/navaneeth-profile.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
const [displayedText, setDisplayedText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [showCursor, setShowCursor] = useState(true);

const roles = [
  'Web Developer & Designer',
  'AI/ML Engineer',
  'Systems Engineer',
  'Content Creator',
];

useEffect(() => {
  const fullText = roles[currentRole];
  let typingSpeed = isDeleting ? 50 : 100;

  const handleTyping = () => {
    setDisplayedText(prev =>
      isDeleting
        ? fullText.substring(0, prev.length - 1)
        : fullText.substring(0, prev.length + 1)
    );

    // Finished typing → pause → start deleting
    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    }
    // Finished deleting → move to next role
    else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRole(prev => (prev + 1) % roles.length);
    }
  };

  const timeout = setTimeout(handleTyping, typingSpeed);
  return () => clearTimeout(timeout);
}, [displayedText, isDeleting, currentRole]);

// Cursor blinking effect (keep this)
useEffect(() => {
  const cursorInterval = setInterval(() => {
    setShowCursor(prev => !prev);
  }, 650);
  return () => clearInterval(cursorInterval);
}, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-x-4">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary text-lg font-semibold">Hello, I'm</p>
              
              {/* Animated Name */}
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="inline-block animate-gradient-shift bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% whitespace-nowrap">
                  Navaneeth Sai Adapa
                </span>
              </h1>

              {/* Role Animation */}
              <div className="text-2xl lg:text-3xl text-muted-foreground">
                <span>I'm a </span>
                <div className="typing-container inline-block min-w-[350px]">
                  <span className="text-primary font-semibold">
                    {displayedText}
                    <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            ✨ I’m passionate about exploring how people and technology can work together to create something extraordinary. <br />
            💡 I love building AI solutions that feel practical yet imaginative, blending creativity with real-world impact. <br />
            🌍 Through modern web development and futuristic design, I aim to craft experiences that inspire and connect.
            </p>


            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass border border-primary/30 text-primary px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 neon-glow hover-lift">
                <img
                  src={profileImage}
                  alt="Navaneeth Sai Adapa"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;