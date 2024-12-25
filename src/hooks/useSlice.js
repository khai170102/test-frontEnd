import { useState, useEffect } from "react";

const useSlice = (data, sliceSize, intervalTime) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex * sliceSize >= data.length ? 0 : nextIndex;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [data.length, sliceSize, intervalTime]);

  const currentSlice = data.slice(
    currentIndex * sliceSize,
    (currentIndex + 1) * sliceSize
  );
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return { currentSlice, currentIndex, goToSlide };
};

export default useSlice;
