"use client";

import { motion } from "framer-motion";
import { Milestone } from "lucide-react";

const roadmapData = [
  {
    phase: "01",
    title: "Episode 1 – Spin The Wheel",
    items: [
      "Launch of crypto coin and Spin to Win game show",
      "Live-stream on X and Kick",
      "$50K Market Cap: Snapshot and prize spin",
      "$100K Market Cap: DEX listing",
      "Ongoing spins for subsequent milestones",
      "100% token distribution to holders",
    ],
    color: "from-[#FFD700] to-[#FFA500]",
  },
  {
    phase: "02",
    title: "Episode 2 – Enhanced Rewards",
    items: [
      "Debuts two weeks after Episode 1",
      "Enhanced website launch",
      "Improved reward structure",
      "$10M Market Cap: +1M tokens per spin",
      "$20M Market Cap: Additional Solana rewards",
    ],
    color: "from-[#ff00ff] to-[#800080]",
  },
  {
    phase: "03",
    title: "Future Episodes",
    items: [
      "Introduction of new interactive games",
      "Participation for Episode 1 & 2 coin holders",
      "Additional prize opportunities",
      "Continued innovation and community engagement",
    ],
    color: "from-[#FFD700] to-[#FFA500]",
  },
];

export function RoadmapSection() {
  return (
    <div
      id="Roadmap"
      className="md:py-0 mt-32 md:mt-0 max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-6 sm:px-9 2xl:px-0 3xl:px-5"
    >
      <section className="">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-9 md:mb-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            Roadmap
          </h2>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div
                key={phase.phase}
                className="relative"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="700"
              >
                <div
                  className={`
                absolute inset-0 bg-gradient-to-r ${phase.color} opacity-10 
                rounded-lg blur-xl group-hover:opacity-20 transition-opacity
              `}
                />
                <div
                  className="relative bg-[#0A0B3B]/60 border border-[#FFD700]/20 rounded-lg p-6 backdrop-blur-sm
                hover:border-[#FFD700]/40 transition-all duration-300
              "
                >
                  <div className="flex items-center mb-4">
                    <span
                      className={`
                    text-3xl md:text-4xl font-bold bg-gradient-to-r ${phase.color} 
                    bg-clip-text text-transparent mr-4
                  `}
                    >
                      {phase.phase}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-[#FFD700]">
                      {phase.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start text-[#FFD700]/80"
                      >
                        <Milestone className="w-5 h-5 mr-2 mt-1 text-[#FFD700]" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
