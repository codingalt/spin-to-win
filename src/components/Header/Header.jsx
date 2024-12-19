import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { HashLink as Link } from "react-router-hash-link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Send, Twitter } from "lucide-react";

const Header = () => {
  const [state, setState] = useState(false);
  const [activeLink, setActiveLink] = useState(
    window.location.hash || window.location.pathname
  );
  const [pathname, setPathname] = useState(window.location.pathname);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px) and (max-width : 1580px)"
  );

  const navigation = [
    {
      title: "RoadMap",
      path: "#Roadmap",
    },
    { title: "FAQ", path: "#faq" },
    { title: "Episodes", path: "#howItWorks" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash || window.location.pathname);
      setPathname(window.location.pathname);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  return (
    <header>
      <div
        className={`md:hidden transition-all ${
          state ? "mx-2 pb-4 opacity-0 hidden" : "hidden"
        }`}
      >
        <Logo state={state} setState={setState} isSmallDevice={isSmallDevice} />
      </div>
      <nav
        className={`bg-background pb-0 md:px-7 md:text-sm duration-700 transition-all ease-soft-spring ${
          state
            ? "fixed opacity-100 z-50 top-0 inset-x-0 bg-opacity-10 rounded-none md:mx-0 md:mt-0 md:relative md:bg-transparent pb-10"
            : "bg-opacity-10 z-50 fixed top-0 left-0 right-0"
        }`}
      >
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="700"
          className="gap-x-14 md:gap-x-6 lg:gap-x-14 justify-between items-center max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-5 md:flex md:px-1 lg:px-8 2xl:px-0 3xl:px-5"
        >
          <Logo
            state={state}
            setState={setState}
            isSmallDevice={isSmallDevice}
            isExtraLargeDevice={isExtraLargeDevice}
          />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-7 2xl:space-x-8 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="relative group text-primary lg:text-[15px] 2xl:text-[16px]"
                  >
                    <Link
                      smooth
                      to={item.path}
                      onClick={() => handleSetActive(item.path)}
                      className="block group-hover:text-[#FFA500] transition-colors"
                    >
                      {item.title}
                    </Link>
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-primary transition-all duration-400 ${
                        activeLink === item.path
                          ? "w-[19%] md:w-full"
                          : "group-hover:w-[19%] md:group-hover:w-full"
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side  */}
          <div
            className={`items-center mt-8 md:mt-0 md:flex justify-end ${
              state ? "block" : "hidden"
            } `}
          >
            {/* Social Links */}
            <div className="flex items-center gap-5">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-[#FFA500] transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter/X</span>
              </Link>
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-[#FFA500] transition-colors"
              >
                <Send className="h-6 w-6" />
                <span className="sr-only">Telegram</span>
              </Link>
              <button className="bg-transparent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-medium leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-1.5 px-5 ring-1">
                  <span>Pump.fun</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
