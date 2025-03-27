import { useState, useRef, useEffect } from "react";

interface TiltOptions {
  max: number;
  scale: number;
  speed: number;
  perspective: number;
  easing: string;
}

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useCardTilt(options?: Partial<TiltOptions>) {
  const defaultOptions: TiltOptions = {
    max: 15, // Maximum tilt rotation in degrees
    scale: 1.05, // Scale on hover
    speed: 500, // Speed of the enter/exit transition
    perspective: 1000, // Perspective value for 3D effect
    easing: "cubic-bezier(.03,.98,.52,.99)" // Easing for movements
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    scale: 1
  });
  
  const cardRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const previousTime = useRef<number>(0);
  const isActive = useRef(false);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current || !isActive.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card
    
    // Calculate rotation based on mouse position
    // When mouse is at the center, the rotation is 0
    // When mouse is at the edges, the rotation is at max/min
    const rotateY = ((x / rect.width) * 2 - 1) * mergedOptions.max;
    const rotateX = ((y / rect.height) * 2 - 1) * -mergedOptions.max;
    
    setTilt({
      rotateX,
      rotateY,
      scale: mergedOptions.scale
    });
  };
  
  const handleMouseEnter = () => {
    isActive.current = true;
    // Reset previous time on enter
    previousTime.current = performance.now();
    // Start animation loop
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };
  
  const handleMouseLeave = () => {
    isActive.current = false;
    // Reset tilt values to default with an animation
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1
    });
  };
  
  const animate = (time: number) => {
    if (previousTime.current !== 0) {
      // Animation logic here if needed
    }
    previousTime.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  const cardStyle = {
    transform: `perspective(${mergedOptions.perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
    transition: !isActive.current ? `transform ${mergedOptions.speed}ms ${mergedOptions.easing}` : "none"
  };
  
  const bind = {
    ref: cardRef,
    onMouseMove: handleMouseMove as unknown as React.MouseEventHandler,
    onMouseEnter: handleMouseEnter as unknown as React.MouseEventHandler,
    onMouseLeave: handleMouseLeave as unknown as React.MouseEventHandler,
    style: cardStyle
  };
  
  return bind;
} 