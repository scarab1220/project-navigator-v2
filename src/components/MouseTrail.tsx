import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
  id: number;
}

const MouseTrail = () => {
  const [trail, setTrail] = useState<Position[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY, id: nextId };
      setTrail((prevTrail) => [newPosition, ...prevTrail.slice(0, 14)]);
      setNextId((prev) => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((pos, index) => {
        const opacity = Math.max(0, 1 - index / 15); // Smooth fade
        const size = Math.max(2, 6 - index * 0.3); // Gradual size decrease
        
        return (
          <div
            key={pos.id}
            className="absolute rounded-full"
            style={{
              left: pos.x - size / 2,
              top: pos.y - size / 2,
              width: size,
              height: size,
              background: `rgba(212, 175, 55, ${opacity * 0.6})`,
              opacity: opacity,
              boxShadow: `0 0 ${size * 1.5}px rgba(212, 175, 55, ${opacity * 0.4})`,
              filter: `blur(${Math.max(0, index * 0.08)}px)`,
              transition: 'all 0.1s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default MouseTrail;
