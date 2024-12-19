import { HashLink as Link } from "react-router-hash-link";
import { Image } from "@nextui-org/react";
import logo from "../../assets/logo2.png";
import { useWindowSize } from "@uidotdev/usehooks";

export const Logo = ({
  state,
  setState,
  hideMenu,
  isSmallDevice,
  isExtraLargeDevice,
}) => {
  const size = useWindowSize();
  return (
    <div
      className={`transition-all flex items-center justify-between pt-2 pb-2 md:pt-4 md:pb-2 md:block`}
    >
      <Link to="/" className="dark max-h-16">
        <Image
          src={logo}
          width={isSmallDevice ? 140 : isExtraLargeDevice ? 200 : size?.width >= 1920 ? 270 : 200}
          height={"100%"}
          alt="Labors of Tech logo"
          className="dark"
        />
      </Link>
      {!hideMenu && (
        <div className="md:hidden">
          <button
            className="menu-btn text-gray-50 hover:text-gray-300 outline-none"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
