import { editorDesktop, editorMobile } from "../images/images";
import { motion } from "framer-motion";
const Future = () => {
  const variants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } },
  });
  return (
    <section className="flex justify-center relative z-20 overflow-hidden">
      <motion.img
        src={editorDesktop}
        alt="blogr"
        className="absolute right-[-17.3rem] top-[4.5rem] -z-10 imgDesk"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <motion.img
        src={editorMobile}
        alt="blogr"
        className="absolute  top-[11.1rem] -z-10 imgDeskTwo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <div className="wrapper">
        <motion.h2
          className="text-center text-[1.6rem] md:text-[2.25rem] font-medium text-blue-950 lg:mt-[9.3rem] mt-[5.99rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants(0.8)}
        >
          Designed for the future
        </motion.h2>
        <div className="flex mx-[1.1rem] flex-col lg:flex-row  ">
          <div className="w-full flex flex-col  items-center lg:items-start">
            <motion.h3
              className="mt-[25rem] lg:mt-[6.18rem] mb-[1.5rem] text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants(0.9)}
            >
              Introducing an extensible editor
            </motion.h3>
            <motion.p
              className="leading-[1.75rem] tracking-[0.016rem] max-w-[534px] text-center lg:text-left "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants(1)}
            >
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </motion.p>
            <motion.h3
              className="mt-[2.3rem] lg:mt-[4.4rem] mb-[1.35rem] text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants(1.1)}
            >
              Robust content management
            </motion.h3>
            <motion.p
              className="leading-[1.8rem] tracking-[0.016rem] mb-[3rem] lg:mb-[13rem] max-w-[534px] lg:max-w-none text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants(1.2)}
            >
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </motion.p>
          </div>
          <div className="w-full "></div>
        </div>
      </div>
    </section>
  );
};

export default Future;
