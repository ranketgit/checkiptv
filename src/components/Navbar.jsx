import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "Feedback", href: "/#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <div className="flex justify-start items-center">
            <div className="text-white font-['Inter'] font-bold text-xl">CheckedIPTV</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Regions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRegionsOpen(!isRegionsOpen)}
              className="text-white hover:scale-110 transition flex items-center space-x-1"
            >
              <span>Regions</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isRegionsOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isRegionsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-bgDark2 rounded shadow-lg py-1">
                <a href="/iptv-uk-england" className="block px-4 py-2 text-white hover:bg-bgDark3">England</a>
                <a href="/iptv-uk-scotland" className="block px-4 py-2 text-white hover:bg-bgDark3">Scotland</a>
                <a href="/iptv-uk-wales" className="block px-4 py-2 text-white hover:bg-bgDark3">Wales</a>
                <a href="/iptv-uk-northern-ireland" className="block px-4 py-2 text-white hover:bg-bgDark3">Northern Ireland</a>
              </div>
            )}
          </div>

          {/* Regular Links */}
          {navbarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.ariaLabel}
              className="text-white hover:scale-110 transition"
            >
              {link.label}
            </a>
          ))}

          {/* How to use button */}
          <a
            href="/how-to-use"
            className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 px-6 py-2 text-sm"
          >
            How to use
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-bgDark1 border-t border-bgDark3"
          >
            <div className="flex flex-col p-4 space-y-4">
              {/* Mobile Regions */}
              <button 
                onClick={() => setIsRegionsOpen(!isRegionsOpen)}
                className="text-white text-xl font-medium flex items-center justify-between"
              >
                <span>Regions</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isRegionsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isRegionsOpen && (
                <div className="pl-4">
                  <a href="/iptv-uk-england" className="block text-white hover:bg-bgDark3 py-2 px-4">England</a>
                  <a href="/iptv-uk-scotland" className="block text-white hover:bg-bgDark3 py-2 px-4">Scotland</a>
                  <a href="/iptv-uk-wales" className="block text-white hover:bg-bgDark3 py-2 px-4">Wales</a>
                  <a href="/iptv-uk-northern-ireland" className="block text-white hover:bg-bgDark3 py-2 px-4">Northern Ireland</a>
                </div>
              )}

              {/* Mobile Regular Links */}
              {navbarLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:bg-bgDark3 py-2 px-4"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/how-to-use"
                className="text-white bg-bgDark2 hover:bg-bgDark3 py-2 px-4 rounded"
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