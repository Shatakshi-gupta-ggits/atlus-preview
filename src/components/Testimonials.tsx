import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";
import AnimatedLines from "./AnimatedLines";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  persona: "freelancer" | "tutor" | "both";
}

const freelancerTestimonials: TestimonialProps[] = [
  {
    content: "Shatakshi transformed our production line, handling complex AI integrations while our team focuses on innovation. 30% increase in output within three months.",
    author: "Sarah Chen",
    role: "VP of Operations, Axion Manufacturing",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png",
    persona: "freelancer",
  },
  {
    content: "The web application she built reduced our workplace inefficiencies by 40% while improving user experience. Her technical expertise is remarkable.",
    author: "Michael Rodriguez",
    role: "Director of Technology, GlobalShip",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png",
    persona: "freelancer",
  },
  {
    content: "Her AI solutions adapted to our protocols faster than any system we've used. It's like having another engineer who delivers with perfect precision.",
    author: "Dr. Amara Patel",
    role: "Lead Scientist, BioAdvance Research",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png",
    persona: "freelancer",
  },
  {
    content: "As a mid-size business, we never thought advanced AI would be accessible to us. Shatakshi changed that equation entirely with her versatility.",
    author: "Jason Lee",
    role: "CEO, Innovative Solutions Inc.",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png",
    persona: "freelancer",
  },
];

const tutorTestimonials: TestimonialProps[] = [
  {
    content: "Shatakshi's teaching style made complex DSA concepts click for me. I went from struggling with LeetCode easy to solving mediums confidently in just 2 months!",
    author: "Priya Sharma",
    role: "Software Engineer at Google",
    gradient: "from-purple-700 via-violet-800 to-indigo-900",
    backgroundImage: "/background-section2.png",
    persona: "tutor",
  },
  {
    content: "Her mentorship helped me crack my dream job interview. The system design sessions were incredibly practical and aligned with real-world scenarios.",
    author: "Rahul Verma",
    role: "SDE II at Amazon",
    gradient: "from-green-700 via-emerald-800 to-teal-900",
    backgroundImage: "/background-section3.png",
    persona: "tutor",
  },
  {
    content: "Best investment I made in my career. Her 1-on-1 sessions are focused, patient, and she breaks down complex topics into digestible pieces.",
    author: "Ananya Gupta",
    role: "Full Stack Developer at Microsoft",
    gradient: "from-pink-700 via-rose-800 to-red-900",
    backgroundImage: "/background-section1.png",
    persona: "tutor",
  },
  {
    content: "From a complete beginner to landing my first tech internship - Shatakshi's structured curriculum and constant support made it possible.",
    author: "Karthik Reddy",
    role: "Intern at Meta",
    gradient: "from-blue-700 via-cyan-800 to-teal-900",
    backgroundImage: "/background-section2.png",
    persona: "tutor",
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
}: TestimonialProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden cursor-pointer group"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10 transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20 transition-transform duration-300 group-hover:scale-[1.02]">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const { persona } = usePersona();

  // Get testimonials based on persona
  const testimonials = persona === "tutor" ? tutorTestimonials : freelancerTestimonials;
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);
  
  const sectionTitle = persona === "tutor" ? "Student Success Stories" : "Client Testimonials";
  const chipColor = persona === "tutor" ? "bg-purple-500" : "bg-pulse-500";

  return (
    <section className="py-12 bg-background relative overflow-hidden" id="testimonials" ref={sectionRef}>
      {/* Animated line background */}
      <AnimatedLines variant="horizontal" color={persona === "tutor" ? "purple" : "pulse"} />
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${chipColor} text-white mr-2`}>
              04
            </span>
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left text-foreground">{sectionTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
              backgroundImage={testimonial.backgroundImage}
              persona={testimonial.persona}
            />
          ))}
        </div>

        {testimonials.length > 2 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className={`${persona === "tutor" ? "bg-purple-500 hover:bg-purple-600" : "bg-pulse-500 hover:bg-pulse-600"} text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105`}
              size="lg"
            >
              {showAll ? "Show Less" : "View More Testimonials"}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
