export default function About() {    
    return (
        <main className="flex gap-8">
            <aside className="w-48">
                <h3 className="font-bold mb-4">Sections</h3>
                <nav className="space-y-2">
                    <a href="#introduction" className="block hover:undeline">
                        Introduction
                    </a>
                    <a href="#work-experience" className="block hover:underline">
                        Work Experience
                    </a>
                    <a href="#skills" className="block hover:underline">
                        Skills
                    </a>
                </nav>
            </aside>

            <article className="flex-1">
                <h1>About me</h1>

                <section id="introduction" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p>
                        I am a passionate software developer with a love for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and continuously learning new technologies.
                    </p>
                </section>

                <section id="work-experience" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                    <p>Add your work experience here.</p>
                </section>

                <section id="skills" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <p>Add your skills here.</p>
                </section>
            </article>
        </main>
    );    
}