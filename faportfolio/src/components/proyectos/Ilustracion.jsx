import React from 'react';
import { Link } from 'react-router-dom';
function Ilustracion(){
    return(
<>
    

        
    <div className=" w-full h-[90vh] bg-gradient-to-b from-[#7EE0E3]  to-white flex justify-center">
    <div className="absolute pointer-events-none ">
      <img className="xl:hidden " src="/src/assets/images/arriblab.png"></img>
        <img className="xl:object-cover hidden xl:block" src="/src/assets/images/arribaxl.png"></img>
    </div>
    <div className="-mt-20 flex items-center justify-center flex-col ">
        <img className="lg:size-[20rem]" src="/src/assets/images/ilustracion.svg"></img>
        <p className="w-1/2 text-center -mt-20 text-balance text-cyanDarker">
        La ilustración aplicada es la herramienta que transforma ideas y conceptos en imágenes visuales que comunican de manera efectiva. A través de ella, puedo transmitir emociones, contar historias y dar personalidad a proyectos, aportando un valor visual a los mensajes.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-cyanDark p-2 rounded-xl hover:scale-105 transition trasnform duration-200">
            <img className="rounded-xl lg:size-[15rem] xl:size-[20rem]" src="/src/assets/images/img5.png"></img>
          </button>
          <button className="bg-cyanDark p-2 rounded-xl hover:scale-105 transition trasnform duration-200">
            <img className=" rounded-xl lg:size-[15rem] xl:size-[20rem]" src="/src/assets/images/img1.png"></img>
          </button>
        </div>
        <Link to ="/"><button className="p-1 bg-cyanm rounded-xl mt-4 lg:w-[5rem] xl:w-[8rem] text-white hover:bg-cyanDark hover:text-white transition transform duration-200">Volver</button></Link>

    </div>
    <div className="absolute xl:bottom-3 lg:-bottom-3 pointer-events-none">
    <img className='xl:hidden' src="/src/assets/images/abajozul.png"></img>
    <img className="xl:object-cover hidden xl:block" src="/src/assets/images/abajoxl.png"></img>

    </div>
    
    </div>

</>)
}
export default Ilustracion;