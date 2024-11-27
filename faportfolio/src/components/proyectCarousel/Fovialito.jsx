import React from "react";
import { Link } from "react-router-dom";

function Fovialito() {
    return (
      <>
        <div className=" h-[90vh] w-full overflow-x-scroll overflow-y-hidden flex">
          {/* Sección 1 */}
          <div className="bg-fovial h-full lg:w-[1000px] xl:w-[1170px]  flex-shrink-0 justify-around">
            <div className="w-full flex justify-center items-center text-center h-full lg:scale-125 xl:scale-150">
              <button className="bg-cyanm p-4  border-[10px] border-cyanm w-[300px] h-[390px] ml-12 xl:ml-[10rem] rounded-3xl group relative overflow-hidden">
                {/* Imagen por defecto */}
                <img
                  className="rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute inset-0 object-cover"
                  src="loteriaboton 2.png"
                  alt="Imagen principal"
                />

                {/* Imagen al hacer hover */}
                <img
                  className="rounded-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
                  src="gmw3.png"
                  alt="Imagen al hacer hover"
                />
              </button>
              <div className="w-1/2 flex flex-col justify-center items-center text-center ">
                <img className="" src="Group 81.svg"></img>
                <div className="w-[60%]">
                  <p className="text-[13px] font-sans text-white text-balance p-2">
                    La Lotería de Fovialito que fue creada para la Semana
                    Mundial de la Seguridad Vial 2022, tiene como objetivo
                    promover medidas de seguridad en carreteras para
                    conductores, peatones y motociclistas. Este juego busca
                    difundir de forma coloquial el Reglamento General de
                    Tránsito y el programa de señalización de FOVIAL, dirigido a
                    estudiantes de segundo ciclo en adelante.
                  </p>
                  <p className="text-white">
                    Ilustracion <b>Aplicada</b>
                  </p>
                </div>
                <img src="creditosfovial.svg"></img>
              </div>
            </div>
          </div>
          {/* Sección 2 */}
          <div className="relative bg-gradient-to-r from-fovial from-10%  to-white  h-full w-[300px] flex-shrink-0">
            <img
              className="absolute bottom-0 right-0"
              src="tarjeta1.png"
            ></img>
            <img
              className="absolute bottom-[7.5rem] -right-[1.3rem]"
              src="tarjeta2.png"
            ></img>
          </div>
          <div className="bg-white relative  h-full w-[2300px] xl:w-[2600px] flex flex-shrink-0 justify-around ">
            <img
              className="-mr-[15rem] scale-[1]"
              src="loteria1.png"
            ></img>
            <img
              className="xl:scale-[0.8]"
              src="instrucctivo1.png"
            ></img>
            <img
              className="-ml-[15rem] lg:scale-[.6]"
              src="loteriacon.png"
            ></img>
          </div>
          <div className="bg-gradient-to-r from-white to-fovialgreen  h-full w-[125px] flex-shrink-0"></div>
          <div className="bg-fovialgreen  h-full w-[1800px] flex-shrink-0 flex justify-center items-center">
            <img src="fovial3.png"></img>
          </div>
          <div className="bg-gradient-to-r from-fovialgreen to-fovialwhite  h-full w-[125px] flex-shrink-0"></div>
          <div className="bg-white  h-full w-[1000px] flex-shrink-0 flex items-center">
            <div className="relative w-1/2 h-full flex flex-col items-start text-center justify-center">
              <img
                className="xl:ml-12 xl:scale-[1]"
                src="fovialpru.png"
              ></img>
              <button className="absolute text-white bottom-[12rem] xl:bottom-[12rem] left-[9.5rem] p-2 rounded-xl bg-fovial w-28 hover:bg-cyanm transition trasform duration-200">
                Ver fotos
              </button>
            </div>

            <div className="w-full flex justify-center items-center text-center h-full lg:scale-125 xl:scale-150">
              <Link to="/eleonor">
                <button className="bg-cyanm p-4  border-[10px] border-cyanm w-[300px] h-[390px] ml-12 xl:ml-[10rem] rounded-3xl group relative overflow-hidden">
                  {/* Imagen por defecto */}
                  <img
                    className="rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute inset-0 object-cover"
                    src="eleonorboton copy.png"
                    alt="Imagen principal"
                  />
                  {/* Imagen al hacer hover */}
                  <img
                    className="rounded-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
                    src="eleonorboton2.png"
                    alt="Imagen al hacer hover"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
  
export default Fovialito;
