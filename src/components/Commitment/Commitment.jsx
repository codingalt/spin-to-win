import { Sparkles } from "lucide-react";

export function Commitment() {
  return (
    <section className="pt-28 md:pt-32 pb-0 px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
          Our Key Commitment
        </h3>
        <div className="bg-[#0A0B3B]/60 border border-[#FFD700]/20 rounded-lg p-6 backdrop-blur-sm">
          <ul className="space-y-4 text-[#FFD700]/80">
            <li className="flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FFD700]" />
              <span className="text-sm md:text-medium">
                No coins will be sold or burned.
              </span>
            </li>
            <li className="flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FFD700]" />
              <span className="text-sm md:text-medium">
                100% of the tokens will be distributed to our holders.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
