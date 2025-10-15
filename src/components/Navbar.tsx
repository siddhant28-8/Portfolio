import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext"; // your theme context

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education-experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 3
        ) {
          current = item.label;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu on click
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
      <div className="flex items-center justify-between px-4 py-2 rounded-full 
                      border border-blue-500/40 
                      bg-white/5 dark:bg-black/20 
                      backdrop-blur-xl shadow-lg 
                      transition-all duration-300">

        {/* Logo / Name (optional) */}
        {/* <span className="font-bold text-lg text-gray-800 dark:text-gray-200">VRR</span> */}

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 relative">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-500
                  ${
                    active === item.label
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-white"
                  }`}
              >
                {active === item.label && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-80 animate-pulse"></span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
                  </>
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-background/30 backdrop-blur-md border border-border/30 hover:scale-110 transition-transform"
        >
          {isDark ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-blue-400" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-2 rounded-2xl border border-blue-500/40 bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors
                    ${
                      active === item.label
                        ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-500/30"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
