import Testimony from "./testimony";


function SecondPart() {
  return (
    <>
        <div className="relative md:h-[50vh] lg:h-[50vh] xl:h-[50vh] w-screen bg-white flex justify-center items-center">

          <div className="w-5/6 h-5/6 flex  ">
            <div className="w-2/3 h-full p-2 justify-center items-center text-left ">
              <h2 className="md:text-2xl lg:text-3xl xl:text-4xl font-light font-serif tracking-tighter text-balance p-1 text-cyanm">
                Compromentida con el poder del <a className="no-click text-cyanDarker">diseño para conectar</a>
              </h2>
              
              <div className="w-4/5"> 
                <p className="lg:text-lg xl:text-xl font-sans tracking-tight text-balance text-cyanm">Soy una diseñadora gráfica salvadoreña que fusiona la sensibilidad del ser humano con la estructura del diseño, creando piezas de <b className="text-cyanDark">ilustración aplicada, de diseño publicitario y diseño editorial.</b></p>
              </div>
              <button className="mt-4 w-40 rounded-xl bg-cyanDark p-2 text-white  hover:bg-cyanm transition duration-300">Mas sobre mi</button>
            </div>
            <div className="w-1/3 h-full p-2  flex justify-center items-center scale-[0.70]">
              <img src="fotodeinicio.png" className="img-contain"></img>
            </div>
          </div>
          <img src="hongo.png" className="absolute object-scale-down lg:size-20 xl:size-28 bottom-0 "/>

        </div>
        <div className="h-[45vh] bg-purplem flex  justify-center">
          <Testimony/>
        </div>
    </>
    
  );
}

export default SecondPart;