import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonials</div>
        <div className="block-big-title text-center mb-5 px-8 sm:px-24 md:px-48">
        What they say about our IPTV Services
        </div>
        <p className="text-gray-200 mb-20 px-8 sm:px-24 md:px-32 text-center">Discover why users love our IPTV services! From seamless HD streaming to reliable 24/7 support, our customers rave about the exceptional quality and performance. Read real testimonials to see how our IPTV service delivers top-tier entertainment with unmatched value.</p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center justify-center">
          <img src="test/1.webp" className="w-[300px]"/>
          <img src="test/1.webp" className="w-[300px]"/>
          <img src="test/1.webp" className="w-[300px]"/>
        </div>
      </motion.div>
    </div>
  </section>
);
