import ProjectContainer from '../components/project-container/ProjectContainer';
import { useMyContext } from '../DataContext.js';

function Projects(){

    const {globalData} = useMyContext();
    if (!globalData) {
        return <div>Loading...</div>;
    }

    return(
        <div  id='projects-container' style={{alignContent: 'center'}}>
            <h1 style={{color:'#75c5aa'}}>MY PROJECTS</h1>
            <ProjectContainer name={globalData["Temporary"]} image={"p1"}/>
            <ProjectContainer name={globalData["Temporary"]} image={"p2"}/>
            <ProjectContainer name={globalData["Temporary"]} image={"p3"}/>
            <ProjectContainer name={globalData["Temporary"]} image={"p4"}/>
        </div>
    );
};

export default Projects;