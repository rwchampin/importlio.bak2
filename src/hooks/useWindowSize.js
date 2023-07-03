
import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  const handlePixelRatio = () => {
    setDevicePixelRatio(window.devicePixelRatio);
  };

  useLayoutEffect(() => {
    handleSize();
    handlePixelRatio();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return { windowSize, devicePixelRatio };
};

export default useWindowSize;