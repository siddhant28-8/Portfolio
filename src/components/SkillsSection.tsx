import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';


import HTMLLogo from '../assets/logos/html logo.png';
import CSSLogo from '../assets/logos/css_logo.png';
import JSLogo from '../assets/logos/js logo.png';
import ReactLogo from '../assets/logos/react logo.png';
import FirebaseLogo from '../assets/logos/firebase.png';
import FigmaLogo from '../assets/logos/figma logo.png';
import GitLogo from '../assets/logos/github.png';
import JavaLogo from '../assets/logos/java logo.png';
import PythonLogo from '../assets/logos/python logo.png';
import C from '../assets/logos/C.jpg';
import Bootstrap from '../assets/logos/bootstrap_logo.jpg';
import Tailwind from '../assets/logos/tailwind_css_logo.jpg';
import EJS from '../assets/logos/EJS_logo.jpg';
import Linux from '../assets/logos/linux_logo.jpg';
import mongoDB from '../assets/logos/mongoDb.png';
import AWS from '../assets/logos/aws_image.png';
import Postgresql from '../assets/logos/postgresql.png';
import oracle from '../assets/logos/Oracle.png';
import SQL from '../assets/logos/sql.png';
import NodeLogo from '../assets/logos/nodejs.jpg';
import postman from '../assets/logos/postman.jpg';
import putty from '../assets/logos/putty.jpg';
import winscp from '../assets/logos/winscp.jpg';


const skills = [
  // 🌐 Frontend
  { name: 'HTML', category: 'Frontend', logo: HTMLLogo },
  { name: 'CSS', category: 'Frontend', logo: CSSLogo },
  { name: 'JavaScript', category: 'Frontend', logo: JSLogo },
  { name: 'React', category: 'Frontend', logo: ReactLogo },
  { name: 'Bootstrap', category: 'Frontend', logo: Bootstrap },
  { name: 'Tailwind CSS', category: 'Frontend', logo: Tailwind },
  { name: 'EJS', category: 'Frontend', logo: EJS },

  // ⚙️ Backend
  { name: 'Firebase', category: 'Backend', logo: FirebaseLogo },
  { name: 'AWS', category: 'Backend', logo: AWS },
  { name: 'Linux', category: 'Backend', logo: Linux },
  { name: 'Node.js', category: 'Backend', logo: NodeLogo },

  // 🗄️ Database
  { name: 'Oracle', category: 'Database', logo: oracle },
  { name: 'PostgreSQL', category: 'Database', logo: Postgresql },
  { name: 'MongoDB', category: 'Database', logo: mongoDB },
  { name: 'SQL', category: 'Database', logo: SQL },

  // 💻 Programming
  { name: 'Java', category: 'Programming', logo: JavaLogo },
  { name: 'Python', category: 'Programming', logo: PythonLogo },
  { name: 'C', category: 'Programming', logo: C },

  // 🎨 Design
  { name: 'Figma', category: 'Design', logo: FigmaLogo },

  // 🔧 Tools
  { name: 'Git / GitHub', category: 'Tools', logo: GitLogo },
  { name: 'Postman', category: 'Tools', logo: postman },
  { name: 'Putty', category: 'Tools', logo: putty },
  { name: 'WinSCP', category: 'Tools', logo: winscp },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Frontend':
      return 'from-blue-500 via-blue-400 to-blue-300';
    case 'Backend':
      return 'from-green-500 via-green-400 to-green-300';
    case 'Design':
      return 'from-purple-500 via-purple-400 to-purple-300';
    case 'Tools':
      return 'from-orange-500 via-orange-400 to-orange-300';
    case 'Programming':
      return 'from-red-500 via-red-400 to-red-300';
    case 'Database':
      return 'from-cyan-500 via-cyan-400 to-cyan-300';
    default:
      return 'from-muted via-muted/80 to-muted/60';
  }
};

const SkillsSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    if (isExpanded) {
      setVisibleCount(8);
      setIsExpanded(false);
    } else {
      setVisibleCount(skills.length);
      setIsExpanded(true);
    }
  };

  const visibleSkills = skills.slice(0, visibleCount);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card p-4 sm:p-6 text-center fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center mb-3 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16 mx-auto rounded-full p-2 bg-gradient-to-br from-background to-muted/20 border border-border/10 shadow-inner">
                <img
                  src={skill.logo}
                  alt= {skill.name.substring(0, 2)}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-md"
                />
              </div>


              {/* Skill Name */}
              <h3 className="font-bold text-sm sm:text-base mb-2 text-card-foreground">
                {skill.name}
              </h3>

              {/* Category Badge */}
              <span
                className={`inline-block text-xs px-2 py-1 rounded-full text-white font-medium bg-gradient-to-r ${getCategoryColor(
                  skill.category
                )} shadow-sm`}
              >
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {skills.length > 8 && (
          <div className="flex justify-center">
            <Button
              onClick={handleLoadMore}
              className="load-more-btn group"
              size="lg"
            >
              <span className="mr-2">
                {isExpanded ? 'Show Less' : `Load More (${skills.length - visibleCount} remaining)`}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              )}
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
              {skills.filter(s => s.category === 'Frontend').length}+
            </div>
            <div className="text-sm text-muted-foreground">Frontend Technologies</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
              {skills.filter(s => s.category === 'Backend').length}+
            </div>
            <div className="text-sm text-muted-foreground">Backend Solutions</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
              {skills.filter(s => s.category === 'Database').length}+
            </div>
            <div className="text-sm text-muted-foreground">Database Systems</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
              {skills.filter(s => s.category === 'Tools').length}+
            </div>
            <div className="text-sm text-muted-foreground">Development Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;