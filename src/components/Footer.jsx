

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                CheckedIPTV  
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Transform your streaming experience with CHECKEDTV, your trusted IPTV provider in the UK. Access an unmatched entertainment package featuring over 24,000 premium live channels and a massive library of 140,000+ on-demand movies and shows.

               
              </p>
             
              
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">links</h3>
                <ul>
                    <li className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="/how-to-use"
                      >
                        Installation guides
                      </a>
                    </li>
                </ul>
              </div>
              
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Internal links</h3>
                <ul>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="/#features"
                       
                      >
                        Features
                      </a>
                    </li>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="/#pricing"
                       
                      >
                        Pricing
                      </a>
                    </li>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="/#feedback"
                       
                      >
                        Feedback
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
