import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";

export default function Contact() {
    return (
        <section className="section">
            <Reveal>
                <h1>Get In Touch</h1>
                <p>
                    Have a project in mind? Reach out to start a conversation
                    about your space.
                </p>
            </Reveal>
            <Reveal>
                <ContactForm />
            </Reveal>
        </section>
    );
}
