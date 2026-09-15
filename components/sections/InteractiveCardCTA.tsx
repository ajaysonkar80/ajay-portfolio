"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type Option = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const options: Option[] = [
  {
    id: "calls",
    title: "I need more calls and inquiries from local customers.",
    description: "Your competitors are ranking higher. I help you show up first.",
    icon: "tabler:phone-call",
  },
  {
    id: "security",
    title: "I need a reliable developer to keep my site secure and updated.",
    description: "No more wondering if your website will break or get hacked.",
    icon: "ph:shield-check",
  },
  {
    id: "automation",
    title: "I want to automate repetitive tasks and grow revenue.",
    description: "Stop wasting time on data entry and manual follow-ups.",
    icon: "tabler:settings",
  },
  {
    id: "internal",
    title: "I need better internal tools and custom software.",
    description: "Streamline your operations with custom-built tools and dashboards.",
    icon: "tabler:database",
  },
];

export default function InteractiveCardCTA() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-white mb-4 text-3xl md:text-4xl">
            Let&apos;s Solve Your Biggest Bottleneck
          </h2>
          <p className="text-white text-sm">
            Select what you need help with right now:
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {options.map((option) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: options.indexOf(option) * 0.1 }}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-200 ${
                selected === option.id
                  ? "border-[#00D4FF] bg-[rgba(0,212,255,0.08)]"
                  : "border-white/10 bg-white/5 hover:border-neon/50 hover:bg-white/10"
              }`}
              onClick={() => setSelected(option.id)}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 text-neon">
                  <Icon icon={option.icon} width={28} height={28} />
                </span>
                <div>
                  <div className="text-white font-semibold text-base mb-1">
                    {option.title}
                  </div>
                  <div className="text-white/70 text-sm">
                    {option.description.replace(/'/g, "&apos;")}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <Link href="#contact">
              <Button
                className="btn-neon h-auto px-10 py-4 text-base"
                style={{
                  background: "#00D4FF",
                  color: "#080c14",
                  border: "none",
                }}
              >
                Solve This For Me — Let&apos;s Talk →
              </Button>
            </Link>
          </motion.div>
        )}

        <div className="text-center text-white/50 text-sm">
          No technical jargon. Fast response within 24 hours.
        </div>
      </div>
    </section>
  );
}