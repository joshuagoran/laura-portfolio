import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: actually send form data to a backend or email service
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <p className={styles.thanks}>
                Thanks for reaching out! I'll be in touch soon.
            </p>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Subject
                <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                />
            </label>
            <label>
                Message
                <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
}
