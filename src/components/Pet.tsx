import { useEffect, useState } from "react";

export const PetSprite = () => {
  const [frame, setFrame] = useState(0);
  const totalFrames = 7; 
  const frameWidth = 64; 

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    }, 125); 

    return () => clearInterval(interval);
  }, []);

  const backgroundPosition = `-${frame * frameWidth}px 0`;

  return (
    <div>
      <div className="sprite-container">
        <div className="sprite" style={{ backgroundPosition }}></div>
      </div>
    </div>
  );
};
