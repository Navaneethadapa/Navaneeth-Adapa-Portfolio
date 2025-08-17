import { useState, useEffect, useRef } from 'react';
import { Building2, Calendar, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const WorkExperience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: 'Cognizant Technology Solutions',
      role: 'Programmer Analyst',
      period: 'Jul 2024 – Present',
      logo: '🏢',
      highlights: [
        'Managed lifecycle of 100+ applications, deployed to 10,000+ endpoints with Intune',
        'Built 5 real-time dashboards for project metrics',
        'Automated packaging tasks with 50+ PowerShell scripts (30% efficiency gain)',
        'Resolved 200+ L3 incidents, authored 50+ KB articles (25% team efficiency boost)',
        'Ensured 98% UAT success through QA & security collaboration'
      ],
      skills: ['PowerShell', 'Intune', 'QA Testing', 'Incident Management', 'Dashboard Development'],
      color: 'primary'
    },
    {
      company: 'Outlier AI',
      role: 'Freelance AI Trainer',
      period: 'Dec 2024 – Present',
      logo: '🤖',
      highlights: [
        'Refined 5,000+ prompt-response pairs (+20% accuracy)',
        'Reviewed & improved AI-generated content (+30% clarity & correctness)',
        'Peer review workflows improved model safety by 15%'
      ],
      skills: ['AI Training', 'Prompt Engineering', 'Content Review', 'Model Safety', 'Quality Assurance'],
      color: 'secondary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Where I've Worked
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey shaping innovative solutions and driving technological excellence
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              data-index={index}
            >
              {/* Timeline Node */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? `bg-${exp.color} border-${exp.color} shadow-lg shadow-${exp.color}/50 animate-pulse` 
                  : 'bg-muted border-muted'
              }`}></div>

              {/* Content Card */}
              <div className={`w-5/12 ${
                visibleItems.includes(index) ? 'animate-fade-in hover-lift' : 'opacity-0'
              }`} style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="glass rounded-xl p-8 neon-glow-subtle">
                  {/* Company Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{exp.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.role}</p>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle size={16} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                      <Award size={16} className="mr-2" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-xs hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for other side */}
              <div className="w-5/12"></div>
            </div>
          ))}

          {/* Timeline End Node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: Building2, label: 'Companies', value: '2+', color: 'primary' },
            { icon: Users, label: 'Applications Managed', value: '100+', color: 'secondary' },
            { icon: TrendingUp, label: 'Efficiency Gained', value: '30%', color: 'accent' },
            { icon: Award, label: 'Success Rate', value: '98%', color: 'primary' }
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center hover-lift">
              <stat.icon size={32} className={`text-${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;