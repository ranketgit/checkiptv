import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "Feedback", href: "/#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

const regionLinks = [
  { label: "England", href: "/iptv-uk-england" },
  { label: "Scotland", href: "/iptv-uk-scotland" },
  { label: "Wales", href: "/iptv-uk-wales" },
  { label: "Northern Ireland", href: "/iptv-uk-northern-ireland" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);

  const toggleRegions = () => {
    setIsRegionsOpen(!isRegionsOpen);
  };

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                CheckedIPTV
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {/* Desktop Regions Dropdown */}
            <div className="relative">
              <button
                onClick={toggleRegions}
                className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                aria-expanded={isRegionsOpen}
                aria-haspopup="true"
              >
                Regions
              </button>
              {isRegionsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {regionLinks.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="/how-to-use"
              aria-label="how to use"
            >
              <span className="pt-px">How to use</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10">
              {/* Mobile Regions Section */}
              <div className="w-full px-4">
                <button
                  onClick={toggleRegions}
                  className="text-white text-2xl leading-6 cursor-pointer font-normal hover:scale-110 transition duration-300 w-full text-left mb-4"
                >
                  Regions
                </button>
                {isRegionsOpen && (
                  <div className="bg-bgDark2 rounded-md py-2">
                    {regionLinks.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-white text-xl hover:bg-bgDark3 transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="outlined-button pl-6 pr-8 pt-2 pb-2 flex"
                href="/how-to-use"
              >
                How to use
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};