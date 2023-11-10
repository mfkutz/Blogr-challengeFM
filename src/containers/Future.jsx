import { editorDesktop, editorMobile } from "../images/images";
const Future = () => {
  return (
    <section className="flex justify-center relative z-20 overflow-hidden">
      <img
        src={editorDesktop}
        alt=""
        className="absolute right-[-17.3rem] top-[4.5rem] -z-10 imgDesk"
      />
      <img
        src={editorMobile}
        alt=""
        className="absolute  top-[11.1rem] -z-10 imgDeskTwo"
      />
      <div className="wrapper">
        <h2 className="text-center text-[1.6rem] md:text-[2.25rem] font-medium text-blue-950 lg:mt-[9.3rem] mt-[5.99rem]">
          Designed for the future
        </h2>
        <div className="flex mx-[1.1rem] flex-col lg:flex-row  ">
          <div className="w-full flex flex-col  items-center lg:items-start">
            <h3 className="mt-[25rem] lg:mt-[6.18rem] mb-[1.5rem] text-center">
              Introducing an extensible editor
            </h3>
            <p className="leading-[1.75rem] tracking-[0.016rem] max-w-[534px] text-center lg:text-left ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="mt-[2.3rem] lg:mt-[4.4rem] mb-[1.35rem] text-center">
              Robust content management
            </h3>
            <p className="leading-[1.8rem] tracking-[0.016rem] mb-[3rem] lg:mb-[13rem] max-w-[534px] lg:max-w-none text-center lg:text-left">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div className="w-full "></div>
        </div>
      </div>
    </section>
  );
};

export default Future;
