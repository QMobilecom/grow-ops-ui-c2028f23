
import { useEffect, useState } from "react";

export function VoiceVisualizer() {
  const [bars, setBars] = useState<{height: number; color: string}[]>([]);
  
  useEffect(() => {
    const colors = ['#68E584', '#5BD5F5', '#9B7BFE', '#FFF4CF', '#FFB800'];
    const barCount = Math.floor(window.innerWidth / 20);
    
    const generateBars = () => {
      const newBars = [];
      for (let i = 0; i < barCount; i++) {
        newBars.push({
          height: Math.random() * 60 + 10, // Random height between 10 and 70
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setBars(newBars);
    };
    
    generateBars();
    const interval = setInterval(generateBars, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute bottom-0 w-full flex items-end justify-center space-x-1 h-20 overflow-hidden">
      {bars.map((bar, index) => (
        <div 
          key={index}
          className="w-2 rounded-t-sm transition-all duration-300"
          style={{ 
            height: `${bar.height}px`,
            backgroundColor: bar.color
          }}
        />
      ))}
    </div>
  );
}
