import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // Added useEffect import
import { ExternalLink, Github, Gamepad2, Brain, Car, Scale, Crosshair, PersonStanding, Rocket, Target, Bird, Flag, Globe } from 'lucide-react';

const projectCategories = {
  games: {
    title: 'Games',
    subtitle: 'Unity & Web-based Games',
    icon: Gamepad2,
    color: 'primary',
    projects: [
      {
        title: 'MYTHICAL DUNGEON',
        description: 'A 3D Action-RPG dungeon crawler built in Unity. Battle mech enemies, explore techno-ruins, and collect loot in this 2-level open world adventure.',
        image: '/Dungeon.png',
        tech: ['Unity', 'C#', 'ShaderLab', 'Blender'],
        github: 'https://github.com/Priyanksolanki9853/MYTHICAL_DUNGEON',
        demo: 'https://priyank-solanki.itch.io/mythical-dungeons',
        icon: Gamepad2,
      },
      {
        title: 'Sharp Shooter',
        description: 'A fast-paced 3D First-Person Shooter (FPS) developed in Unity & C#. Battle waves of enemy drones, utilize multiple weapons, and survive in an open-world arena.',
        image: '/SS.png',
        tech: ['Unity', 'C#', 'ShaderLab', 'FPS Mechanics'],
        github: 'https://github.com/Priyanksolanki9853/Sharp_Shooter',
        demo: 'https://priyank-solanki.itch.io/shoot-it',
        icon: Crosshair,
      },
      {
        title: 'ESCAPE',
        description: 'A 3D endless runner built in Unity. Control the Prince, dodge oncoming obstacles, collect coins, and survive the speed-run challenge.',
        image: '/Escape.png',
        tech: ['Unity', 'C#', 'Endless Runner', '3D'],
        github: 'https://github.com/Priyanksolanki9853/ESCAPE',
        demo: 'https://priyank-solanki.itch.io/escape',
        icon: PersonStanding,
      },
      {
        title: 'Rocket Boost',
        description: 'A physics-based 2D sci-fi platformer built with Unity 6 and C#. Navigate the rocket through alien terrain and avoid obstacles!',
        image: '/Rocket_Boost.png',
        tech: ['Unity 6', 'C#', 'Physics', '2D Platformer'],
        github: 'https://github.com/Priyanksolanki9853/Rocket_Boost',
        demo: 'https://priyank-solanki.itch.io/rocket-boost',
        icon: Rocket,
      },
      {
        title: 'Obstacle Dodge',
        description: 'A basic 3D arcade survival game built to learn Unity basics. Control the player, dodge falling projectiles, and master collision physics.',
        image: '/Obstacle_dodge.png',
        tech: ['Unity', 'C#', 'Arcade', 'Physics'],
        github: 'https://github.com/Priyanksolanki9853/Obstacle_Dodge',
      
        icon: Target,
      },
      {
        title: 'MINI GOLF',
        description: 'A 3D Mini Golf arcade game with 5 levels. Putt your way through windmills, bridges, and obstacles in this physics-based Unity game.',
        image: '/Mini_Golf.png',
        tech: ['Unity', 'C#', 'Physics', 'Casual Game'],
        github: 'https://github.com/Priyanksolanki9853/MINI_GOLF',
      
        icon: Flag,
      },
      {
        title: 'Flappy Bird Clone',
        description: 'A lightweight, browser-based clone of Flappy Bird built with HTML5, CSS3, and Vanilla JavaScript. Features smooth rendering and score tracking.',
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&auto=format&fit=crop&q=60',
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Browser Game'],
        github: 'https://github.com/Priyanksolanki9853/Flappy_Bird_Clone',
        demo: 'https://priyanksolanki9853.github.io/Flappy_Bird_Clone/',
        icon: Bird,
      },
    ],
  },
  ai: {
    title: 'AI Projects',
    subtitle: 'Machine Learning & AI Applications',
    icon: Brain,
    color: 'secondary',
    projects: [
      {
        title: 'NYAYA.ai',
        description: 'A Next-Gen Legal Intelligence Platform. Uses RAG & Llama-3 to simplify the Indian Constitution & Bhartiya Nyaya Sanhita (BNS). Features AI Judge, Doc Drafting & Semantic Search.',
        image: '/Nyaya.png',
        tech: ['Python', 'Llama-3', 'RAG', 'FastAPI', 'Pinecone'],
        github: 'https://github.com/Priyanksolanki9853/NYAYA.ai',
        demo: 'https://samvidhan-ai-psi.vercel.app/',
        icon: Scale,
      },
      {
        title: 'SafeRoute AI',
        description: 'An AI-powered navigation system that analyzes road geometry, weather, and infrastructure to calculate the safest path, not just the fastest one.',
        image: '/Safe_route.png',
        github: 'https://github.com/Priyanksolanki9853/SafeRoute-AI',
        demo: 'https://accident-route-advisor.onrender.com/',
        icon: Car,
      },
    ],
  },
  websites: {
    title: 'Websites',
    subtitle: 'Web Development Projects',
    icon: Globe,
    color: 'accent',
    projects: [
      {
        title: 'Gaming Portal',
        description: 'An immersive, cyberpunk-themed game developer portfolio. Features a single-page architecture (SPA), global leaderboard powered by Supabase, embedded HTML5 arcade games, and interactive 3D UI effects.',
        image: '/ GP.png',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Supabase'],
        github: 'https://github.com/Priyanksolanki9853/Gaming_Portal',
        demo: 'https://priyanksolanki9853.github.io/Gaming_Portal/',
        icon: Gamepad2,
      },
    ],
  },
};

