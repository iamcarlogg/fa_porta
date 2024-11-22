

function Navbar() {
  return (
    <nav className="w-full bg-cyanm h-20 flex items-center">
      <img src="../../../public/logofa.svg" className="relative size-20 p-2"/>
      <ul className=" text-xl w-full list-none flex justify-end ">
        <li className="mx-4 text-white hover:text-slate-300"><a href="">Home</a></li>
        <li className="mx-4 text-white hover:text-slate-300"><a href="">Quien soy?</a></li>
        <li className="mx-4 text-white hover:text-slate-300"><a href="">Proyectos</a></li>
        <li className="mx-4 text-white hover:text-slate-300"><a href="">Contacto</a></li>

      </ul>

    </nav>
  );
}
export default Navbar;