import { Twitter, Send } from "lucide-react";
import { Logo } from "../Header/Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0A0B3B]/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#FFA500] transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter/X</span>
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#FFA500] transition-colors"
            >
              <Send className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-[#FFD700]/60 text-sm">
          © {new Date().getFullYear()} Spin to Win. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
