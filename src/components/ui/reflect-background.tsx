import React, { useRef, useEffect } from 'react';

// The CSS styles are defined as a string literal. This is a simple way to
// include global styles and animations in a single React component file.
const GlobalStyles = `
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%; /* Use min-height to allow content to expand */
    /* Hide the default system cursor */
    cursor: none; 
  }

  body {
    /* A light grey base color for the background */
    background-color: #000000ff;

    /* Layering multiple radial gradients to create the "ball" or "orb" effect.
       Each gradient is a circle positioned at a different point on the screen.
       The colors are adjusted for a light theme.
    */
    background-image:
        radial-gradient(circle at 15% 25%, rgba(192, 132, 252, 0.4), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.4), transparent 30%),
        radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.4), transparent 20%),
        radial-gradient(circle at 70% 75%, rgba(45, 212, 191, 0.35), transparent 25%);

    /* Set a large background size to allow for smooth animation */
    background-size: 200% 200%;

    /* Keep the background fixed so it doesn't scroll with the content */
    background-attachment: fixed;

    /* Animation properties for the background gradient orbs */
    animation: moveGradient 40s linear infinite;
  }

  /* Keyframes for the background gradient animation */
  @keyframes moveGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Styles for the content area for demonstration */
  .content {
    position: relative;
    padding: 10rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-family: sans-serif;
    color: #333;
  }

  /* Styling for the sample link and button for hover effect demonstration */
  .sample-link, .sample-button {
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-radius: 8px;
    text-decoration: none;
    color: #111;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
`;

/**
 * A full-page background component featuring animated gradient orbs
 * and a custom cursor effect with a lagging follower that reacts to hovers.
 */
const App = (): React.JSX.Element => {
  // Refs for the two custom cursor elements
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  // Refs to store position and state without causing re-renders
  const mouse = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const targetScale = useRef(1);
  const currentScale = useRef(1);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('a, button, .sample-link, .sample-button')) {
        targetScale.current = 2.5;
      }
    };
    
    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('a, button, .sample-link, .sample-button')) {
        targetScale.current = 1;
      }
    };

    // The main animation loop
    const animate = () => {
      // Smoothly move the follower towards the mouse position (lerp)
      const smoothing = 0.15;
      followerPos.current.x += (mouse.current.x - followerPos.current.x) * smoothing;
      followerPos.current.y += (mouse.current.y - followerPos.current.y) * smoothing;
      
      // Smoothly adjust the scale of the follower
      currentScale.current += (targetScale.current - currentScale.current) * smoothing;

      if (cursorRef.current && followerRef.current) {
        // Update the position of the small cursor dot directly
        cursorRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
        
        // Update the position and scale of the lagging follower circle
        followerRef.current.style.transform = `
          translate(${followerPos.current.x}px, ${followerPos.current.y}px)
          translate(-50%, -50%)
          scale(${currentScale.current})
        `;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animate();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Styles for the custom cursor elements
  const cursorStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    width: '8px', height: '8px',
    backgroundColor: '#333',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
  };

  const followerStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    width: '40px', height: '40px',
    border: '1px solid #555',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
  };

  return (
    <>
      <style>{GlobalStyles}</style>
      <div ref={cursorRef} style={cursorStyle} />
      <div ref={followerRef} style={followerStyle} />
      
    </>
  );
};

export default App;

