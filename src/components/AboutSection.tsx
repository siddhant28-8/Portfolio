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
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background text-foreground transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="text-foreground">About </span>
          <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Carousel - Responsive Container */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 mt-8">
          <div className="px-8 sm:px-16 md:px-20 lg:px-28">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-5 py-6 sm:py-8">
                {snapshots.map((snap, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 sm:pl-4 md:pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative group h-full">
                      {/* Gradient Border */}
                      <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/5 via-primary to-accent/5 rounded-xl opacity-60 sm:opacity-75 group-hover:opacity-100 transition duration-500 blur-[2px] group-hover:blur-none"></div>

                      {/* Card */}
                      <Card className="relative w-full aspect-square bg-background/80 backdrop-blur-xl border-0 rounded-xl 
                                     transform hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-500 group-hover:bg-background/90
                                     hover:shadow-xl hover:shadow-primary/20 overflow-hidden mx-auto max-w-[220px]">
                        <CardContent className="flex flex-col items-center text-center p-4 sm:p-5 justify-center h-full">
                          {/* Icon */}
                          <div className="relative mb-2 sm:mb-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg scale-150"></div>
                            <div className="relative text-3xl sm:text-4xl transform group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-500">
                              {snap.icon}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-sm sm:text-base mb-1.5 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {snap.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-center max-w-[180px]">
                            {snap.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
              <div>
                <CarouselPrevious
                  className="absolute -left-10 md:-left-14 lg:-left-20 top-1/2 -translate-y-1/2
                            w-11 h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 rounded-full bg-background/30 backdrop-blur-xl border border-primary/20
                            hover:bg-background/50 hover:border-primary/60 hover:scale-110
                            transition-all duration-300 shadow-lg hover:shadow-primary/40
                            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                            before:from-primary before:to-accent before:opacity-0 before:transition-opacity 
                            before:duration-300 hover:before:opacity-20"
                />

                <CarouselNext
                  className="absolute -right-10 md:-right-14 lg:-right-20 top-1/2 -translate-y-1/2
                            w-11 h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 rounded-full bg-background/30 backdrop-blur-xl border border-primary/20
                            hover:bg-background/50 hover:border-primary/60 hover:scale-110
                            transition-all duration-300 shadow-lg hover:shadow-primary/40
                            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                            before:from-primary before:to-accent before:opacity-0 before:transition-opacity 
                            before:duration-300 hover:before:opacity-20"
                />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Rotating Motivation */}
        <div className="flex justify-center mt-8 sm:mt-10 px-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{combos[current].emoji}</span>
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {combos[current].word}
            </span>
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none transition-colors duration-500"></div>
    </section>
  );
};

export default AboutSection;
