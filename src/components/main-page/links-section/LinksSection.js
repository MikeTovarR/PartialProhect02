import './LinksSection.css';
import { Link } from 'react-router-dom';

function LinksSection({data}){
    const {name, rotation, mainColor, secondaryColor} = data;
    console.log(mainColor, secondaryColor, rotation, name);

    return(
        <div id="links-container" style={{backgroundColor: mainColor, color:secondaryColor}}>
            <Link className='links-part' to={'/Resume'}>
                <div  >
                    <h2 style={{backgroundColor: mainColor, color:secondaryColor, 
                            transform: `rotate(${rotation}deg)`,}}>{name}</h2>
                </div>
            </Link>
            <Link to={'/Resume'} className='links-part'>
                <div >
                    <h2 style={{backgroundColor: mainColor, color:secondaryColor, 
                            transform: `rotate(${rotation}deg)`,}}>Resume</h2>
                </div>
            </Link>
            <Link className='links-part' to={'/Resume'}>
                <div >
                    <h2 style={{backgroundColor: mainColor, color:secondaryColor, 
                            transform: `rotate(${rotation}deg)`,}}>Projects</h2>
                </div>
            </Link>
        </div>
    )
};

export default LinksSection;