import { useState } from 'react';
import { Music, Tv, Palette, Headphones, Eye, Brush, Play, Star, Heart } from 'lucide-react';

const Hobbies = () => {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);
  const [clickedHobby, setClickedHobby] = useState<number | null>(null);

  const hobbies = [
    {
      title: 'Listening to Songs',
      icon: Music,
      description: 'Music fuels my creativity and helps me focus during coding sessions.',
      visual: '🎵',
      details: [
        'Electronic & Synthwave',
        'Lo-fi Hip Hop',
        'Classical for Focus',
        'Spotify Playlists'
      ],
      bgGradient: 'from-primary/20 to-secondary/20',
      interactiveContent: {
        type: 'music',
        title: 'My Top 3 Songs (Ranked)',
        items: [
          { rank: 1, title: "It's Ok I'm Ok", artist: 'Tate McRae', genre: 'Pop/R&B', mood: '🎭' },
          { rank: 2, title: 'Where You Belong', artist: 'The Weeknd', genre: 'R&B/Pop', mood: '🌃' },
          { rank: 3, title: 'Reminder', artist: 'The Weeknd', genre: 'R&B/Hip-Hop', mood: '⚡' }
        ]
      }
    },
    {
      title: 'Watching Anime',
      icon: Tv,
      description: 'Anime inspires my creativity with its stunning visuals and storytelling.',
      visual: '🍿',
      details: [
        'Sci-Fi & Tech Anime',
        'Studio Ghibli Films',
        'Cyberpunk Themes',
        'Animation Analysis'
      ],
      bgGradient: 'from-secondary/20 to-accent/20',
      interactiveContent: {
        type: 'anime',
        title: 'My Top 3 Anime Recommendations',
        items: [
          { 
            title: 'One Piece', 
            genre: 'Adventure/Shounen', 
            rating: '⭐⭐⭐⭐⭐', 
            description: 'Epic pirate adventure with incredible world-building',
            visual: '🏴‍☠️',
            techInsight: '🧠 Teaches: Problem-solving algorithms (Luffy\'s creative solutions), scalable system design (crew expansion), and persistent data structures (never-ending adventure logs)',
            funFact: 'Like debugging - it takes 1000+ episodes to find the ultimate treasure!'
          },
          { 
            title: 'Demon Slayer', 
            genre: 'Action/Supernatural', 
            rating: '⭐⭐⭐⭐⭐', 
            description: 'Stunning animation and emotional storytelling',
            visual: '⚔️',
            techInsight: '💡 Teaches: Performance optimization (breathing techniques = efficient algorithms), real-time processing (split-second sword reactions), and visual design excellence',
            funFact: 'Animation quality so good, it makes my CSS animations look like stick figures!'
          },
          { 
            title: 'Bleach', 
            genre: 'Action/Supernatural', 
            rating: '⭐⭐⭐⭐⭐', 
            description: 'Soul reapers and spiritual battles',
            visual: '👻',
            techInsight: '⚡ Teaches: Memory management (soul cleansing = garbage collection), multi-threading (spiritual world + human world), and API integration (connecting dimensions)',
            funFact: 'Soul Society\'s organizational structure = perfect microservices architecture!'
          }
        ]
      }
    },
    {
      title: 'Designing',
      icon: Palette,
      description: 'UI/UX design is my passion - creating beautiful and functional interfaces.',
      visual: '🎨',
      details: [
        'UI/UX Prototyping',
        'Figma & Adobe XD',
        'Design Systems',
        'User Research'
      ],
      bgGradient: 'from-accent/20 to-primary/20',
      interactiveContent: {
        type: 'design',
        title: 'Design in Action',
        items: []
      }
    }
  ];

  const handleHobbyClick = (index: number) => {
    setClickedHobby(clickedHobby === index ? null : index);
  };

  const renderMusicContent = (hobby: any) => (
    <div className="space-y-4">
      <h4 className="text-xl font-bold text-center text-primary mb-6">{hobby.interactiveContent.title}</h4>
      {hobby.interactiveContent.items.map((song: any, index: number) => (
        <div 
          key={index} 
          className="glass p-4 rounded-lg flex items-center space-x-4 hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center font-bold text-primary">
            {song.rank}
          </div>
          <div className="text-3xl mr-2">{song.mood}</div>
          <div className="flex-1">
            <h5 className="font-semibold text-foreground">{song.title}</h5>
            <p className="text-sm text-muted-foreground">{song.artist}</p>
            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">{song.genre}</span>
          </div>
          <Play size={20} className="text-primary hover:text-primary/80 cursor-pointer animate-pulse" />
        </div>
      ))}
    </div>
  );

  const renderAnimeContent = (hobby: any) => (
    <div className="space-y-4">
      <h4 className="text-xl font-bold text-center text-secondary mb-6">{hobby.interactiveContent.title}</h4>
      {hobby.interactiveContent.items.map((anime: any, index: number) => (
        <div 
          key={index} 
          className="glass p-6 rounded-lg hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="text-4xl">{anime.visual}</div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-semibold text-foreground text-lg">{anime.title}</h5>
                <span className="text-lg">{anime.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{anime.description}</p>
              <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full">{anime.genre}</span>
            </div>
          </div>
          
          {/* Technical Insights */}
          <div className="bg-muted/10 p-4 rounded-lg border-l-4 border-secondary/30">
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-secondary">What I learned:</span>
            </p>
            <p className="text-sm text-foreground/90 mb-2">{anime.techInsight}</p>
            <p className="text-xs italic text-muted-foreground">{anime.funFact}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDesignContent = () => (
    <div className="text-center">
      <h4 className="text-xl font-bold text-accent mb-6">Design in Motion</h4>
      <div className="relative w-64 h-64 mx-auto bg-muted/20 rounded-xl overflow-hidden">
        {/* Scribbling Animation Container */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 256 256"
        >
          {/* Animated drawing paths */}
          <path
            d="M50,50 Q100,20 150,50 T250,50"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            className="animate-draw-1"
          />
          <path
            d="M50,100 Q100,70 150,100 T250,100"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            className="animate-draw-2"
          />
          <path
            d="M50,150 Q100,120 150,150 T250,150"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            fill="none"
            className="animate-draw-3"
          />
          <circle
            cx="128"
            cy="180"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            className="animate-draw-circle"
          />
        </svg>
        
        {/* Design tools floating around */}
        <div className="absolute top-4 left-4 animate-float">
          <Brush size={16} className="text-primary" />
        </div>
        <div className="absolute top-4 right-4 animate-float" style={{ animationDelay: '1s' }}>
          <Palette size={16} className="text-secondary" />
        </div>
        <div className="absolute bottom-4 left-4 animate-float" style={{ animationDelay: '2s' }}>
          <Heart size={16} className="text-accent" />
        </div>
        <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star size={16} className="text-primary" />
        </div>
      </div>
      <p className="text-muted-foreground mt-4 text-sm">
        Watch as creativity flows through digital brushstrokes
      </p>
    </div>
  );

  return (
    <section id="hobbies" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hobbies & Interests
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond coding, these passions fuel my creativity and inspire my work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-500 ${
                activeHobby === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveHobby(index)}
              onMouseLeave={() => setActiveHobby(null)}
              onClick={() => handleHobbyClick(index)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main Card */}
              <div className={`glass rounded-2xl p-8 h-80 flex flex-col items-center justify-center text-center transition-all duration-500 hover-glow relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Animated Visual */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {hobby.visual}
                  </div>

                  {/* Icon */}
                  <div className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    <hobby.icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {hobby.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hobby.description}
                  </p>

                  {/* Click indicator */}
                  <div className="mt-4 text-xs text-muted-foreground opacity-60">
                    Click to explore
                  </div>
                </div>

                {/* Hover Overlay with Details */}
                <div className={`absolute inset-0 bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 z-20 ${
                  activeHobby === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-4xl mb-4">{hobby.visual}</div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">{hobby.title}</h3>
                  <ul className="space-y-2 text-center">
                    {hobby.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Elements */}
              {hobby.title === 'Listening to Songs' && (
                <div className="absolute -top-2 -right-2 text-2xl animate-pulse">
                  <Headphones className="text-primary" />
                </div>
              )}
              
              {hobby.title === 'Watching Anime' && (
                <div className="absolute -top-2 -left-2 text-2xl animate-bounce">
                  <Eye className="text-secondary" />
                </div>
              )}
              
              {hobby.title === 'Designing' && (
                <div className="absolute -bottom-2 -right-2 text-2xl animate-spin" style={{ animationDuration: '3s' }}>
                  <Brush className="text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Content Display */}
        {clickedHobby !== null && (
          <div className="mt-16 animate-fade-in">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              {hobbies[clickedHobby].interactiveContent.type === 'music' && renderMusicContent(hobbies[clickedHobby])}
              {hobbies[clickedHobby].interactiveContent.type === 'anime' && renderAnimeContent(hobbies[clickedHobby])}
              {hobbies[clickedHobby].interactiveContent.type === 'design' && renderDesignContent()}
              
              <div className="text-center mt-6">
                <button 
                  onClick={() => setClickedHobby(null)}
                  className="bg-muted/20 hover:bg-muted/30 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Showcase */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                How These Shape My Work
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center hover-lift">
              <div className="text-3xl mb-4">🎼</div>
              <h4 className="font-semibold mb-2 text-primary">Music & Code</h4>
              <p className="text-sm text-muted-foreground">
                Different genres help me enter flow states for various coding tasks
              </p>
            </div>

            <div className="glass p-6 rounded-xl text-center hover-lift">
              <div className="text-3xl mb-4">🎌</div>
              <h4 className="font-semibold mb-2 text-secondary">Visual Inspiration</h4>
              <p className="text-sm text-muted-foreground">
                Anime aesthetics influence my UI design and color choices
              </p>
            </div>

            <div className="glass p-6 rounded-xl text-center hover-lift">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold mb-2 text-accent">Design Thinking</h4>
              <p className="text-sm text-muted-foreground">
                Constant designing keeps me updated with latest UX trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;