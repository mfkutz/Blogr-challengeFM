import BgDesktop from "../components/BgDesktop";
import BgMobile from "../components/BgMobile";

import { NavBar, Button } from "../components/index";
import { useAppContext } from "../context/Context";

import {
  RiLayoutMasonryLine,
  RiBookmark3Fill,
  RiMoneyDollarCircleLine,
  RiGlobalLine,
  RiPsychotherapyLine,
  RiNurseLine,
  RiContactsLine,
  RiNewspaperFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Header = () => {
  const { menuMobileOpen } = useAppContext();
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
          <h1 className="text-center text-[2.2rem] md:text-[2.8rem] px-[1.4rem] lg:text-[3.6rem] mt-[6rem] lg:mt-[7.2rem] font-normal lg:font-medium text-white font-[ubuntu] ">
            A modern publishing platform
          </h1>
          <p className="text-center text-white text-[1.16rem] tracking-[0.025rem] pt-3 px-[2rem]">
            Grow your audience and build your online brand
          </p>
          <div className="flex justify-center mt-11 gap-4">
            <Button btn="btn2" text="Start for Free" />
            <Button btn="btn3" text="Learn More" />
          </div>
        </div>
      </header>
      {/* ****** MENU MOBILE *******/}
      <div
        className={`absolute bg-white text-black w-[250px] h-[600px] top-[6rem] right-6 z-50 shadow-2xl lg:hidden block ${
          menuMobileOpen ? "" : "hidden"
        } `}
      >
        soy mennu mobile
      </div>
    </div>
  );
};

export default Header;
