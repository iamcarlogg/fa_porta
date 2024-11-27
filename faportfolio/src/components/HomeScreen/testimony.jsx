import React, { useState } from "react";

const Testimony = () => {
  const [activeTestimonio, setActiveTestimonio] = useState(0);

  const testimonios = [
    {
      id: 0,
      img: "diana.png",
      text: "Sus diseños resuelven de manera eficiente los objetivos de comunicación ",
      nombre: "Diana Rodríguez",
      cargo: "Diseñadora Gráfica",
    },
    {
      id: 1,
      img: "felix.png",
      text: "Convierte ideas complejas en soluciones gráficas simples y poderosas . ",
      nombre: "Felix Castellanos",
      cargo: "Diseñadora Gráfica",
    },
    {
      id: 2,
      img: "sarai.png",
      text: "Sus diseños resuelven problemas de comunicación de manera estratégica. ",
      nombre: "Saraí Navarrete",
      cargo: "Diseñadora Gráfica",
    },
  ];

  return (
    <div className="flex w-scree items-center justify-center">
      <div className="text-left w-[50%] p-4">
        <p className="text-6xl font-serif text-white  text-balance">
          {testimonios[activeTestimonio].text}
        </p>
        <p className="text-lg font-light text-white font-sans">
          {testimonios[activeTestimonio].nombre}
        </p>
        <p className="text-lg font-light text-white font-sans">
          {testimonios[activeTestimonio].cargo}
        </p>
      </div>
      <div className="w-1/3 items-center justify-center flex flex-col gap-2 scale-125">
        {testimonios.map((testimonio, index) => (
          <button
            key={testimonio.id}
            onClick={() => setActiveTestimonio(index)}
            className={`relative group transform ${
              activeTestimonio === index ? "scale-125" : "scale-90"
            } transition-transform duration-200`}
          >
            <img
              src={testimonio.img}
              alt={`Imagen del testimonio ${index + 1}`}
              className={`size-20 rounded-full border-4 transition-all duration-300 ${
                activeTestimonio === index
                  ? "border-purpleDark grayscale-0"
                  : "border-transparent grayscale"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
