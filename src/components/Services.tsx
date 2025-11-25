import React from "react";
import { Button } from "@/components/ui/button";
import { Bot, Code, Plug, Users, Wrench, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automation",
    description: "Streamline your operations with intelligent robotics automation solutions that increase efficiency and reduce costs.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Custom robotics software and hardware development tailored to your specific business needs and requirements.",
  },
  {
    icon: Plug,
    title: "Integration",
    description: "Seamlessly integrate robotic systems into your existing workflows and infrastructure for maximum productivity.",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Expert guidance and strategic planning to help you leverage robotics technology for competitive advantage.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Comprehensive support and maintenance services to keep your robotic systems running at peak performance.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Professional training programs to equip your team with the skills needed to work alongside advanced robotics.",
  },
];

const Services = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>Services</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Comprehensive Robotics Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From concept to deployment, we provide end-to-end robotics services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-elegant transition-all duration-300 animate-on-scroll border border-gray-100 hover:border-pulse-500/20"
              >
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pulse-500 to-pulse-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  className="w-full sm:w-auto bg-pulse-500 hover:bg-pulse-600 text-white"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
