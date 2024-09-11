import './AboutMe.css'
import AboutSection from "./AboutSection";
import Skills from "./Skills";

const AboutMain = () =>{
    return(
        <>
        <div className="content">
            <AboutSection/>
            <Skills/>
        </div>
        </>
    )
}

export default AboutMain;