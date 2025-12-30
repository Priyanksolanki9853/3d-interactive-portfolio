import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Large glow follower */}
      <motion.div
        className="fixed pointer-events-none z-[9990] hidden md:block"
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          mass: 1,
        }}
      >
        <div 
          className="w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(180 100% 50% / 0.4) 0%, hsl(300 100% 60% / 0.2) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Secondary follower */}
      <motion.div
        className="fixed pointer-events-none z-[9991] hidden md:block"
        animate={{
          x: mousePos.x - 75,
          y: mousePos.y - 75,
          opacity: isVisible ? 0.1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
          mass: 0.8,
        }}
      >
        <div 
          className="w-[150px] h-[150px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(45 100% 60% / 0.5) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Geometric shapes that follow */}
      <motion.div
        className="fixed pointer-events-none z-[9989] hidden lg:block"
        animate={{
          x: mousePos.x + 100,
          y: mousePos.y - 50,
          rotate: mousePos.x / 10,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 30,
          damping: 15,
          mass: 1.5,
        }}
      >
        <div 
          className="w-8 h-8 border border-primary/50 rotate-45"
          style={{ boxShadow: '0 0 20px hsl(180 100% 50% / 0.3)' }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9989] hidden lg:block"
        animate={{
          x: mousePos.x - 120,
          y: mousePos.y + 60,
          rotate: -mousePos.y / 15,
          opacity: isVisible ? 0.25 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 25,
          damping: 12,
          mass: 2,
        }}
      >
        <div 
          className="w-6 h-6 rounded-full border border-secondary/50"
          style={{ boxShadow: '0 0 15px hsl(300 100% 60% / 0.3)' }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9989] hidden lg:block"
        animate={{
          x: mousePos.x + 80,
          y: mousePos.y + 100,
          scale: 1 + Math.sin(mousePos.x / 100) * 0.2,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 20,
          damping: 10,
          mass: 2.5,
        }}
      >
        <div 
          className="w-4 h-4 bg-accent/30"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            boxShadow: '0 0 15px hsl(45 100% 60% / 0.3)' 
          }}
        />
      </motion.div>
    </>
  );
}
