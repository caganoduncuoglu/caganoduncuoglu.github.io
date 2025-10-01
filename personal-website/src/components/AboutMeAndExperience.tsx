"use client";

import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaFileAlt,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceProps = {
    role: string;
    company: string;
    location: string;
    date: string;
    details: string[];
    techStack: string[];
};

function ExperienceItem({
    role,
    company,
    location,
    date,
    details,
    techStack,
}: ExperienceProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-lg p-6 shadow-xl">
            {/* Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div>
                    <h3 className="font-semibold text-lg">{role}</h3>
                    <p className="text-sm opacity-80">
                        {company} • {location}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm opacity-70">{date}</span>
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>

            {/* Content */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3"
                    >
                        {details.map((d, i) => (
                            <p key={i} className="text-sm opacity-90 leading-relaxed">
                                • {d}
                            </p>
                        ))}

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-white/20 text-xs px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function AboutExperienceSection() {
    return (
        <section id="aboutme" className="relative z-10 py-16 bg-transparent">
            <div className="max-w-7xl mx-auto text-left">
                {/* ABOUT */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg md:text-xl mb-4">
                    Software Engineer with 3+ years of experience developing scalable
                    solutions in .NET Core, React TypeScript, and SQL Server, with a
                    strong focus on microservice architectures and enterprise
                    applications. Experienced in performance tuning, API integrations, and
                    business process optimization, as well as Docker, Rancher, SonarQube,
                    and unit testing to ensure reliability and high code quality.
                    Passionate about technology, games, and creative projects, and
                    motivated to grow through cloud technologies and Unity game
                    development.
                </p>
                <p className="text-lg md:text-xl mb-6">Let's connect!</p>

                {/* ICONS */}
                <div className="flex gap-6 text-3xl mb-12">
                    <a
                        href="https://github.com/caganoduncuoglu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/cagan-oduncuoglu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="/melik-cagan-oduncuoglu-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt />
                    </a>
                </div>

                {/* EXPERIENCE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
                <div className="space-y-6">
                    <ExperienceItem
                        role="Software Engineer"
                        company="Siyeso"
                        location="Istanbul, TR"
                        date="2024 - Present"
                        details={[
                            "Led development efforts in large-scale banking projects, delivering solutions in both microservice-based andmonolithic architectures using .NET Core, React TypeScript, and applying established Design Patterns to ensurescalable and maintainable code.",
                            "Optimized SQL Server queries and designed scalable, microservice-compatible schemas across multiple databases,significantly improving performance and reliability.",
                            "Achieved over 90% unit test coverage and enforced code quality with SonarQube.",
                            "Utilized Docker and Rancher containers to test asynchronous scenarios with RabbitMQ, ensuring reliableevent-driven communication.",
                            "Managed Agile delivery in Scrum using Jira, ensuring projects were completed within deadlines.",
                            "Extended and integrated RESTful APIs and implemented distributed workflows with SAGA patterns.",
                            "Configured CI/CD pipelines with TFS and Git, enabling smoother development cycles and higher release velocity",
                            "Actively participated in alpha testing and environment validations with direct customer interaction, providing feedbackloops that reduced post-release issues.",
                        ]}
                        techStack={[
                            ".NET Core",
                            "Microservices",
                            "TypeScript",
                            "RabbitMQ",
                            "Azure DevOps",
                            "TFS", "Git",
                            "Jira",
                            "SQL Server",
                            "React",
                            "Docker",
                            "SonarQube",
                        ]}
                    />
                    <ExperienceItem
                        role="Software Engineer"
                        company="LAYERMARK"
                        location=" Ankara, TR / Washington D.C."
                        date="2022 - 2024"
                        details={[
                            "Led end-to-end development of robust WPF desktop applications using the .NET Framework, delivering bothfrontend and backend components with emphasis on object-oriented design, scalability, and maintainability.",
                            "Collaborated with international clients, ensuring clear requirement gathering and delivering high client satisfaction.",
                            "Integrated IBM Maximo, and ARCGIS maps with DevExpress tools to enhance data management and visualization.",
                            "Applied Agile (Scrum) methodologies to manage tasks efficiently and deliver projects on time."
                        ]}
                        techStack={[".NET Framework", "WPF", "C#", "SQL Server", "DevExpress", "IBM Maximo", "ARCGIS", "Agile", "Scrum"]}
                    />
                    <ExperienceItem
                        role="Software Engineer Intern"
                        company="Tigris Smart Technologies"
                        location="TR / Remote"
                        date="2022"
                        details={[
                            "Developed desktop applications using the .NET Framework, focusing on efficiency and usability.",
                            "Designed intuitive UI components and implemented core services to improve functionality and user experience.",
                            "Demonstrated strong problem-solving and rapid learning ability by delivering functional prototypes within a shortinternship period.",
                            "Collaborated with a small team to understand project requirements and contribute effectively to development tasks.",
                            "Gained practical experience in software development lifecycle and best practices."
                        ]}
                        techStack={[".NET Framework", "C#", "UI/UX", "Git", "Agile"]}
                    />
                </div>
            </div>
        </section>
    );
}
