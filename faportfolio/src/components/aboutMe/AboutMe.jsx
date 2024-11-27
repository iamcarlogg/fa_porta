
function AboutMe(){

    return(
        <>
            <div className="relative w-full h-[90vh] flex justify-between ">
                <img className="absolute pointer-events-none" src="qs1.svg"></img>
                <img className="absolute right-0 " src="qs2.svg"></img>
                <div className="w-1/2 flex ml-[6rem] items-center ">
                    <img className="scale-[.50]" src="fotodeinicio.png" ></img>
                </div>
                <div className="w-1/2 flex flex-col -ml-[10rem] justify-center text-center mr-[5rem] lg:-mt-[3rem] lg:scale-[0.85] xl:scale-[1.2]">
                    <p className="text-purplem font-light">Permitanme presentarme, soy</p>
                    <img className="-mt-5 scale-[0.5] xl:scale-[0.5]" src="nombre.svg"></img>
                    <div className="scale-90 -mt-5 z-40">
                        <p className="text-cyanDark text-balance text-sm px-[10rem] z-20">
                        Soy una diseñadora gráfica salvadoreña que cree en el diseño como la herramienta que vincula al mundo.<br/>
                        Un 13 de mayo me vio nacer en aquel remoto año 2002 y a través de los años logré descubrirme: mi detallismo tomó sentido, y junto al trabajo con la determinación, me permití vivir mi pasión en cada idea transformada y dada forma. Eso es el diseño para mí, la estructura y lo humano conviviendo en un mismo espacio, que me facilita conectar y brindar mensajes que inspiren a las demás personas a través de mi trabajo.
                        </p>
                    </div>

                </div>
                <img className="absolute bottom-0" src="qs3.svg"></img>
                <img className="absolute bottom-0 xl:left-[40%] left-[37%] z-0" src="qs5.svg"></img>
                <img src="qs6.svg" className="absolute right-0 bottom-0 "></img>
                </div>
        </>
    )
}

export default AboutMe;