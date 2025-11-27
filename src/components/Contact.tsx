import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Instagram, Twitter, Github, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shatakshi1", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/Shatakshi-gupta-ggits", color: "hover:text-gray-900" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
              <span>Contact</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full text-base resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pulse-500 hover:bg-pulse-600 text-white h-12 text-base"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="animate-on-scroll space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:shatakshig2005@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-pulse-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pulse-50 flex items-center justify-center group-hover:bg-pulse-100 transition-colors">
                    <Mail className="w-5 h-5 text-pulse-500" />
                  </div>
                  <span className="text-sm sm:text-base">shatakshig2005@gmail.com</span>
                </a>
                <a
                  href="tel:+919981599184"
                  className="flex items-center gap-3 text-gray-600 hover:text-pulse-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pulse-50 flex items-center justify-center group-hover:bg-pulse-100 transition-colors">
                    <Phone className="w-5 h-5 text-pulse-500" />
                  </div>
                  <span className="text-sm sm:text-base">+91 9981 599 184</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-pulse-500 transition-all group ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-display font-semibold mb-3">
                Available for Freelance
              </h3>
              <p className="text-white/90 text-sm sm:text-base mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-pulse-500 hover:bg-gray-100"
                size="lg"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;