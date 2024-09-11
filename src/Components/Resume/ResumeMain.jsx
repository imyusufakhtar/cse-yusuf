import './Resume.css';
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeSidebar from "./ResumeSidebar";
import ResumeSkills from "./ResumeSkills";

const ResumeMain = () =>{
    return(
        <>
        <div className="content">
            <div className="portfolio-resume-container">
                <ResumeSidebar/>
                <div className="portfolio-resume-content">
                    <ResumeExperience/>
                    <ResumeProjects/>
                    <ResumeSkills/>
                    <ResumeEducation/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResumeMain;