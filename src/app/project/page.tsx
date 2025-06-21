import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectPage() {
    const projects = [
        {
            id: 1,
            title: "Meta Quest Casting",
            description: "Developed Meta Quest casting features letting users share their VR experiences with friends and family driving the growth and popularity.",
            image: "/project/meta-casting.png?height=200&width=300",
            technologies: ["React Native", "React", "Kotlin", "TypeScript", "GraphQL"],
            link: "https://www.meta.com/help/quest/192719842695017/",
        },
        {
            id: 2,
            title: "Amazon Style Store",
            description: "Launched Amazon’s first-ever physical stores for fashion delivering personalized shopping experience.",
            image: "/project/amazon-style.jpg?height=200&width=300",
            technologies: ["Kotlin", "Ktor", "React", "Python", "AWS"],
            link: "https://www.aboutamazon.com/news/retail/amazon-reimagines-in-store-shopping-with-amazon-style",
        },
        {
            id: 3,
            title: "Multi-OnHold Logic Applier",
            description: "Designed and implemented a country-specific logic module within the order management system’s data pipeline, resulting in a 2% reduction in seller fees.",
            image: "/project/multi-on-hold.jpg?height=200&width=300",
            technologies: ["Next.js", "Vercel", "v0"],
            link: "https://www.iherb.com/",
        },
        {
            id: 4,
            title: "surfer-kim Blog",
            description: "Developed a modern, high-performance personal blog leveraging Next.js for server-side rendering and static site generation, utilizing v0.dev to rapidly prototype and design components, streamlining the development process and maintaining consistent, responsive design patterns throughout the site.",
            image: "/project/surfer-kim-blog.jpeg?height=200&width=300",
            technologies: ["Next.js", "Vercel", "v0"],
            link: "https://surfer-kim-blog.vercel.app",
        },
        {
            id: 5,
            title: "Sentiment Analysis of Korean Teenagers’ Language",
            description: "Developed a Korean sentiment dictionary tailored for teenage language using KoNLPy, and designed a text sentiment analysis algorithm based on the N-Gram model to compute sentiment scores from sentences.",
            image: "/project/sentiment-analysis.jpg?height=200&width=300",
            technologies: [".NET", "Python", "NLP", "PowerBI"],
            link: "https://link.springer.com/chapter/10.1007/978-981-13-3648-5_63",
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <div className="bg-white rounded-lg border shadow-sm">
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="aspect-video">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-gray-900">{project.title}</h3>
                                            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 border border-gray-200 text-gray-600 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
