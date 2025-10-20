// VisitorCounter.js
import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState('...'); // Initial loading state

  useEffect(() => {
    // This function runs once when the component is loaded
    const fetchVisitorCount = async () => {
      try {
        // Fetch data from the API you created earlier
        const response = await fetch('/api/counter'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCount(data.views);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        // If there's an error, don't show a broken number
        setCount('N/A'); 
      }
    };

    fetchVisitorCount();
  }, []); // The empty array [] ensures this runs only once

  return (
    <span>Visitors: <strong>{count}</strong></span>
  );
};

export default VisitorCounter;