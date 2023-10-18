import './Projects.css';
import ProjectContainer from '../components/project-container/ProjectContainer';

function Projects(){

    return(
        <div  id='projects-container' style={{alignContent: 'center'}}>
            <h1 style={{color:'#75c5aa'}}>MY PROJECTS</h1>
            <ProjectContainer/>
            <ProjectContainer/>
            <ProjectContainer/>
            <ProjectContainer/>
        </div>
    );
};

export default Projects;