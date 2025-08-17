import { useState } from 'react';
import { ExternalLink, Github, Play, Zap, Brain, Code, Palette, Sparkles } from 'lucide-react';

// Import AI-generated project images
import aiPortfolioTemplate from '@/assets/ai-portfolio-template.jpg';
import aiChatbotInterface from '@/assets/ai-chatbot-interface.jpg';
import aiEcommerceDashboard from '@/assets/ai-ecommerce-dashboard.jpg';
import aiLandingPage from '@/assets/ai-landing-page.jpg';
import aiTaskManagement from '@/assets/ai-task-management.jpg';
import aiAgencyWebsite from '@/assets/ai-agency-website.jpg';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('all'); // Force cache refresh

  const resumeProjects = [
    {
      title: 'NeuroNest: AI-Powered Second Brain',
      description: 'An intelligent knowledge management system that uses GPT-3.5 to organize and retrieve information contextually.',
      tech: ['Next.js', 'Framer Motion', 'GPT-3.5', 'TypeScript', 'Tailwind CSS'],
      category: 'AI/ML',
      icon: Brain,
      features: ['AI-powered content organization', 'Smart search and retrieval', 'Interactive UI with animations'],
      image: '🧠',
      isAI: false
    },
    {
      title: 'Real-Time Object Recognition & Voice-Guided Navigation',
      description: 'Computer vision system with voice guidance for real-time object detection and spatial navigation.',
      tech: ['Python', 'PyTorch', 'Hugging Face', 'OpenCV', 'Speech Recognition'],
      category: 'AI/ML',
      icon: Brain,
      features: ['Real-time object detection', 'Voice-guided navigation', 'Custom AI model training'],
      image: '👁️',
      isAI: false
    },
    {
      title: 'Legal Document Generation with Llama-2',
      description: 'NLP system optimized with PEFT techniques for automated legal document generation and analysis.',
      tech: ['Python', 'Llama-2', 'PEFT', 'Django', 'NLP', 'Transformers'],
      category: 'AI/ML',
      icon: Brain,
      features: ['Document generation', 'Legal text analysis', 'Parameter-efficient fine-tuning'],
      image: '⚖️',
      isAI: false
    }
  ];

  // AI-Generated Projects using Prompt Engineering
  const aiGeneratedProjects = [
    {
      title: 'Futuristic Portfolio Template',
      description: 'A stunning portfolio template with glassmorphism design, holographic elements, and smooth animations crafted entirely using AI prompt engineering.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'AI Design'],
      category: 'AI Design',
      projectType: 'Design',
      icon: Sparkles,
      features: ['AI-generated visuals', 'Holographic UI elements', 'Glassmorphism effects', 'Responsive animations'],
      image: aiPortfolioTemplate,
      isAI: true
    },
    {
      title: 'AI Chatbot Interface',
      description: 'Modern chatbot UI with sleek design patterns and futuristic elements, completely generated through advanced prompt engineering techniques.',
      tech: ['React', 'TypeScript', 'AI Design', 'CSS Animations'],
      category: 'AI Design',
      projectType: 'Frontend',
      icon: Sparkles,
      features: ['AI-crafted interface', 'Modern chat bubbles', 'Gradient backgrounds', 'Typing indicators'],
      image: aiChatbotInterface,
      isAI: true
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Comprehensive admin dashboard with analytics and management tools, designed using AI-powered prompt engineering for optimal UX.',
      tech: ['Next.js', 'Tailwind CSS', 'AI Design', 'Data Visualization'],
      category: 'AI Design',
      projectType: 'Frontend',
      icon: Sparkles,
      features: ['AI-generated layouts', 'Analytics visualizations', 'Glass panels', 'Professional interface'],
      image: aiEcommerceDashboard,
      isAI: true
    },
    {
      title: 'Multi-Theme Landing Page',
      description: 'Responsive landing page showcasing multiple color schemes and themes, entirely conceptualized and designed through AI prompt engineering.',
      tech: ['React', 'Tailwind CSS', 'AI Design', 'Theme System'],
      category: 'AI Design',
      projectType: 'Design',
      icon: Sparkles,
      features: ['AI-designed themes', 'Color variations', 'Responsive layouts', 'Modern typography'],
      image: aiLandingPage,
      isAI: true
    },
    {
      title: 'Task Management App',
      description: 'Modern productivity application with kanban boards and task organization, designed using AI to create the perfect user experience.',
      tech: ['React', 'TypeScript', 'AI Design', 'UX/UI'],
      category: 'AI Design',
      projectType: 'Frontend',
      icon: Sparkles,
      features: ['AI-optimized UX', 'Kanban interface', 'Progress tracking', 'Minimalist design'],
      image: aiTaskManagement,
      isAI: true
    },
    {
      title: 'Creative Agency Website',
      description: 'Stunning agency website with artistic elements and creative layouts, showcasing the power of AI in modern web design and creativity.',
      tech: ['Next.js', 'Framer Motion', 'AI Design', 'Creative Direction'],
      category: 'AI Design',
      projectType: 'Design',
      icon: Sparkles,
      features: ['AI-driven creativity', 'Artistic layouts', 'Vibrant gradients', 'Professional branding'],
      image: aiAgencyWebsite,
      isAI: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'bg-primary/10 text-primary border-primary/30',
      'AI Design': 'bg-neon-purple/10 text-neon-purple border-neon-purple/30',
      'Frontend': 'bg-secondary/10 text-secondary border-secondary/30',
      'Design': 'bg-accent/10 text-accent border-accent/30'
    };
    return colors[category as keyof typeof colors] || colors['Frontend'];
  };

  const renderProjectCard = (project: any, index: number) => (
    <div
      key={index}
      className="group glass rounded-xl overflow-hidden hover-lift transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
        {project.isAI ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="text-6xl">{project.image}</div>
        )}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        {project.isAI && (
          <div className="absolute top-3 right-3 bg-neon-purple/20 backdrop-blur-sm px-2 py-1 rounded-full">
            <Sparkles size={16} className="text-neon-purple" />
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
            {project.isAI && project.projectType && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.projectType)}`}>
                {project.projectType}
              </span>
            )}
          </div>
          <project.icon size={20} className="text-primary" />
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="text-xs text-muted-foreground flex items-center">
                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className={`px-2 py-1 rounded text-xs ${
                tech === 'AI Design' 
                  ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' 
                  : 'bg-muted/50 text-muted-foreground'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Github size={16} />
            <span className="text-sm">Code</span>
          </button>
          
          <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Play size={16} />
            <span className="text-sm">Demo</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects & Creations
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered solutions to AI-generated designs, showcasing technical expertise and creative innovation
          </p>
        </div>

        {/* Resume Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-primary">Core AI/ML Projects</span>
            </h3>
            <p className="text-muted-foreground">Production-ready applications showcasing advanced AI/ML capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* AI-Generated Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"></div>
            </div>
            <div className="relative bg-background px-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                  ✨ Crafted using AI
                </span>
              </h3>
              <p className="text-muted-foreground">Stunning designs and interfaces created through advanced prompt engineering</p>
              <div className="flex items-center justify-center mt-4 space-x-2">
                <Sparkles size={16} className="text-neon-purple animate-pulse" />
                <span className="text-sm text-neon-purple font-medium">Powered by AI Prompt Engineering</span>
                <Sparkles size={16} className="text-neon-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiGeneratedProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:-translate-y-1">
            Explore GitHub Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;