import Carousel from "./Carousel"

function Thirdpart() {
    return (
       <>
        <div className="relative w-full md:h-[90vh] lg:h-[90vh] xl:h-[90vh] bg-white flex flex-col justify-center text-center ">
        <img src="florcar.svg" className="absolute z-20 right-[8%] top-0"></img>
            <h2 className="p-2 lg:text-4xl xl:text-6xl font-serif text-cyanm mb-[6rem]"> Proyectos </h2>
            <Carousel/>
        <img className="absolute bottom-0 left-[5%]" src="florcar2.svg"></img>
        </div>
       
        
       </>
    )
}
export default Thirdpart