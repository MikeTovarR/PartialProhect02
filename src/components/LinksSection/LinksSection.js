import './LinksSection.css';
import { useState } from 'react';

function LinksSection({data}){
    const {name, rotation, mainColor, secondaryColor} = data;
    console.log(mainColor, secondaryColor, rotation, name);

    return(
        <div className="links-container" style={{backgroundColor: mainColor, color:secondaryColor}}>
            <div className='links-part' style={{transform: `rotate(${rotation}deg)`}}><h2>{name}</h2></div>
            <div className='links-part' style={{transform: `rotate(${rotation}deg)`}}><h2>Resume</h2></div>
            <div className='links-part' style={{transform: `rotate(${rotation}deg)`}}><h2>Projects</h2></div>
        </div>
    )
};

export default LinksSection;