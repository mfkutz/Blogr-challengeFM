import { useAppContext } from "../context/Context";
import { arrowDark } from "../images/images";
import Button from "./Button";
import { motion } from "framer-motion";

const MobileBar = () => {
  const {
    menuMobileOpen,
    productMobile,
    productMobileMenu,
    companyMobile,
    companyMobileMenu,
    connectMobileMenu,
    connectMobile,
  } = useAppContext();

  const variants = (delay) => ({
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } },
  });

  return (
    <div
      className={`absolute bg-white text-black w-[90%] left-1/2 -translate-x-1/2 min-h-[340px] top-[8.2rem] lg:hidden block rounded-md transform transition-transform duration-500 z-50 shadow-2xl ${
        menuMobileOpen ? "translate-y-0" : "translate-y-[-140%]"
      }`}
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

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={variants(0)}
            className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
              productMobile ? "" : "hidden"
            } `}
          >
            <li className="">Catalogue</li>
            <li className="">Strategy</li>
            <li className="">Business</li>
          </motion.ul>
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

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={variants(0)}
            className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
              companyMobile ? "" : "hidden"
            } `}
          >
            <li className="">Services</li>
            <li className="">Personal</li>
            <li className="">Users</li>
          </motion.ul>
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

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={variants(0)}
            className={`mt-3 flex flex-col p-[1.3rem] justify-between  text-center text-[16px] font-semibold bg-[#EFEFF1] w-full rounded-md h-[150px] ${
              connectMobile ? "" : "hidden"
            } `}
          >
            <li className="">Contact</li>
            <li className="">Newsletter</li>
            <li className="">Linkedin</li>
          </motion.ul>
        </div>

        <div className="flex flex-col gap-[1.2rem] ">
          <button className="text-black pt-5 text-[18px] font-medium ">
            Login
          </button>
          <Button btn="btn4 bg" text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
