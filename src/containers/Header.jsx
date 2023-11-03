import BgDesktop from "../components/BgDesktop";
import BgMobile from "../components/BgMobile";
import MobileBar from "../components/MobileBar";
import { NavBar, Button } from "../components/index";
import { motion } from "framer-motion";

const Header = () => {
  const variants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } },
  });
  return (
    <div className="relative">
      <header className=" flex overflow-hidden items-center flex-col min-h-[37.5rem] relative z-50 rounded-bl-[6.5rem] bg">
        <div className="absolute top-[-84rem] left-[-27.5rem] -z-10 ">
          <BgDesktop />
        </div>
        <div className="absolute top-[-84rem] left-[-27.5rem] -z-10 ">
          <BgMobile />
        </div>

        <div className="wrapper w-full">
          <NavBar />
          <motion.h1
            className="text-center text-[2.2rem] md:text-[2.8rem] px-[1.4rem] lg:text-[3.6rem] mt-[6rem] lg:mt-[7.2rem] font-normal lg:font-medium text-white font-[ubuntu] "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            A modern publishing platform
          </motion.h1>
          <motion.p
            className="text-center text-white text-[1.16rem] tracking-[0.025rem] pt-3 px-[2rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants(0.6)}
          >
            Grow your audience and build your online brand
          </motion.p>
          <motion.div
            className="flex justify-center mt-11 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants(0.7)}
          >
            <Button btn="btn2" text="Start for Free" />
            <Button btn="btn3" text="Learn More" />
          </motion.div>
        </div>
      </header>
      {/* ****** MENU MOBILE *******/}
      <MobileBar />
    </div>
  );
};

export default Header;
