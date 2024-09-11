import "./Setting.css";
import SettingHeading from "./SettingHeading";
import SettingLanguage from "./SettingLanguage";
import SettingTheme from "./SettingTheme";

const SettingMain = () =>{
    return(
        <>
        <div className="content">
            <section className="settings-section">
                <SettingHeading/>
                <div className="settings-container">
                    <SettingTheme/>
                    <SettingLanguage/>
                </div>
            </section>
        </div>
        </>
    )
}

export default SettingMain;