import { useState, useEffect, useRef } from "react";

interface CursorOptions {
  size: number;
  color: string;
  opacity: number;
  zIndex: number;
  mixBlendMode?: string;
  transitionDuration: number;
  hoverScale?: number;
}

export function useCircularCursor(
  targetSelector: string,
  options?: Partial<CursorOptions>
) {
  const defaultOptions: CursorOptions = {
    size: 28,
    color: "rgba(128, 128, 128, 0.7)",
    opacity: 0.8,
    zIndex: 9999,
    transitionDuration: 150,
    hoverScale: 1.5,
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const lastHoverElement = useRef<Element | null>(null);

  useEffect(() => {
    // Debug log
    console.log("Initializing circular cursor for", targetSelector);
    
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) {
      console.error("Target element not found:", targetSelector);
      return;
    }
    
    console.log("Target element found:", targetElement);

    // Create cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("circular-cursor");
    
    // Set styles for the cursor
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.width = `${mergedOptions.size}px`;
    cursor.style.height = `${mergedOptions.size}px`;
    cursor.style.borderRadius = "50%";
    cursor.style.border = "2px solid rgba(255, 255, 255, 0.8)";
    cursor.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    
    // Set background color
    cursor.style.backgroundColor = mergedOptions.color;
    
    cursor.style.opacity = isVisible ? mergedOptions.opacity.toString() : "0";
    cursor.style.zIndex = mergedOptions.zIndex.toString();
    cursor.style.transition = `transform ${mergedOptions.transitionDuration}ms ease-out, opacity 300ms ease, width 300ms ease, height 300ms ease`;
    cursor.style.transform = `translate(${position.x}px, ${position.y}px)`;
    
    if (mergedOptions.mixBlendMode) {
      cursor.style.mixBlendMode = mergedOptions.mixBlendMode;
    }
    
    // Initial cursor setup - start visible
    cursor.style.opacity = "0"; // Start invisible until we move into the target area
    
    // Position the cursor initially off-screen
    cursor.style.transform = `translate(-100px, -100px)`;

    // Add to DOM
    document.body.appendChild(cursor);
    cursorRef.current = cursor;
    
    console.log("Cursor element created and appended to body");

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Check if mouse is over the target section
      const rect = targetElement.getBoundingClientRect();
      const isOverTarget = 
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;
      
      if (isOverTarget && !isVisible) {
        console.log("Mouse entered target area");
      } else if (!isOverTarget && isVisible) {
        console.log("Mouse left target area");
      }
      
      setIsVisible(isOverTarget);
      
      // Only set position if mouse is over target
      if (isOverTarget) {
        // For centered cursor
        setPosition({ 
          x: clientX - mergedOptions.size / 2,
          y: clientY - mergedOptions.size / 2
        });
        
        // Check if hovering over an element with data-cursor-hover attribute
        const hoveredElement = document.elementFromPoint(clientX, clientY);
        const isHoverElement = hoveredElement?.closest("[data-cursor-hover]");
        
        if (isHoverElement && lastHoverElement.current !== isHoverElement) {
          setIsHovering(true);
          lastHoverElement.current = isHoverElement;
        } else if (!isHoverElement && lastHoverElement.current) {
          setIsHovering(false);
          lastHoverElement.current = null;
        }
      }
    };

    const handleMouseDown = () => {
      setIsActive(true);
      if (cursorRef.current) {
        cursorRef.current.classList.add("active");
      }
    };

    const handleMouseUp = () => {
      setIsActive(false);
      if (cursorRef.current) {
        cursorRef.current.classList.remove("active");
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Cleanup function
    return () => {
      console.log("Cleaning up cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (cursorRef.current) {
        document.body.removeChild(cursorRef.current);
        cursorRef.current = null;
      }
    };
  }, [targetSelector, mergedOptions.size, mergedOptions.color, mergedOptions.zIndex, mergedOptions.mixBlendMode, mergedOptions.transitionDuration, mergedOptions.opacity, isVisible, position.x, position.y]);

  // Update cursor styles based on state changes
  useEffect(() => {
    if (!cursorRef.current) return;
    
    // Base opacity - make sure it's visible by default
    cursorRef.current.style.opacity = isVisible ? mergedOptions.opacity.toString() : "0";
    
    // Apply hover scale if hovering over an interactive element
    if (isHovering) {
      const hoverSize = mergedOptions.size * (mergedOptions.hoverScale || 1);
      cursorRef.current.style.width = `${hoverSize}px`;
      cursorRef.current.style.height = `${hoverSize}px`;
      // Adjust position to keep the cursor centered
      const offsetAdjustment = (hoverSize - mergedOptions.size) / 2;
      cursorRef.current.style.transform = `translate(${position.x - offsetAdjustment}px, ${position.y - offsetAdjustment}px)`;
    } else {
      cursorRef.current.style.width = `${mergedOptions.size}px`;
      cursorRef.current.style.height = `${mergedOptions.size}px`;
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position, isVisible, isHovering, mergedOptions.opacity, mergedOptions.size, mergedOptions.hoverScale]);

  return { position, isVisible, isActive, isHovering };
} 