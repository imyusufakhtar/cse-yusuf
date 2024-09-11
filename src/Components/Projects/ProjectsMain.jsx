import "./Projects.css";
import ProjectsContainer from "./ProjectsContainer";
import ProjectSummary from "./ProjectSummary";

const ProjectsMain = () =>{
    return(
        <>
        <div className="content">
        <section className="projects-section">
            <ProjectSummary/>
            <ProjectsContainer/>
        </section>
        </div>
        </>
    )
}

export default ProjectsMain;