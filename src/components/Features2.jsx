import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src="feature5.png"
                alt="Feature image 5"
                className="rounded-xl"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src="feature6.webp"
                alt="Feature image 6"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">HD iptv wheter it's sports or shows</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Exclusive Latest
            Movies & Series & Live Sports Stream
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            CheckedIPTV: Premium HD IPTV Service in UK | 12,000+ Live Channels
Experience elite entertainment with CheckedIPTV, your #1 rated HD IPTV provider in Britain. Stream 12,000+ international sports channels, latest movies, and TV series in crystal-clear HD quality. Access premium content from UK, US, and Europe, including Sky Sports and exclusive VOD, all backed by 24/7 customer support. Transform your viewing today!
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Premium HD Streaming: Watch 12,000+ UK & global channels in Full HD</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>World-Class IPTV: Enjoy buffer-free HD & 4K streaming.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Secure Access: Stream privately with encrypted protection.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>24/7 Support: Get help anytime via WhatsApp or email.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
