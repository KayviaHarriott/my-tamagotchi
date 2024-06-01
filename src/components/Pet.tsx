import { useEffect, useState } from "react";
// import "./styles/sprite.css";
import "../styles/sprite.css"

export const PetSprite = () => {
  const [frame, setFrame] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const totalFrames = 7; 
  const frameWidth = 64; 
  const boxSize = 460; 
//   const [backgroundLocation, setBackgroundPositionLocation] = useState({ x: 0, y: 0 });
//   const bgSize = { width: 140, height: 70 }; 

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    }, 125); 

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    setPosition((prevPosition) => {
      let { x, y } = prevPosition;
      switch (e.key) {
        case 'ArrowUp':
          y = Math.max(-10, y - 10);
          break;
        case 'ArrowDown':
          y = Math.min(boxSize - 320, y + 10);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - 10);
          break;
        case 'ArrowRight':
          x = Math.min(boxSize - frameWidth, x + 10);
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const backgroundPosition = `-${frame * frameWidth}px 0`;

  return (
    <div className="sprite-box">
      <div
        className="sprite"
        style={{
          backgroundPosition,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
};
