import useSlice from "../../../../hooks/useSlice";

export function Banner() {
  const images = [
    "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1",
    "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2",
    "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3",
  ];

  const sliceSize = 1;
  const intervalTime = 3000;
  const { goToSlide, currentIndex } = useSlice(images, sliceSize, intervalTime);

  return (
    <div className="relative w-[full] overflow-hidden  ">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-auto  flex-shrink-0 ">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full max-h-[550px] object-cover "
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[10%] sm:left-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4 justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`
              rounded-full w-4 h-4 flex justify-center items-center 
              ${index === currentIndex ? "border border-white" : ""}
          `}
          >
            <span
              className={` rounded-full border-2 w-2 h-2  transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "scale-125 bg-white border-white "
                  : "bg-white/50 border-transparent"
              }`}
              onClick={() => goToSlide(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
