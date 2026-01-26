import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import ParticlesBackground from "./ParticlesBackground";
import AnimatedLines from "./AnimatedLines";
import { usePersona } from "@/contexts/PersonaContext";

const heroContent = {
  freelancer: {
    badge: "01",
    badgeText: "Purpose",
    title: "Hi, I'm Shatakshi",
    highlight: "Full-Stack Developer",
    subtitle: "& AI Expert",
    description: "Transforming ideas into powerful applications. Specialized in AI integration, cloud architecture, and scalable solutions.",
    primaryCTA: "Hire Me",
    primaryLink: "#contact",
    secondaryCTA: "View Projects",
    secondaryLink: "#projects",
    accentColor: "pulse",
  },
  tutor: {
    badge: "01",
    badgeText: "Learn",
    title: "Hi, I'm Shatakshi",
    highlight: "Coding Mentor",
    subtitle: "& Tech Educator",
    description: "Helping aspiring developers master programming, crack interviews, and build successful careers in tech.",
    primaryCTA: "Book a Session",
    primaryLink: "#tutoring",
    secondaryCTA: "View Courses",
    secondaryLink: "#courses",
    accentColor: "purple",
  },
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { persona } = usePersona();

  const content = heroContent[persona || "freelancer"];
  const isPurple = content.accentColor === "purple";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-background" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      {/* Animated line background */}
      <AnimatedLines variant="diagonal" color={isPurple ? "purple" : "pulse"} />
      
      {/* Background gradient overlay for dark mode */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br to-background",
        isPurple 
          ? "from-purple-500/5 via-background dark:from-purple-500/10" 
          : "from-pulse-500/5 via-background dark:from-pulse-500/10"
      )} />
      
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className={cn(
        "absolute -top-[10%] -right-[5%] w-1/2 h-[70%] opacity-20 dark:opacity-10 blur-3xl rounded-full",
        isPurple ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-pulse-gradient"
      )}></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className={cn(
                "pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in",
                isPurple && "bg-purple-500/10 border-purple-500/20"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              <span className={cn(
                "inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2",
                isPurple ? "bg-purple-500" : "bg-pulse-500"
              )}>{content.badge}</span>
              <span className={isPurple ? "text-purple-500" : ""}>{content.badgeText}</span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in font-display font-bold tracking-tight text-foreground" 
              style={{ animationDelay: "0.3s" }}
            >
              {content.title}<br className="hidden sm:inline" />
              <span className={isPurple ? "text-purple-500" : "text-pulse-500"}>{content.highlight}</span> {content.subtitle}
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-muted-foreground font-normal text-base sm:text-lg text-left max-w-xl"
            >
              {content.description}
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href={content.primaryLink} 
                className={cn(
                  "flex items-center justify-center group w-full sm:w-auto text-center text-white rounded-full px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  isPurple ? "bg-purple-500 hover:bg-purple-600" : "bg-pulse-500 hover:bg-pulse-600"
                )}
              >
                {content.primaryCTA}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={content.secondaryLink} 
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-secondary hover:bg-secondary/80 text-foreground rounded-full px-8 py-4 font-medium transition-all duration-300 hover:scale-105 border border-border"
              >
                {content.secondaryCTA}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {/* Hero icon based on persona */}
            <div className="relative z-10 animate-fade-in flex items-center justify-center" style={{ animationDelay: "0.9s" }}>
              <div className={cn(
                "w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center relative",
                isPurple 
                  ? "bg-gradient-to-br from-purple-500/20 via-purple-400/10 to-pink-500/20" 
                  : "bg-gradient-to-br from-pulse-500/20 via-pulse-400/10 to-orange-500/20"
              )}>
                {/* Animated rings */}
                <div className={cn(
                  "absolute inset-4 rounded-full border-2 animate-pulse",
                  isPurple ? "border-purple-500/30" : "border-pulse-500/30"
                )} />
                <div className={cn(
                  "absolute inset-8 rounded-full border-2 animate-pulse",
                  isPurple ? "border-purple-500/20" : "border-pulse-500/20"
                )} style={{ animationDelay: "0.5s" }} />
                <div className={cn(
                  "absolute inset-12 rounded-full border-2 animate-pulse",
                  isPurple ? "border-purple-500/10" : "border-pulse-500/10"
                )} style={{ animationDelay: "1s" }} />
                
                {/* Center icon */}
                <div className={cn(
                  "w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shadow-2xl",
                  isPurple 
                    ? "bg-gradient-to-br from-purple-500 to-purple-600" 
                    : "bg-gradient-to-br from-pulse-500 to-pulse-600"
                )}>
                  {isPurple ? (
                    <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  ) : (
                    <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10 parallax",
        isPurple ? "bg-purple-100/30 dark:bg-purple-500/10" : "bg-pulse-100/30 dark:bg-pulse-500/10"
      )} data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
