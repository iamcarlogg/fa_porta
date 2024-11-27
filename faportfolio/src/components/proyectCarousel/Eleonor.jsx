
function Eleonor() {
  return (
    <>
    <>
        <div className="h-[90vh] w-full overflow-x-scroll overflow-y-hidden flex">
          {/* Sección 1 */}
          <div className="bg-pinku h-full lg:w-[1000px] xl:w-[1170px]  flex-shrink-0 justify-around">
            <div className="w-full flex justify-center items-center text-center h-full lg:scale-125 xl:scale-150">
              <button className="bg-pinkuDark p-4  border-[10px] border-pinkuDark w-[300px] h-[390px] ml-12 xl:ml-[10rem] rounded-3xl group relative overflow-hidden">
                {/* Imagen por defecto */}
                <img
                  className="rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute inset-0 object-cover"
                  src="eleonorboton copy.png"
                  alt="Imagen principal"
                />

                {/* Imagen al hacer hover */}
                <img
                  className="rounded-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
                  src="loteriaboton1.png"
                  alt="Imagen al hacer hover"
                />
              </button>
              <div className="w-1/2 flex flex-col justify-center items-center text-center ">
                <img src="eleonortitulo.svg"></img>
                <p className="">
                Tuve la oportunidad de rediseñar la cubierta del libro Eleanor y Park como práctica de ilustración, ejercicio que me permitió desarrollar un estilo dirigido a un público juvenil. Eleanor y Park, dos adolescentes muy distintos, encuentran un vínculo que cambia sus vidas, conectando a través de elementos importantes de la historia retomados dentro de la portada de la propuesta.
                </p>
              </div>
            </div>
          </div>
          {/* Sección 2 */}
          
          <div className="bg-pinku relative  h-full w-[2300px] xl:w-[2600px] flex flex-shrink-0 justify-around ">
           
          </div>
          
         
          <div className="bg-pinku  h-full w-[1000px] flex-shrink-0 flex items-center">
            

            <div className="w-full flex justify-center items-center text-center h-full lg:scale-125 xl:scale-150">
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
            </div>
          </div>
        </div>
      </>

    </>
  );
}
export default Eleonor;