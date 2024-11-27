import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-20 w-full px-3 bg-cyanm h-20 flex items-center">
      {/* Logo */}
      <img src="logofa.svg" className="relative size-20 p-2" alt="Logo" />

      {/* Lista de navegación */}
      <ul className="text-xl w-full list-none flex justify-end relative">
        <li className="mx-4 text-white hover:text-cyanDarker transition duration-200">
          <Link to="/"><a href="">Inicio</a></Link>
        </li>
        <Link to="/aboutme">
          <li className="mx-4 text-white hover:text-cyanDarker transition duration-200">
            <a href="">¿Quién soy?</a>
          </li>
        </Link>

        {/* Dropdown de Proyectos */}
        <li className="relative mx-4 text-white hover:text-cyanDarker transition duration-200">
          <a onClick={handleToggle} className="cursor-pointer">
            Proyectos
          </a>

          {/* Menú desplegable */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-0 mt-2 divide-y divide-gray-100 rounded-md bg-purplem"
              role="menu"
            >
              <div>
                <Link to="/publicitario">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm bg-purplem text-purpleDarker rounded-lg hover:bg-purpleDark hover:text-white transition transform duration-200"
                    role="menuitem"
                  >
                    Diseño publicitario
                  </button>
                </Link>
                <Link to="/editorial">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm bg-purplem text-purpleDarker rounded-lg hover:bg-purpleDark hover:text-white transition transform duration-200 "
                    role="menuitem"
                  >
                    Editorial
                  </button>
                </Link>
                <Link to="/Ilustracion">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm bg-purplem text-purpleDarker rounded-lg hover:bg-purpleDark hover:text-white transition transform duration-200"
                    role="menuitem"
                  >
                    Ilustración Aplicada
                  </button>
                </Link>
              </div>
            </div>
          )}
        </li>

        <Link to ="/contact">
          <li className="mx-4 text-white hover:text-cyanDarker transition duration-200">
            <a href="">Contacto</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
