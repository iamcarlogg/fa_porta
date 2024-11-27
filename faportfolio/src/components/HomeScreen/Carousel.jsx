import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const images = [
    { src: "img1.png", link: "/page1",nombre:"Global Money Week 2024",cat:"Diseño publicitario" },
    { src: "img2.png", link: "/page2",nombre:"Lotería de FOVIALITO",cat:"Ilustracion Aplicada" },
    { src: "img3.png", link: "/page3",nombre:"SerTOC",cat:"Diseño editorial" },
    { src: "img4.png", link: "/page4",nombre:"Revista REGA", cat:"Diseño editorial" },
    { src: "img5.png", link: "/page5",nombre:"Mao Sorpresas",cat:"Diseño publicitario" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  });

  const displayedImages = [
    images[(currentIndex - 1 + totalImages) % totalImages], // Imagen anterior
    images[currentIndex], // Imagen actual
    images[(currentIndex + 1) % totalImages], // Imagen siguiente
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Botón Anterior */}

      {/* Carrusel */}
      <div className="flex justify-center items-center overflow-hidden relative lg:scale-[1] xl:scale-[1.2]">
        <div className="flex items-center justify-center w-full space-x-4">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`transition-transform transform duration-500 ease-in-out ${
                index === 1
                  ? "scale-100 z-10 opacity-100"
                  : "scale-[0.80] opacity-50"
              }`}
              onClick={() => {
                if (index === 1) {
                  window.location.href = image.link; // Redirección si la imagen es la actual
                }
              }}
            >
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className={`w-100 h-80 rounded-lg shadow-lg ${
                  index === 1 ? "cursor-pointer" : ""
                }`}
              />
              {index === 1 && (
                <div className="text-center mt-2">
                  <p className="font-sans text-sm font-bold">{image.nombre}</p>

                  <p className="font-sans text-sm font-light">{image.cat}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;