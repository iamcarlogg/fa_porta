import React, { useState } from "react";

const Carousel = () => {
  const images = [
    { src: "/src/assets/images/img1.png", link: "/page1" },
    { src: "/src/assets/images/img2.png", link: "/page2" },
    { src: "/src/assets/images/img3.png", link: "/page3" },
    { src: "/src/assets/images/img4.png", link: "/page4" },
    { src: "/src/assets/images/img5.png", link: "/page5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Botón Anterior */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-3 rounded-full text-white hover:bg-gray-600 transition"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Carrusel */}
      <div className="flex justify-center items-center overflow-hidden relative">
        <div className="flex items-center justify-center w-full space-x-4">
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            const isPrevious =
              index === (currentIndex - 1 + images.length) % images.length;
            const isNext =
              index === (currentIndex + 1) % images.length;

            // Clases de posición
            const position = isCurrent
              ? "scale-100 z-10 opacity-100"
              : isPrevious || isNext
              ? "scale-[0.80] opacity-50 cursor-pointer"
              : "hidden";

            return (
              <div
                key={index}
                className={`transition-transform transform duration-500 ease-in-out ${position}`}
                onClick={
                  isPrevious
                    ? prevSlide
                    : isNext
                    ? nextSlide
                    : undefined // No clic en el actual
                }
              >
                {/* Imagen con funcionalidad */}
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className={`w-100 h-80 rounded-lg shadow-lg ${
                    isCurrent ? "cursor-pointer" : ""
                  }`}
                  onClick={
                    isCurrent
                      ? () => window.location.href = image.link // Redirección
                      : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Botón Siguiente */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-3 rounded-full text-white hover:bg-gray-600 transition"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
