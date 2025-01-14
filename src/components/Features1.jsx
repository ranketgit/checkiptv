import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full mt-10 bg-bgDark2 pt-24  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Chill and watch your favorite shows with checkediptv uk</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              CheckedTV CHECKEDTV IPTV No More Buffering, Just Peace Of Mind
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
              UK IPTV: Best Premium British Streaming Service | 24,000+ Live Channels & Sky Sports
Experience Ultra-HD British TV without buffering! Watch Premier League, Sky channels, BBC, and international content instantly. Get the most reliable IPTV service in the United Kingdom with seamless streaming and catch-up TV. Start your entertainment upgrade today!
              </p>
              
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
          <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Access to ALL UK/US sports</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Access to ALL PPV events</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>You can request to add Channels/VODS</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Can be installed on any APP or DEVICE ( Literally!)</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Content from 154 Countries Worldwide ! ( Asia,EU,Africa,AR...)</span>
                </li>
              </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
