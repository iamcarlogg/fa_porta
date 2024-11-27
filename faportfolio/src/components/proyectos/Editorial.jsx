import React from "react";
import { Link } from "react-router-dom";
function Editorial() {
  return (
    <>
    

        
          <div className="relative w-full h-[100vh] bg-gradient-to-b from-pinky  to-white flex justify-center">
          <div className="absolute pointer-events-none ">
            <img className="xl:object-cover" src="editorialarriba.png"></img>
          </div>
          <div className="-mt-20 flex items-center justify-center flex-col ">
              <img className="lg:size-[20rem]" src="editorial.svg"></img>
              <p className="w-1/2 text-center -mt-20 text-balance text-purpleDarker">
              El diseño editorial da vida al contenido, creando una experiencia visual que guía y conecta con el lector. Es transformar la información en algo memorable, donde cada página cuenta una historia que se siente y perdura.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-purplem p-2 rounded-3xl hover:scale-105 transition transform duration-200">
                  <img className="rounded-2xl lg:size-[15rem] xl:size-[20rem]" src="cuadrorega.png"></img>
                </button>
                <button className="bg-purplem p-2 rounded-3xl hover:scale-105 transition transform duration-200">
                  <img className=" rounded-2xl lg:size-[15rem] xl:size-[20rem]" src="cuadroagustd.png"></img>
                </button>
              </div>
              <Link to ="/"><button className="p-1 bg-pinky rounded-xl mt-4 lg:w-[5rem] xl:w-[8rem] text-purpleDarker hover:bg-cyanDark hover:text-white transition transform duration-200">Volver</button></Link>
          </div>
          <div className="absolute xl:bottom-0 lg:-bottom-0 pointer-events-none">
          <img src="editorialabajo.png"></img>
          </div>
          
          </div>
      
    </>
  );
}

export default Editorial;
