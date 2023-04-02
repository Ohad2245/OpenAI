import React, { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 90);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div role="status">
      <p className="text-white font-bold">{progress}%</p>
    </div>
  );
};

export default Loader;
