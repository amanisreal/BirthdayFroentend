import React, { useEffect, useRef, useState } from "react";
import "./ball.css";

const Ball = ({ x, name }) => {
  const [position, setPosition] = useState({ x: x, y: 100 }); // Set initial X position
  const [velocity, setVelocity] = useState({ y: 2 });
  const [hasBounced, setHasBounced] = useState(false);
  const ballRef = useRef();

  const updatePosition = () => {
    if (hasBounced) return;

    setPosition((prevPos) => {
      const nextY = prevPos.y + velocity.y;
      const ball = ballRef.current;
      const ballDiameter = ball.offsetHeight;
      const windowHeight = window.innerHeight - 200;

      if (nextY + ballDiameter > windowHeight || nextY < 0) {
        setVelocity((prevVel) => ({ y: -prevVel.y }));
        setHasBounced(true);
      }

      return { ...prevPos, y: nextY };
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updatePosition, 16); // ~60 fps
    return () => clearInterval(intervalId);
  }, [velocity, hasBounced]);

  return (
    <div
      ref={ballRef}
      className="ball"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`, // Both X and Y movement
      }}
    >
      <div className="ball-content">{name}</div>
    </div>
  );
};

export default Ball;
