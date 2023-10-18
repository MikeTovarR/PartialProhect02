import { useMyContext } from '../../DataContext.js';
import './ProjectContainer.css'

function ProjectContainer({name, image}){

    const {globalData} = useMyContext();
    if (!globalData) {
        return <div>Loading...</div>;
    }
    return(

        <div >
            <div id='projects-details'>
                <div>
                    <img style={{maxWidth:'100%'}} src={require(`../../media-sources/${name}/${image}.png`)}></img>
                </div>
                <div style={{backgroundColor:'#75c5aa'}}>
                    <p style={{color:'#ffffff', width:'80%', fontSize:'x-large'}}className='text-info'>{ globalData[globalData["Temporary"]][image]}</p>
                </div>
            </div>
        </div>
        );
};
export default ProjectContainer;