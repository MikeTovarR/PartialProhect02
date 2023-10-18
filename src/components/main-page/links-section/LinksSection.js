import './LinksSection.css';
import { Link } from 'react-router-dom';

function LinksSection({data}){

    //console.log(data);  //debugger
    if (!data) {
        return <div>Loading...</div>;
    }

    return(
        <div id="links-container" style={{backgroundColor: data["color2"], color:data["color1"]}}>
            <Link to={`/Resume/${data["name"]}`} className='links-part' >
                <div  >
                    <h2 style={{backgroundColor: data["color2"], color:data["color1"], 
                            transform: `rotate(${data["rotation"]}deg)`,}}>{data["name"]}</h2>
                </div>
            </Link>
            <Link to={`/Resume/${data["name"]}`} className='links-part'>
                <div >
                    <h2 style={{backgroundColor: data["color2"], color:data["color1"], 
                            transform: `rotate(${data["rotation"]}deg)`,}}>Resume</h2>
                </div>
            </Link>
            <Link to={`/Resume/${data["name"]}`} className='links-part' >
                <div >
                    <h2 style={{backgroundColor: data["color2"], color:data["color1"], 
                            transform: `rotate(${data["rotation"]}deg)`,}}>Projects</h2>
                </div>
            </Link>
        </div>
    )
};

export default LinksSection;