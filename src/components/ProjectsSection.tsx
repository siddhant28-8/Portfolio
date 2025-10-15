import { useState } from "react";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Worker Handymann Solution",
      description:
        "A responsive web platform connecting homeowners with service providers, featuring real-time booking, authentication, and reviews.",
      techStack: [
        "HTML",
        "CSS",
        "EJS",
        "Bootstrap",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Payment Gateway",
        "Sessions"
      ],
      video: "/videos/Worker_Handymann_Solution.mp4",
      category: "Web Development",
      githubLink: "https://github.com/siddhant28-8/Worker_Handymann_Solution",
    },
    {
      title: "College Selection System",
      description:
        "An intelligent platform that recommends colleges based on student preferences, eligibility, and ranking criteria.",
      techStack: [
        "HTML",
        "CSS",
        "EJS",
        "Bootstrap",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: "/images/college.png",
      category: "Web Development",
      githubLink: "https://github.com/siddhant28-8/College_Selection_System",
    },
    {
      title: "Weather App",
      description:
        "A lightweight app delivering real-time weather updates with dynamic visuals and city-based search.",
      techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
      image: "/images/weather.png",
      category: "Web Development",
      githubLink: "https://github.com/siddhant28-8/Weather_app",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "AI / Automation":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "UI/UX Design":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gradient-card p-5 sm:p-6 rounded-xl border border-border/50 fade-in fade-in-delay-1 group"
            >
              {/* Project Image / Video */}
              <div className="mb-5 sm:mb-6 rounded-lg overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-48 sm:h-56 object-cover rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-56 object-cover rounded-md shadow-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 sm:h-56 bg-primary/10 text-6xl sm:text-7xl rounded-md">
                    ?
                  </div>
                )}
              </div>

              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${getCategoryColor(
                  project.category
                )}`}
              >
                {project.category}
              </span>

              {/* Project Title */}
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-card-foreground">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 justify-center">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-3 py-2 border border-primary/20 text-primary text-sm rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 w-full sm:w-auto bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;