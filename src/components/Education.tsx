import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Trophy, BookOpen, Star, Award } from 'lucide-react';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      institution: 'Vishnu Institute of Technology, Bhimavaram',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2020 – 2024',
      cgpa: '8.11',
      type: 'Graduation',
      logo: '🎓',
      highlights: [
        'Strong foundation in Computer Science fundamentals',
        'Specialized in AI/ML and Software Engineering',
        'Active in coding competitions and tech events',
        'Leadership roles in technical societies'
      ],
      subjects: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering'],
      color: 'primary'
    },
    {
      institution: 'Pragati Junior College, Kakinada',
      degree: 'Intermediate',
      period: '2018 – 2020',
      cgpa: '9.29',
      type: 'Intermediate',
      logo: '📚',
      highlights: [
        'Excellent academic performance with distinction',
        'Strong foundation in Mathematics and Physics',
        'Developed logical thinking and problem-solving skills',
        'Participated in science exhibitions and competitions'
      ],
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
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
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educational foundation that shaped my technical expertise and passion for innovation
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          {education.map((edu, index) => (
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
                  ? `bg-${edu.color} border-${edu.color} shadow-lg shadow-${edu.color}/50 animate-pulse` 
                  : 'bg-muted border-muted'
              }`}></div>

              {/* Content Card */}
              <div className={`w-5/12 ${
                visibleItems.includes(index) 
                  ? 'animate-fade-in' 
                  : index % 2 === 0 
                    ? 'translate-x-20 opacity-0' 
                    : '-translate-x-20 opacity-0'
              } transition-all duration-700`} style={{ animationDelay: `${index * 0.3}s` }}>
                
                <div className="glass rounded-2xl p-8 hover-lift neon-glow-subtle group cursor-pointer">
                  {/* Institution Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl group-hover:animate-bounce transition-transform duration-300">
                        {edu.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <div className={`bg-${edu.color}/20 rounded-full p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Trophy size={24} className={`text-${edu.color}`} />
                    </div>
                  </div>

                  {/* Academic Details */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Period */}
                    <div className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg">
                      <Calendar size={18} className="text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">{edu.period}</span>
                    </div>

                    {/* CGPA with Stars */}
                    <div className={`flex items-center justify-between p-3 bg-${edu.color}/10 rounded-lg border border-${edu.color}/20`}>
                      <div>
                        <p className="text-xs text-muted-foreground">CGPA</p>
                        <p className={`text-lg font-bold text-${edu.color}`}>{edu.cgpa}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(parseFloat(edu.cgpa)) 
                                ? `fill-${edu.color} text-${edu.color}` 
                                : 'text-muted-foreground'
                            } transition-all duration-300`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                      <Award size={16} className="mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className={`w-1.5 h-1.5 bg-${edu.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Subjects */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Core Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-${edu.color}/10 text-${edu.color} rounded-full text-xs border border-${edu.color}/20 hover:bg-${edu.color}/20 transition-all duration-300`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Neon Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${edu.color}/5 via-transparent to-${edu.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Floating Education Elements */}
        <div className="absolute top-1/4 right-10 opacity-5 animate-float">
          <GraduationCap size={100} className="text-primary" />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-5 animate-float" style={{ animationDelay: '1s' }}>
          <BookOpen size={80} className="text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Education;