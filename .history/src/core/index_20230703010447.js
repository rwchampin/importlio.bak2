import React, { useEffect } from 'react';
import CoreManager from './core/CoreManager';

const Core = () => {
  useEffect(() => {
    const coreManager = new CoreManager();
    coreManager.init();
    // Additional initialization code if needed

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
};

export default Core;
