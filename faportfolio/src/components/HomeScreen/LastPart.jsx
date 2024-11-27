import React from 'react';
import { Link } from 'react-router-dom';
function LastPart() 
{
    return(
        <>
            <div className="lg:h-[500px] xl:h-[50vh] w-full bg-white ">
            <div className="h-full w-full flex flex-col justify-center items-center bg-welcome-question lg:bg-bottom xl:bg-cover xl:bg-no-repeat " >
                <h2 className="lg:mt-20 xl:mt-20 font-serif lg:text-4xl xl:text-5xl text-white">¡¿Estas listo para trabajar juntos?!</h2>
                <Link to="/contact"><button className="mt-4 rounded-lg bg-white text-cyanDark w-40 p-2">¡Contactame!</button></Link>
            </div>

            </div>
        </>
    )
}

export default LastPart;