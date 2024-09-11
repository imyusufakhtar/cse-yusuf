import './Experience.css'
import ExperienceHeading from "./ExperienceHeading";
import ExperienceImage from "./ExperienceImage";
import ExperienceLists from "./ExperienceLists";

const ExperienceMain = () =>{
    return(
        <>
        <div className="content">
        <section className="experience-section">
            <ExperienceImage/>
            <div className="experience-text">
                <ExperienceHeading/>
                <ExperienceLists/>
            </div>
        </section>
        </div>
        </>
    )
}

export default ExperienceMain;