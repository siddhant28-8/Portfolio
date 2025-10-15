import { GraduationCap } from "lucide-react";

const educationData = [
  {
    icon: "🎓",
    title: "B.E. in Computer Engineering",
    subtitle: "SLRTCE, Mumbai",
    period: "2020 - 2024",
    details: "CGPA: 8.99/10",
    tags: ["Full Stack Development", "Data Structures & Algorithms", "Database Systems", "OOP"],
  },
  {
    icon: "📚",
    title: "HSC (Computer Science)",
    subtitle: "VidyaVaridhi Junior College, Nalasopara East",
    period: "2018 - 2020",
    details: "Percentage: 84.60%",
    tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    icon: "🏫",
    title: "SSC",
    subtitle: "Sacred Heart High School, Nalasopara West",
    period: "2017-2018",
    details: "Percentage: 84.40%",
    tags: [],
  },
];

const experienceData = [
  {
    icon: "🖥️",
    title: "Software Engineer",
    subtitle: "Vistaar Technologies",
    period: "June 2025 – Present",
    points: [
      "Developed and automated deployment processes using PuTTY and Linux shell scripts, minimizing manual errors and deployment time.",
      "Engineered and integrated new backend features from scratch using JavaScript, contributing to core system functionality.",
      "Collaborated with cross-functional teams to ensure smooth integration of backend services with frontend modules.",
      "Implemented AWS ElastiCache for efficient session and data caching, reducing latency and database load."
    ],
    tags: ["JavaScript", "Node.js","Java", "Elasticsearch", "AWS ElastiCache", "Oracle", "PostgreSQL", "Linux", "Deployment"],
  },
  {
    icon: "💡",
    title: "Software Engineer Trainee",
    subtitle: "Vistaar Technologies",
    period: "June 2024 – may 2025",
    points: [
      "Optimized dynamic SQL queries and leveraged Elasticsearch to accelerate data retrieval, improving application responsiveness and overall system performance.",
      "Created builds and performed deployments across multiple environments, ensuring smooth and reliable releases.",
      "Identified and resolved critical backend bugs, enhancing system stability and reducing downtime.",
      "Contributed to code reviews and best practices to maintain clean, maintainable codebases."
    ],
    tags: ["JavaScript", "Node.js","Java", "Elasticsearch", "AWS ElastiCache", "Oracle", "PostgreSQL", "Linux", "Deployment"],
  },
];

const EducationExperienceSection = () => {
  return (
    <section
      id="education-experience"
      className="py-16 sm:py-20 bg-background text-foreground transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            My academic foundation and professional journey
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 relative">
          {/* Education Column */}
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

            <div className="space-y-10 sm:space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg ring-2 sm:ring-4 ring-blue-500/20">
                    <span className="block text-white text-xl sm:text-2xl">
                      {edu.icon}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="ml-6 sm:ml-8 bg-card text-card-foreground p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border flex-1 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">{edu.title}</h3>
                    <p className="text-primary font-medium sm:font-semibold mb-1 sm:mb-2">{edu.subtitle}</p>
                    <p className="text-muted-foreground text-sm sm:text-base mb-2">
                      {edu.period} {edu.details && `• ${edu.details}`}
                    </p>
                    {edu.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                        {edu.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500 animate-pulse"></div>

            <div className="space-y-10 sm:space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg ring-2 sm:ring-4 ring-green-500/20">
                    <span className="block text-white text-xl sm:text-2xl">
                      {exp.icon}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="ml-6 sm:ml-8 bg-card text-card-foreground p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border flex-1 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-green-500/30">
                    <h3 className="font-bold text-lg sm:text-xl mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium sm:font-semibold mb-1">{exp.period}</p>
                    <p className="text-muted-foreground text-sm sm:text-base mb-2">{exp.subtitle}</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1 mb-3 sm:mb-4">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
