"use client";

import { useState } from "react";
import { motion } from "framer-motion";


type Project = {
    title: string;
    description: string;
    category: string;
    links?: { label: string; url: string }[];
    techStack: string[];
};

const projects: Project[] = [

    {
        title: "NullBankApp",
        description:
            "NullbankApp (Desktop) is a mock banking application developed using .NET - WinForms. This application demonstrates basic CRUD operations on Local MSSQL Server and API operations using CollectAPI.",
        category: "All",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/NullBankApp" }
        ],
        techStack: [".NET", "WinForms", "C#", "API Management", "MSSQL"]
    },
    {
        title: "ConsumeSpotifyWebAPI",
        description:
            "This simple project is an MVC-based application that interacts with the Spotify Web API to retrieve and display music data. The application demonstrates how to consume external APIs, manage asynchronous operations, and present dynamic content using Razor Views in ASP.NET Core MVC.",
        category: "All",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/ConsumeSpotifyWebAPI" }
        ],
        techStack: [".NET", "C#", "API Management", "Javascript", "Razor"]
    },
    {
        title: "SnailAlwaysTrails-LD50Game",
        description:
            "Simple game with hand-drawn assets for Ludum Dare 50th Game Jam.",
        category: "Passion Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/SnailAlwaysTrails-LD50Game" }
        ],
        techStack: ["C#", "ShaderLab", "Unity", "Game Development"]
    },
    {
        title: "StickyDefense",
        description:
            "Simple Unity 2D tower defense game with stickman theme.",
        category: "Passion Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/StickyDefense" }
        ],
        techStack: ["Unity", "C#"]
    },
    {
        title: "JapaneseExerciser",
        description:
            "Simple python code for mimicking memory cards for Japanese Kanji and with their meanings.",
        category: "Passion Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/JapaneseExerciser" }
        ],
        techStack: ["Python"]
    },
    {
        title: "Zoom-Poll-Evaluator",
        description:
            "Zoom Poll Evaluator evaluates poll answers answered by participants and computes attendance ratios for Zoom sessions.",
        category: "Course Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/Zoom-Poll-Evaluator" }
        ],
        techStack: ["Python", "CSE3063 - Object Oriented Software Design"]
    },
    {
        title: "Data-Labeling-System",
        description:
            "This project's main idea is to label data by using some in-built mechanisms. Those mechanism are manual mechanism,random mechanism, keyword based mechanism and auto label mechanism.",
        category: "Course Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/Data-Labeling-System" }
        ],
        techStack: ["Java", "CSE3063 - Object Oriented Software Design"]
    },
    {
        title: "EAPSCO-Web-Application",
        description:
            "A web application created with Spring Boot for backend, MsSQL database for storing information and ReactJS for frontend . The main idea of the project is to handle CRUD operations on a website for an imaginary company called Energy And Power Systems Corporate Office.",
        category: "Course Projects",
        links: [
            { label: "GitHub", url: "https://github.com/caganoduncuoglu/EAPSCO-Web-Application" }
        ],
        techStack: ["Javascript", "Java", "SpringBoot", "MsSQL"]
    }
];

export default function ProjectSection() {
    const [active, setActive] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const categories = ["All", "Passion Projects", "Course Projects"];

    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

    return (
        <section id="projects" className="relative z-10 py-16">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto text-left ">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Personal Projects</h2>

                    <div className="flex gap-4 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActive(cat);
                                    setShowAll(false);
                                }}
                                className={`px-4 py-1 rounded-full text-sm font-medium transition ${active === cat
                                    ? "bg-white/20 text-white"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {visibleProjects.map((proj, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-lg p-6 shadow-xl">
                                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                                <p className="text-sm opacity-90 mb-4">{proj.description}</p>

                                <div className="flex gap-3 mb-4">
                                    {proj.links?.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-black/40 text-white rounded-md text-xs hover:bg-black/60"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {proj.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-white/20 text-xs px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length > 3 && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-5 py-2 bg-white/10 text-white text-sm rounded-md hover:bg-white/20 transition"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
