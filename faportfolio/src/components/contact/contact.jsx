
function Contact(){
    return(
        <>
            <section className="relative h-[90vh] w-full bg-cyanLight flex flex-row justify-center items-center">
            <img className="absolute left-0 xl:left-[10rem] top-0" src="plantaarriba 1.svg"></img>
            <img className="absolute top-0 right-[26rem] xl:right-[40rem]" src="plantitaarriba 1.svg"></img>
            <div className="w-2/3 flex flex-col items-center justify-center">
                <div className="z-10 lg:w-[70%] xl:w-[50%] justify-left items-left">
                    <p className="text-cyanDarker lg:text-lg xl:text-lg font-semilight pl-6 ">Trabajemos juntos!</p>
                    <h1 className="text-cyanDarker font-serif text-6xl pl-6">Contactame</h1>
                    <form className="p-6">
                        <label className="text-sm font-light font-sans text-cyanDarker">Nombre</label>
                        <input type="text" placeholder="Nombre" className="w-full p-2 my-2 rounded-2xl"></input>
                        <label className="text-sm font-light font-sans text-cyanDarker">E-mail</label>
                        <input type="email" placeholder="usuario@example.com" className="w-full p-2 my-2 rounded-2xl"></input>
                        <label className="text-sm font-light font-sans text-cyanDarker">Detalles</label>
                        <textarea placeholder="Escribe detalles del proyecto" className="w-full p-2 my-2 h-[8rem] rounded-2xl"></textarea>
                        <div className="w-full text-right">
                        <button className="bg-white text-cyanDarker  p-2 w-1/3 rounded-2xl hover:bg-cyanDarker hover:text-white transition transform duration-200">Enviar</button></div>
                    </form>
                </div>
            </div>
            <div className="relative flex items-center">
  <div className="absolute lg:-left-[5rem] xl:-left-[14rem]">
    <ul className="mt-2 flex flex-col gap-2">
      <li>
        <button className="bg-cyanDark p-2 rounded size-18">
          <img className="size-6" src="behance.svg" />
        </button>
      </li>
      <li>
        <button className="bg-cyanDark p-2 rounded size-18">
          <img className="size-6" src="tiktok.svg" />
        </button>
      </li>
      <li>
        <button className="bg-cyanDark p-2 rounded size-18">
          <img className="size-6" src="insta.svg" />
        </button>
      </li>
    </ul>
  </div>
  <img
    className="lg:-ml-28 lg:scale-[1] xl:-ml-44 xl:scale-[1.8] object-fit pointer-events-none"
    src="contact1.svg"
  />
</div>
    <img className="absolute left-0 bottom-0 xl:left-[10rem]" src="contactohonguito 1.svg"></img>
    </section>
        </>
    )
}
export default Contact;