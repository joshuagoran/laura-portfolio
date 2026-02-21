import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/xjgeendb", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(e.currentTarget),
            });
            if (res.ok) {
                setStatus("sent");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
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
            {status === "error" && (
                <p className={styles.error}>
                    Something went wrong. Please try again.
                </p>
            )}
            <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
            </button>
        </form>
    );
}
