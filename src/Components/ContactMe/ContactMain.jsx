import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactMain = () =>{
    return(
        <>
        <main className="content">
            <section className="contact-section">
                <ContactForm/>
                <ContactInfo/>
            </section>
        </main>
        </>
    )
}

export default ContactMain;