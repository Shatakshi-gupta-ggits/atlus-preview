import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Video, Clock, Star, CheckCircle, Code, Trophy, Target } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AnimatedLines from "./AnimatedLines";

const quickStats = [
  {
    icon: Code,
    value: "200+",
    label: "LeetCode Problems",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Target,
    value: "1000",
    label: "GFG Rank",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Hackathons Won",
    color: "from-purple-500 to-pink-500",
  },
];

const tutoringFeatures = [
  {
    icon: Video,
    title: "1-on-1 Live Sessions",
    description: "Personalized video sessions tailored to your learning pace and goals.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Comprehensive learning paths from beginner to advanced levels.",
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Collaborative learning experiences with fellow developers.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at your convenience across any timezone.",
  },
];

const subjects = [
  "React & Next.js",
  "Node.js & Express",
  "Python & FastAPI",
  "AI/ML Integration",
  "Docker & Kubernetes",
  "System Design",
  "Data Structures",
  "Cloud Architecture",
];

const Tutoring = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden" id="tutoring">
      {/* Animated line background */}
      <AnimatedLines variant="diagonal" color="purple" />
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip bg-purple-500/10 border-purple-500/20">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white mr-2">08</span>
              <span className="text-purple-500">Tutoring</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Learn From Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Accelerate your development journey with personalized mentorship and hands-on guidance.
          </p>
        </div>

        {/* Quick Stats Section */}
        <div
          ref={statsRef}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700",
            statsVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border p-6 text-center hover:border-purple-500/30 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                  stat.color
                )} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4",
                    stat.color
                  )}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          ref={contentRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700",
            contentVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          {/* Left - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Why Learn With Me?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tutoringFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card p-5 rounded-xl border border-border hover:border-purple-500/30 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 mb-3 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-elegant relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                <Star className="w-3 h-3" />
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Personal Mentorship
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized guidance on your development journey
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-display font-bold text-foreground">$75</span>
              <span className="text-muted-foreground">/hour</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>1-on-1 video sessions</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>Code review & feedback</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>Project guidance</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>Career advice & mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>Slack/Discord support</span>
              </div>
            </div>

            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg py-6 transition-all duration-300 hover:scale-105">
              Book a Session
            </Button>

            {/* Subjects List */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Topics I Cover:</h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-colors duration-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutoring;
