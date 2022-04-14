// page de landing page chargement image de la page 
import React, { useState } from 'react';

const Landing = (props) => {

    const [Dorsleft,setDorsLeft ] = useState(false)
    const [DorsRight,setDorsRight] = useState(false)

    const handleChange = () => {
        setDorsLeft(!Dorsleft)
        setDorsRight(!DorsRight)
    }
       
    return (
        <div className="bg-no-repeat bg-center h-screen bg-[url('./images/image-fond-landing-page.png')]"> 
            <div className="flex flex-wrap content-center justify-center h-screen ..." >
                <div>
                        <img className=  {`${Dorsleft ? '-translate-x-48' :''} transition ease-out duration-300`} src="../images/logo_texture_porte_gauche.png" onClick={handleChange}/>
                </div>
                <div>
                        <img className={`${Dorsleft ? 'translate-x-48' :''} transition ease-out duration-300`} src="../images/logo-texture-porte-droite.png" onClick={handleChange}/>
                </div>
            </div>
        </div>
    )
}

export default Landing
