import React from "react";
import { Link } from "react-router-dom";
function Publicitario() {
  return (
    <>
    

        
          <div className=" w-full h-[90vh] bg-gradient-to-b from-pinky  to-white flex justify-center">
          <div className="absolute pointer-events-none ">
            <img className="xl:object-cover" src="/src/assets/images/editorialarriba.png"></img>
          </div>
          <div className="-mt-20 flex items-center justify-center flex-col ">
              <img className="lg:size-[20rem]" src="/src/assets/images/publicitario.svg"></img>
              <p className="w-1/2 text-center -mt-20 text-balance text-purpleDarker">
              Para mí, el diseño publicitario es esencial porque permite combinar creatividad y estrategia para comunicar el valor de una marca y conectar emocionalmente con el público. Es la forma en que cada diseño logra captar atención, inspirar y dejar una huella memorable.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-purplem p-2 rounded-xl hover:scale-105 transition trasnform duration-200">
                  <img className="rounded-xl lg:size-[15rem] xl:size-[20rem]" src="/src/assets/images/img5.png"></img>
                </button>
                <button className="bg-purplem p-2 rounded-xl hover:scale-105 transition trasnform duration-200">
                  <img className=" rounded-xl lg:size-[15rem] xl:size-[20rem]" src="/src/assets/images/img1.png"></img>
                </button>
              </div>
              <Link to ="/"><button className="p-1 bg-pinky rounded-xl mt-4 lg:w-[5rem] xl:w-[8rem] text-purpleDarker hover:bg-cyanDark hover:text-white transition transform duration-200">Volver</button></Link>
          </div>
          <div className="absolute xl:bottom-3 lg:-bottom-3 pointer-events-none">
          <img src="/src/assets/images/editorialabajo.png"></img>
          </div>
          
          </div>
      
    </>
  );
}

export default Publicitario;