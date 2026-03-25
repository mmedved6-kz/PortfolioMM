"use client";

import React, { useState } from "react";

type FormState = {
    status: "idle" | "sending" | "success" | "error";
    errorMessage?: string;
};

export function ContactForm() {
    const [state, setState] = useState<FormState>({ status: "idle", errorMessage: "" });

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !email || !message) {
            setState({ status: "error", errorMessage: "Please fill in name, email and message."});
            return;
        }

        setState({ status: "sending", errorMessage: "Sending..." });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const payload = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string };

            if (!response.ok || !payload.success) {
                setState({ status: "error", errorMessage: payload.error ?? "Could not send your message right now." });
                return;
            }

            form.reset();
            setState({ status: "success", errorMessage: "Message sent successfully. Thank you!" });
        } catch {
            setState({ status: "error", errorMessage: "Failed to send message. Please try again in a moment." });
        }
    }

    return (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
                <label htmlFor="name" className="contact-input-label">Name</label>
                <input id="name" name="name" type="text" required maxLength={100} className="contact-input" placeholder="Your name" />
            </div>

            <div>
                <label htmlFor="email" className="contact-input-label">Email</label>
                <input id="email" name="email" type="email" required maxLength={200} className="contact-input" placeholder="you@example.com" />
            </div>

            <div>
                <label htmlFor="message" className="contact-input-label">Message</label>
                <textarea id="message" name="message" required minLength={10} maxLength={500} rows={6} className="contact-textarea" placeholder="Tell me about your idea..." />
            </div>

            <button type="submit" className="button-primary" disabled={state.status === "sending"}>
                {state.status === "sending" ? "Sending..." : "Submit"}
            </button>

            {state.status !== "idle" ? (
                <p className={state.status === "success" ? "contact-status-success" : "contact-status-error"}>
                    {state.errorMessage}
                </p>
            ) : null}
        </form>
    );
}