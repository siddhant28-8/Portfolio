import { Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/siddhant2002/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/siddhant28-8",
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/siddhant8287",
      color: "hover:text-pink-400",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="font-playfair font-bold text-xl sm:text-2xl hover:text-primary transition-colors cursor-pointer"
          >
           <span className="bg-gradient-primary bg-clip-text text-transparent">
  Siddhant{" "}
  <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent font-semibold drop-shadow-md">
    Rakesh
  </span>{" "}
  Rai
</span>


          </button>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-muted-foreground transition-all duration-300 ${link.color} glow-hover rounded-lg`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-1 text-xs sm:text-sm italic">
    My strength, my guide, my inspiration -{" "}
    <span className="font-semibold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
      Dad
    </span>
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
