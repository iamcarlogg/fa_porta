
import React from 'react';
import { Link } from 'react-router-dom';
function Welcome() {
  return (
    <> 
        <div className="w-screen h-[90vh] flex flex-col bg-welcome bg-contain bg-no-repeat bg-bottom justify-center items-center">
        
        <h3 className="mb-4 text-xl font-thin text-white">Fáti Martinez</h3>
        <h1 className="text-6xl p-2 font-medium text-balance font-serif text-white">Convirtiendo tus<br/>ideas en texturas,<br/>colores y formas</h1>
        <Link to="aboutme">
          <button className="mt-4 w-40 rounded-xl bg-cyanDark p-2 text-white  hover:bg-white hover:text-cyanDark transition duration-300">
              <p className="text-lg  font-semilight" >¡Conoceme!</p>
          </button>
        </Link>
        </div>
    </>
    
  );
}

export default Welcome;