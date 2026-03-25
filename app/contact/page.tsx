import Image from "next/image";
import { contact, getContactMailto } from "@/lib/contact";

export default function ContactPage() {
    const mailtoLink = getContactMailto(
        "Contact from Portfolio",
        "Hello, I would like to get in touch with you."
    );

    return (
        <main className="space-y-4">
            <section className="surface p-6 md:p-8">
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="text-muted mt-2">
                    I am always open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <article className="surface p-6 md:p-8">
                    <h2 className="text-xl font-semibold">Best way to reach me</h2>
                    <a href={mailtoLink} className="button-primary inline-block mt-4">
                        <Image src="/mailto.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon contact-link-icon-inverted" />
                        {/*<span>Email Me</span> */}
                    </a>
                    <p className="mt-3 text-sm text-muted break-all">{contact.email}</p>
                </article>

                <article className="surface p-6 md:p-8">
                    <h2 className="text-xl font-semibold">Find me on</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <a 
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium link-theme"
                        >
                            <Image src="/github-svg.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon" />
                            {/*<span>GitHub</span> */}
                        </a>
                        <a 
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium link-theme"
                        >
                            <Image src="/linkedin-svg.svg" alt="" aria-hidden="true" width={24} height={24} className="contact-link-icon" />
                            {/*<span>LinkedIn</span> */}
                        </a>
                    </div>
                    <p className="mt-3 text-sm text-muted">I typically respond within 24-48 hours.</p>
                </article>
            </section>
        </main>
    );
}
