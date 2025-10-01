"use client";

import {
    SiSharp,
    SiTypescript,
    SiC,
    SiPython,
    SiDotnet,
    SiReact,
    SiUnity,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiGooglecloud,
    SiDocker,
    SiGit,
    SiJira,
    SiSonarqube,
} from "react-icons/si";

type StackItem = {
    label: string;
    icon?: React.ReactNode;
};

const stack = {
    Languages: [
        { label: "C#", icon: <SiSharp /> },
        { label: "Java", },
        { label: "TypeScript", icon: <SiTypescript /> },
        { label: "C", icon: <SiC /> },
        { label: "Python", icon: <SiPython /> },
    ],
    "Frameworks & Libraries": [
        { label: ".NET / .NET Core", icon: <SiDotnet /> },
        { label: "ASP.NET MVC", icon: <SiDotnet /> },
        { label: "Entity Framework" }, // no icon
        { label: "React", icon: <SiReact /> },
        { label: "WPF" }, // no icon
        { label: "Unity", icon: <SiUnity /> },
    ],
    "Databases & Messaging": [
        { label: "MS SQL Server" },
        { label: "PostgreSQL", icon: <SiPostgresql /> },
        { label: "MySQL", icon: <SiMysql /> },
        { label: "RealmDB" }, // no icon
        { label: "IBM Maximo" }, // no icon
        { label: "RabbitMQ" }, // no icon
        { label: "Redis", icon: <SiRedis /> },
    ],
    "Cloud & DevOps": [
        { label: "Azure" },
        { label: "GCP (Cloud Functions)", icon: <SiGooglecloud /> },
        { label: "Docker", icon: <SiDocker /> },
        { label: "Rancher" }, // no icon
        { label: "CI/CD Pipelines" }, // no icon
    ],
    "Tools & Practices": [
        { label: "Git", icon: <SiGit /> },
        { label: "TFS" }, // no icon
        { label: "Jira", icon: <SiJira /> },
        { label: "SonarQube", icon: <SiSonarqube /> },
        { label: "Agile/Scrum" }, // no icon
        { label: "Unit Testing" }, // no icon
        { label: "Microservices" }, // no icon
        { label: "SAGA" }, // no icon
    ],
};

export default function MyStack() {
    return (
        <section id="techstack" className="relative z-10 py-16">
            <div className="max-w-7xl mx-auto" >
                <h2 className="text-3xl md:text-4xl font-bold mb-10">My Stack</h2>

                <div className="space-y-10 max-w-7xl">
                    {Object.entries(stack).map(([category, items]) => (
                        <div key={category} className="grid md:grid-cols-5 gap-6">
                            {/* Left side category */}
                            <div className="md:col-span-1">
                                <h3 className="text-lg text-left font-semibold">{category}</h3>
                            </div>

                            {/* Right side pills */}
                            <div className="md:col-span-4 flex flex-wrap gap-3">
                                {items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 bg-white/5 text-gray-200 px-4 py-2 rounded-full text-base font-medium border border-white/10 cursor-default hover:bg-white/10 transition">
                                        {item.icon && <span className="text-lg">{item.icon}</span>}
                                        {item.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
