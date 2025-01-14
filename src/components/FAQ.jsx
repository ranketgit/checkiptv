import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "What is CHECKEDTV IPTV ? And how does it work?",
    answer: "CHECKEDTV IPTV or Internet Protocol Television, lets you watch live TV, movies, and series from popular streaming services over the internet. It works by setting up an app on your device, like a TV, Firestick, or Android box, giving you access to a wide range of content directly through your internet connection.",
  },
  {
    question: "What types of channels are available with your service?",
    answer: "We Offer over 24,000 channels, from around the world, including content from the UK, US, Europe, Africa, and Asia. Our default package includes only English content, tailored to our primarily English-Speaking custome base. However, after placing your order, you can easily customize your channel selection to suit your needs.",
  },
  {
    question: "Do you offer movies and TV series in addition to live channels?",
    answer: "Yes, we offer a vast selection of on-demand movies and TV series, including hits from N*tflix, H*BO, and D*sney, with subtitles in various languages and up to 4K quality. If you can't find what you're looking for, just request it through our support, and we'll add it for you.",
  },
  {
    question: "What devices and apps can I use?",
    answer: "Our platform is designed to work seamlessly across a broad spectrum of devices, including smartphones, tablets, smart TVs, Apple TVs, streaming boxes, and devices like Magbox, Enigma, Firestick, Firecubes, Formuler, And all android boxes. We support a wide range of operating systems, such as Android, IOS, Windows, maOS, and Linux. Furthermore, our service is compatible with ALL streaming applications like IPTV Smarters Pro, IBO PLAYER PRO, Tivimate, XCIPTV, KODI, and Hot IPTV …",
  },
  {
    question: "How long will it take to receive my IPTV login information?",
    answer: "Once you've placed an order and completed payment through PayPal following the provided instructions, you'll receive your login details almost instantly.",
  },
  {
    question: "How long does it take to setup IPTV on my device?",
    answer: "Our detailed step-by-step guides make setup a breeze, taking no more than 5-10 minutes of your time. Plus, we're available on WhatsApp to assist and guide you through any issues you might encouter.",
  },
  {
    question: "Do you have any Guarantees?",
    answer: "Yes, we offer a 7-day money-back guarantee for all subscription plans, If you decide to cancel, simply contact us via WhatsApp. Your refund will be processed and issued within 15 to 120 minutes!",
  },
];


export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16  text-white overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4a6cf7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
