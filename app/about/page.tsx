'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, Bot, FolderKanban, Sparkles, BookText, Share2, Zap, Heart, Users, Wrench, DollarSign, Phone, UserCheck, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(0,212,255,0.13) 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 85% 70%,  rgba(245,158,11,0.07) 0%, transparent 55%)
            `,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Your Local Tech Partner in{" "}
            <span className="text-neon">Raipur</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mx-auto leading-relaxed text-base md:text-lg max-w-2xl"
          >
            I help local businesses solve technical problems, build digital products,
            and automate workflows — so you can focus on running your business,
            not wrestling with technology.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white text-center mb-12 text-3xl md:text-4xl"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon/50 hover:shadow-lg hover:shadow-neon/20 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.3, type: "spring", bounce: 0.7 }}
                  className="text-neon mb-3 flex justify-center"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-white font-bold mb-2 text-lg">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white text-center mb-12 text-3xl md:text-4xl"
          >
            How I Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howIWork.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                  className="shrink-0 text-neon bg-neon/10 p-3 rounded-lg"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white mb-6 text-3xl md:text-4xl"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mx-auto mb-8 leading-relaxed text-base md:text-lg max-w-xl"
          >
            I genuinely like to get to know my clients personally. Whether it's about
            business, hobbies, or just life — feel free to reach out. I'm always happy
            to chat.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6 text-neon"
          >
            <UserCheck className="w-7 h-7" />
            <span className="text-sm font-semibold">Let's Work Together</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-6 text-neon"
          >
            <UserCheck className="w-6 h-6" />
            <MapPin className="w-6 h-6" />
            <span className="text-sm">Raipur, India</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-white/70"
          >
            <span className="flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.1 }} className="w-4 h-4 text-neon">
                <Sparkles className="w-full h-full" />
              </motion.div>
              Gym
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.1 }} className="w-4 h-4 text-neon">
                <Sparkles className="w-full h-full" />
              </motion.div>
              Yoga & Meditation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.1 }} className="w-4 h-4 text-neon">
                <Sparkles className="w-full h-full" />
              </motion.div>
              Reading
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.1 }} className="w-4 h-4 text-neon">
                <Sparkles className="w-full h-full" />
              </motion.div>
              Business Networking
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white mb-4 text-3xl md:text-4xl"
          >
            Have a Technical Need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 mb-8 max-w-lg mx-auto"
          >
            No pressure. Just a conversation about what you're trying to accomplish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="https://wa.me/918319928445?text=Hi%20Ajay,%20I%20d%20to%20discuss%20a%20project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#25D366",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0.375rem",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ height: "0%", opacity: 0 }}
                  whileHover={{ height: "100%", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span style={{ position: "relative", zIndex: 10 }}>Message Me on WhatsApp</span>
              </motion.button>
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-white/50 text-sm mt-4"
          >
            Feel free to message me for business or personal reasons.
          </motion.p>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Full-Stack Development",
    description: "Websites, web apps, and SaaS products that work seamlessly across all devices.",
  },
  {
    icon: <FolderKanban className="w-6 h-6" />,
    title: "Internal Tools",
    description: "Custom tools tailored to your specific workflow needs.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Business Resources",
    description: "Access to helpful tools and assets to scale your operations.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automation & AI",
    description: "Lead generation, email automation, web scraping, and intelligent workflows.",
  },
  {
    icon: <BookText className="w-6 h-6" />,
    title: "LaTeX Support",
    description: "Help with LaTeX documents, formatting, and technical writing.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media",
    description: "Content creation and posting for your business social accounts.",
  },
];

const howIWork = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Delivery",
    description: "Most projects delivered within one week.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Ongoing Support",
    description: "Maintenance, updates, and fixes after project delivery.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Patient & Empathetic",
    description: "I take time to understand your needs and explain things clearly.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Strong Problem-Solving",
    description: "I diagnose issues analytically and fix them efficiently.",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Flexible Pricing",
    description: "Monthly retainers (preferred) or value-based pricing. No surprises.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Always Available",
    description: "Available by phone anytime to help you out.",
  },
];


