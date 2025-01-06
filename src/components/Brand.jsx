import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Brand = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-normal text-primaryText">
                Enjoy all sports with checkediptv uk
              </h2>
              <h2 className=" text-lg  sm:text-xl 2xl:text-2xl font-bold tracking-normal text-secondaryColor">
              watch unlimited news and sports channels with the best iptv service in the uk.
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <img src="logo2/bundes.webp"/>
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <img src="logo2/champions.webp"/>
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
              <img src="logo2/liga.webp"/>
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <img src="logo2/premier.webp"/>
              </div>

              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
              <img src="logo2/rmc.png"/>
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
              <img src="logo2/ufa.webp"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
