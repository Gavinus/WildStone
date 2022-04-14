import React from 'react';

const Heroe = ({nameClass}) => {
    return (
        <div>
            
            <img className='h-56 mt-24 ml-5' src="./images/voleur.png" alt="image_hero_voleur" />
            <h2 className='ml-24'>{nameClass}</h2>

        </div>
    );
};

export default Heroe;