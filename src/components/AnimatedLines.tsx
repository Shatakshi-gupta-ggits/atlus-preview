import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedLinesProps {
  className?: string;
  variant?: "horizontal" | "diagonal" | "wave";
  color?: "pulse" | "purple" | "muted";
}

const AnimatedLines = ({ 
  className, 
  variant = "horizontal",
  color = "pulse" 
}: AnimatedLinesProps) => {
  const colorClasses = {
    pulse: "from-pulse-500/20 via-pulse-500/10 to-transparent",
    purple: "from-purple-500/20 via-purple-500/10 to-transparent",
    muted: "from-muted-foreground/10 via-muted-foreground/5 to-transparent",
  };

  if (variant === "wave") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            className="animate-wave-path"
            d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100"
            fill="none"
            stroke={color === "pulse" ? "hsl(var(--pulse-500) / 0.2)" : color === "purple" ? "hsl(270 70% 60% / 0.2)" : "hsl(var(--muted-foreground) / 0.1)"}
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated horizontal line */}
      <div 
        className={cn(
          "absolute h-px w-full bg-gradient-to-r animate-line-slide",
          colorClasses[color],
          variant === "diagonal" ? "rotate-12 scale-150" : ""
        )}
        style={{ top: "20%" }}
      />
      <div 
        className={cn(
          "absolute h-px w-full bg-gradient-to-r animate-line-slide-reverse",
          colorClasses[color],
          variant === "diagonal" ? "-rotate-6 scale-150" : ""
        )}
        style={{ top: "50%", animationDelay: "1s" }}
      />
      <div 
        className={cn(
          "absolute h-px w-full bg-gradient-to-r animate-line-slide",
          colorClasses[color],
          variant === "diagonal" ? "rotate-3 scale-150" : ""
        )}
        style={{ top: "80%", animationDelay: "2s" }}
      />
    </div>
  );
};

export default AnimatedLines;
