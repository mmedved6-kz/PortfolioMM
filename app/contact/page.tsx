import Image from "next/image";
import { contact } from "@/lib/contact";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
    return (
        <main className="space-y-4">
            <section className="surface p-8 md:p-12 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase">Contact</h1>
                <p className="text-muted mt-4 max-w-2xl mx-auto">
                    I am always open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <article className="surface p-6 md:p-8">
                    <h2 className="text-2xl font-semibold">Contact Me</h2>
                    <p className="text-muted mt-2">
                        Share your idea, role or collaboration request. I usually respond within 24-48 hours.
                    </p>
                    <ContactForm />
                </article>

                <article className="surface p-6 md:p-8">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="text-muted mt-2">
                        Prefer direct channels? You can find me here:
                    </p>

                    <ul className="mt-6 space-y-4">
                        <li className="contact-detail-row">
                            <Image src="/mailto.svg" alt="" aria-hidden="true" width={30} height={30} className="contact-link-icon flex-shrink-0" />
                            <div className="flex-grow">
                                <p className="contact-detail-label">Email</p>
                                <a href={`mailto:${contact.email}`} className="link-theme break-all text-sm">
                                    {contact.email}
                                </a>
                            </div>
                        </li>

                        <li className="contact-detail-row">
                            <Image src="/github-svg.svg" alt="" aria-hidden="true" width={30} height={30} className="contact-link-icon flex-shrink-0" />
                            <div className="flex-grow">
                                <p className="contact-detail-label">GitHub</p>
                                <a href={contact.github} target="_blank" rel="noreferrer" className="link-theme text-sm">
                                    {contact.githubHandle}
                                </a>
                            </div>
                        </li>

                        <li className="contact-detail-row">
                            <Image src="/linkedin-svg.svg" alt="" aria-hidden="true" width={30} height={30} className="contact-link-icon flex-shrink-0" />
                            <div className="flex-grow">
                                <p className="contact-detail-label">LinkedIn</p>
                                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-theme text-sm">
                                    {contact.linkedinLabel}
                                </a>
                            </div>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    );
}