type CategoryKey = keyof typeof projectCategories;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('games');

  // --- ADDED: Auto-switch tab based on URL Link ---
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#ai') {
        setActiveCategory('ai');
      } else if (window.location.hash === '#games') {
        setActiveCategory('games');
      } else if (window.location.hash === '#websites') {
        setActiveCategory('websites');
      }
    };

    handleHashChange(); // Run on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categoryColors = {
    primary: {
      bg: 'bg-primary/20',
      text: 'text-primary',
      border: 'border-primary/50',
      hover: 'hover:bg-primary/30',
      glow: 'hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]',
    },
    secondary: {
      bg: 'bg-secondary/20',
      text: 'text-secondary',
      border: 'border-secondary/50',
      hover: 'hover:bg-secondary/30',
      glow: 'hover:shadow-[0_0_30px_hsl(300_100%_60%/0.3)]',
    },
    accent: {
      bg: 'bg-accent/20',
      text: 'text-accent',
      border: 'border-accent/50',
      hover: 'hover:bg-accent/30',
      glow: 'hover:shadow-[0_0_30px_hsl(45_100%_60%/0.3)]',
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text-secondary text-glow-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Games, AI applications, and web projects that showcase my skills
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(projectCategories) as CategoryKey[]).map((key) => {
            const category = projectCategories[key];
            const colors = categoryColors[category.color as keyof typeof categoryColors];
            const isActive = activeCategory === key;
            const Icon = category.icon;
            
            return (
              <motion.button
                key={key}
                id={key === 'ai' ? 'ai-tab' : undefined} // Added ID for easier targeting
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-xl font-display font-semibold
                  transition-all duration-300 border
                  ${isActive 
                    ? `${colors.bg} ${colors.text} ${colors.border} shadow-lg` 
                    : 'glass-card text-muted-foreground hover:text-foreground border-border/50'
                  }
                  ${colors.glow}
                `}
              >
                <Icon size={20} />
                <span>{category.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-background/30' : 'bg-muted'}`}>
                  {category.projects.length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Header */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h3 className={`text-2xl font-display font-bold ${categoryColors[projectCategories[activeCategory].color as keyof typeof categoryColors].text}`}>
            {projectCategories[activeCategory].title}
          </h3>
          <p className="text-muted-foreground font-body">
            {projectCategories[activeCategory].subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`grid-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectCategories[activeCategory].projects.map((project, index) => {
            const categoryColor = projectCategories[activeCategory].color as keyof typeof categoryColors;
            const colors = categoryColors[categoryColor];
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group glass-card rounded-2xl overflow-hidden border border-border/50 ${colors.glow} transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className={`absolute top-4 right-4 p-2 glass-card rounded-lg ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-display font-bold ${colors.text} mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-body bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`flex items-center gap-2 px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-body font-semibold text-sm ${colors.hover} transition-colors`}
                    >
                      <ExternalLink size={16} />
                      {activeCategory === 'games' ? 'Play Game' : 'View Demo'}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}