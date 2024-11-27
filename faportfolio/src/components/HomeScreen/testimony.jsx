import React, { useState } from "react";

const Testimony = () => {
  const [activeTestimonio, setActiveTestimonio] = useState(0);
  const [activeNombre, setNombre] = useState(0);

  const testimonios = [
    {
      id: 0,
      img: "https://via.placeholder.com/150",
      text: "Este es el testimonio 1. ¡Fue una experiencia increíble!",
      nombre: "Fátima Martínez",
      cargo: "Diseñadora Gráfica",
    },
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      text: "El testimonio 2. Excelente servicio y calidad.",
      nombre: "Fátima Martínez",
      cargo: "Diseñadora Gráfica",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      text: "El testimonio 3. Totalmente recomendado.",
      nombre: "Fátima Martínez",
      cargo: "Diseñadora Gráfica",
    },
  ];

  return (
    <div className="flex w-screen items-center justify-center">


      <div className="text-left w-2/3 p-4">
        <p className="text-4xl font-serif  text-gray-700 text-balance">
          {testimonios[activeTestimonio].text}
        </p>
        <p className="text-lg font-semibold text-gray-800">
            {testimonios[activeTestimonio].nombre}
        </p>
        <p className="text-lg font-semibold text-gray-800">
            {testimonios[activeTestimonio].cargo}
        </p>
      </div>
      <div className=" w-1/3 items-center justify-center items-right flex flex-col gap-2">
        {testimonios.map((testimonio, index) => (
          <button
            key={testimonio.id}
            onClick={() => setActiveTestimonio(index)}
            className={`relative group transform ${
              activeTestimonio === index
                ? "scale-125 border-blue-500"
                : "scale-90"
            } transition-transform duration-200`}
          >
            <img
              src={testimonio.img}
              alt={`Imagen del testimonio ${index + 1}`}
              className={`size-20 rounded-full border-4 ${
                activeTestimonio === index
                  ? "border-purpleDark"
                  : "border-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
