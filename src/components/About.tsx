import { Brain, Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Innovation',
      description: 'Specializing in Generative AI, NLP, and Computer Vision'
    },
    {
      icon: Code,
      title: 'Systems Engineering',
      description: 'Building scalable systems with cloud technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: Rocket,
      title: 'Tech Leadership',
      description: 'Staying ahead of cutting-edge technology trends'
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Who Am I?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Navaneeth Sai Adapa</span>, 
                a Computer Science Engineer from Andhra Pradesh with an insatiable passion for 
                technology and innovation.
              </p>
              
              <p>
                My journey spans across <span className="text-secondary font-semibold">Artificial Intelligence</span>, 
                <span className="text-accent font-semibold"> Generative AI</span>, and 
                <span className="text-primary font-semibold"> UI/UX Design</span>. I thrive at the 
                intersection where human creativity meets machine intelligence.
              </p>
              
              <p>
                My ambition is to build innovative AI-powered solutions that not only solve complex 
                problems but also enhance human potential. I'm particularly excited about 
                <span className="text-primary font-semibold"> Prompt Engineering</span> and 
                the future of human-AI collaboration.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Building AI solutions that make a real impact</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Creating seamless user experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Staying at the forefront of technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous learning and innovation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover-lift hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '25+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies' },
            { number: '∞', label: 'Learning Never Stops' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;