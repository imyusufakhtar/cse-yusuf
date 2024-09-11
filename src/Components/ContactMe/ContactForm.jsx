const ContactForm = () =>{
    return(
        <>
        <div className="contact-form">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, please fill out the form below:</p><br/>
            <form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm;