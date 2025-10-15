import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutSection = () => {
  const snapshots = [
    {
      icon: "💻",
      title: "Full Stack Developer",
      desc: "Building scalable applications from frontend to backend.",
    },
    {
      icon: "⚡",
      title: "Efficient Coder",
      desc: "Writing clean, optimized, and maintainable code.",
    },
    {
      icon: "☁️",
      title: "Cloud & Deployment",
      desc: "Deploying and managing apps with modern DevOps practices.",
    },
    {
      icon: "🛠️",
      title: "Tech Explorer",
      desc: "Continuously learning new frameworks and tools.",
    },
    {
      icon: "🧩",
      title: "Problem Solver",
      desc: "Turning ideas into scalable solutions.",
    },
    {
      icon: "🤝",
      title: "Collaborative Builder",
      desc: "Thrives in teamwork to deliver impactful solutions.",
    },
  ];

  const combos = [
    { emoji: "💡", word: "Innovate" },
    { emoji: "🛠️", word: "Build" },
    { emoji: "🚀", word: "Deliver" },
    { emoji: "⚙️", word: "Optimize" },
    { emoji: "🌐", word: "Scale" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % combos.length),
      600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 bg-background text-foreground transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          <span className="text-foreground">About </span>
          <span className="gradient-text">Me</span>
        </h2>

        {/* Carousel */}
        <div className="relative mb-20 mt-8 px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-6 py-8">
              {snapshots.map((snap, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative group h-full mx-3">
                    {/* Gradient Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-variant to-accent rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-none"></div>

                    {/* Card */}
                    <Card className="relative w-[240px] h-[240px] bg-background/80 backdrop-blur-xl border-0 rounded-2xl 
                                   transform hover:-translate-y-3 transition-all duration-500 group-hover:bg-background/90
                                   hover:shadow-xl hover:shadow-primary/20 overflow-visible mx-auto">
                      <CardContent className="flex flex-col items-center text-center p-6 justify-center">
                        {/* Icon */}
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-variant rounded-full opacity-20 blur-lg scale-150"></div>
                          <div className="relative text-5xl transform group-hover:scale-125 transition-transform duration-500">
                            {snap.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-variant group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {snap.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-center max-w-[200px]">
                          {snap.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Left Button */}
            <CarouselPrevious
              className="absolute -left-14 top-1/2 -translate-y-1/2
                        w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/20
                        hover:bg-background/40 hover:border-primary/50 hover:scale-125
                        transition-all duration-500 group shadow-xl hover:shadow-primary/30
                        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                        before:from-primary before:to-primary-variant before:opacity-0 before:transition-opacity 
                        before:duration-300 hover:before:opacity-30"
            />

            {/* Right Button */}
            <CarouselNext
              className="absolute -right-14 top-1/2 -translate-y-1/2
                        w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/20
                        hover:bg-background/40 hover:border-primary/50 hover:scale-125
                        transition-all duration-500 group shadow-xl hover:shadow-primary/30
                        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                        before:from-primary before:to-primary-variant before:opacity-0 before:transition-opacity 
                        before:duration-300 hover:before:opacity-30"
            />
          </Carousel>
        </div>

        {/* Rotating Motivation */}
        <div className="flex justify-center mt-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 sm:gap-3">
            <span>{combos[current].emoji}</span>
            <span className="gradient-text">{combos[current].word}</span>
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none transition-colors duration-500"></div>
    </section>
  );
};

export default AboutSection;