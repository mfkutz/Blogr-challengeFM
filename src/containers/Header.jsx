import BgDesktop from "../components/BgDesktop";
import { NavBar, Button } from "../components/index";

const Header = () => {
  return (
    <header className=" flex overflow-hidden items-center flex-col min-h-[37.5rem] relative z-50 rounded-bl-[6.5rem] bg">
      <div className="absolute -top-[84rem] -left-[27.5rem] -z-10">
        <BgDesktop />
      </div>
      <div className="wrapper w-full">
        <NavBar />
        <h1 className="text-center text-[3.6rem] mt-[7.2rem] font-medium text-white font-[ubuntu] ">
          A modern publishing platform
        </h1>
        <p className="text-center text-white text-[1.16rem] tracking-[0.025rem] pt-3">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center mt-11 gap-4">
          <Button btn="btn2" text="Start for Free" />
          <Button btn="btn3" text="Learn More" />
        </div>
      </div>
    </header>
  );
};

export default Header;
