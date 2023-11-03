import BgDesktop from "../components/BgDesktop";
import BgMobile from "../components/BgMobile";

import { NavBar, Button } from "../components/index";
import { useAppContext } from "../context/Context";

import { arrowDark } from "../images/images";

const Header = () => {
  const {
    menuMobileOpen,
    productMobile,
    productMobileMenu,
    companyMobile,
    companyMobileMenu,
    connectMobileMenu,
    connectMobile,
  } = useAppContext();

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
        className={`absolute bg-white text-black w-[90%] transform left-1/2 right-1/2 -translate-x-1/2  min-h-[340px] top-[8.2rem] z-50 shadow-2xl lg:hidden block rounded-md  ${
          menuMobileOpen ? "" : "hidden"
        } `}
      >
        <div className="flex flex-col items-center gap-[1.3rem] text-gray-700 justify-center  m-5 rounded-md">
          {/* PRODUCT */}
          <div className="mx-5 w-full mt-3  ">
            <div
              className="flex items-center justify-center gap-2"
              onClick={productMobileMenu}
            >
              <span className="text-[18px] font-semibold">Product</span>
              <img
                src={arrowDark}
                alt="arrow "
                className={` ${
                  productMobile ? "rotate-180 transform duration-150" : ""
                }`}
              />
            </div>

            <ul
              className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
                productMobile ? "" : "hidden"
              } `}
            >
              <li className="">Catalogue</li>
              <li className="">Strategy</li>
              <li className="">Business</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="mx-5 w-full  ">
            <div
              className="flex items-center justify-center gap-2"
              onClick={companyMobileMenu}
            >
              <span className="text-[18px] font-semibold">Company</span>
              <img
                src={arrowDark}
                alt="arrow "
                className={` ${
                  companyMobile ? "rotate-180 transform duration-150" : ""
                }`}
              />
            </div>

            <ul
              className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
                companyMobile ? "" : "hidden"
              } `}
            >
              <li className="">Services</li>
              <li className="">Personal</li>
              <li className="">Users</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="mx-5 w-full  ">
            <div
              className="flex items-center justify-center gap-2"
              onClick={connectMobileMenu}
            >
              <span className="text-[18px] font-semibold">Connect</span>
              <img
                src={arrowDark}
                alt="arrow "
                className={` ${
                  connectMobile ? "rotate-180 transform duration-150" : ""
                }`}
              />
            </div>

            <ul
              className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
                connectMobile ? "" : "hidden"
              } `}
            >
              <li className="">Contact</li>
              <li className="">Newsletter</li>
              <li className="">Linkedin</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[1.2rem] ">
            <button className="text-black pt-5 text-[18px] font-medium ">
              Login
            </button>
            <Button btn="btn4 bg" text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
