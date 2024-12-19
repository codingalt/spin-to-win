import React, { useRef } from "react";
import { Image } from "@nextui-org/react";
import roadmapImage from "@/assets/roadmap-lottery.png";
import roadmap1 from "@/assets/roadmap1.png";
import roadmap2 from "@/assets/roadmap2.png";
import roadmap3 from "@/assets/roadmap3.png";
import { motion, useInView } from "framer-motion";

const HowItWorks = () => {
     const ref = useRef(null);
     const isInView = useInView(ref);
  return (
    <div
      id="howItWorks"
      className="mt-28 md:py-16 max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-6 sm:px-9 2xl:px-0 3xl:px-5"
    >
      <section className="bg-transparent md:min-h-screen relative">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-left mb-12"
          >
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-3">
              How to get started
            </h2>
            <p className="text-gray-300">Follow these 3 easy steps!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden bg-gradient-to-r bg-[#131037] bg-opacity-20 border border-green-600 border-opacity-50 rounded-xl px-4 py-4 md:p-6 transform transition-transform hover:scale-105"
              >
                <div className="absolute w-[220px] h-[200px] rounded-full -top-10 -left-10 right-0 blur-2xl bg-green-600 bg-opacity-25 z-0"></div>

                <div className="flex items-start gap-4">
                  <div className="w-16 md:w-20">
                    <Image
                      src={roadmap1}
                      alt="Lottery winning"
                      width={"100%"}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-medium md:text-xl font-bold text-white mb-1 md:mb-2">
                      Choose favorite contest
                    </h3>
                    <p className="text-gray-400 text-sm md:text-medium">
                      Register to LODE & Choose your contest
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r bg-[#131037] bg-opacity-20 border border-purple-700 border-opacity-50 rounded-xl px-4 py-4 md:p-6 transform transition-transform hover:scale-105"
              >
                <div className="absolute w-[220px] h-[200px] rounded-full -top-10 -left-10 right-0 blur-3xl bg-purple-700 bg-opacity-25 z-0"></div>

                <div className="flex items-start gap-4">
                  <div className="w-16 md:w-20">
                    <Image
                      src={roadmap2}
                      alt="Lottery winning"
                      width={"100%"}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-medium md:text-xl font-bold text-white mb-1 md:mb-2">
                      Buy lucky numbers
                    </h3>
                    <p className="text-gray-400 text-sm md:text-medium">
                      Pick Your Numbers & Complete your Purchase
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.1 }}
                className="relative overflow-hidden bg-gradient-to-r bg-[#131037] bg-opacity-20 border border-yellow-400 border-opacity-40 rounded-xl px-4 py-4 md:p-6 transform transition-transform hover:scale-105"
              >
                <div className="absolute w-[220px] h-[200px] rounded-full -top-10 -left-10 right-0 blur-3xl bg-yellow-300 bg-opacity-20 z-0"></div>

                <div className="flex items-start gap-4">
                  <div className="w-16 md:w-20">
                    <Image
                      src={roadmap3}
                      alt="Lottery winning"
                      width={"100%"}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-medium md:text-xl font-bold text-white mb-1 md:mb-2">
                      Take your victory
                    </h3>
                    <p className="text-gray-400 text-sm md:text-medium">
                      Dream big, you are about to reach success.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side illustration */}
            <div className="relative h-[500px] hidden md:block">
              <Image
                src={roadmapImage}
                alt="Lottery winning illustration"
                width={500}
                height={500}
                className="object-contain"
              />
              {/* Animated coins */}
              <div className="absolute top-0 right-10 animate-bounce">
                <div className="w-7 h-7 bg-yellow-400 rounded-full" />
              </div>
              <div className="absolute top-1/4 right-1/4 animate-bounce delay-150">
                <div className="w-6 h-6 bg-yellow-400 rounded-full" />
              </div>
              <div className="absolute top-1/2 right-20 animate-bounce delay-300">
                <div className="w-8 h-8 bg-yellow-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
