// page de landing page chargement image de la page 

const Landing = (props) => {
    return (
        <div className="bg-no-repeat bg-center h-screen bg-[url('./images/image-fond-landing-page.png')]"> 
            <div className="flex flex-wrap content-center justify-center h-screen ..." >
                <div>
                        <img src="../images/logo_texture_porte_gauche.png"/>
                </div>
                <div>
                        <img src="../images/logo-texture-porte-droite.png"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;
