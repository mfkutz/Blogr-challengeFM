import { logo, arrowLight } from "../images/images";
import { Button } from "../components/index";
import { useState } from "react";
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
const NavBar = () => {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);

  function handleMenu1() {
    setProduct(true);
    setCompany(false);
    setConnect(false);
  }
  function handleMenu2() {
    setCompany(true);
    setProduct(false);
    setConnect(false);
  }
  function handleMenu3() {
    setConnect(true);
    setCompany(false);
    setProduct(false);
  }
  function closeMenu() {
    setProduct(false);
    setCompany(false);
    setConnect(false);
  }

  return (
    <nav className="flex items-center w-full justify-between mt-[3.8rem] z-40 px-[20px]">
      <div className="flex items-center gap-[4rem]">
        <img src={logo} alt="blogr" />

        <div className="flex gap-[1.8rem]">
          {/************ MENU ONE ***************/}
          <div className="flex gap-9 text-white relative">
            <div className="flex items-center gap-2">
              <span
                className="hover:underline cursor-pointer"
                onMouseEnter={handleMenu1}
              >
                Products
              </span>
              <img
                src={arrowLight}
                alt=""
                className={`pt-[0.3rem] ${
                  product ? "rotate-180 pt-[0.1rem] duration-100" : ""
                }`}
              />
            </div>
            <ul
              onMouseLeave={closeMenu}
              className={`absolute bg-white top-9 p-6 rounded-md gap-2 flex flex-col w-[160px] ${
                product ? "block" : "hidden"
              }`}
            >
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiLayoutMasonryLine />
                <span>Catalogue</span>
              </li>
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiBookmark3Fill />
                <span>Strategy</span>
              </li>
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiMoneyDollarCircleLine />
                <span>Business</span>
              </li>
            </ul>
          </div>
          {/************ MENU TWO ***************/}
          <div className="flex gap-9 text-white relative ">
            <div className="flex items-center gap-2">
              <span
                className="hover:underline cursor-pointer"
                onMouseEnter={handleMenu2}
              >
                Company
              </span>
              <img
                src={arrowLight}
                alt=""
                className={`pt-[0.3rem] ${
                  company ? "rotate-180 pt-[0rem] duration-100" : ""
                }`}
              />
            </div>
            <ul
              onMouseLeave={closeMenu}
              className={`absolute bg-white top-9 p-6 rounded-md gap-2 flex flex-col w-[160px] ${
                company ? "block" : "hidden"
              }`}
            >
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiGlobalLine />
                Services
              </li>
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiPsychotherapyLine />
                Personal
              </li>
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiNurseLine />
                Users
              </li>
            </ul>
          </div>
          {/************ MENU THREE ***************/}
          <div className="flex gap-9 text-white relative ">
            <div className="flex items-center gap-2">
              <span
                className="hover:underline cursor-pointer"
                onMouseEnter={handleMenu3}
              >
                Connect
              </span>
              <img
                src={arrowLight}
                alt=""
                className={`pt-[0.3rem] ${
                  connect ? "rotate-180 pt-[0rem] duration-100" : ""
                }`}
              />
            </div>
            <ul
              onMouseLeave={closeMenu}
              className={`absolute bg-white top-9 p-6 rounded-md gap-2 flex flex-col w-[160px] ${
                connect ? "block" : "hidden"
              }`}
            >
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiContactsLine />
                Contact
              </li>
              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiNewspaperFill />
                Newsletter
              </li>

              <li className="text-black cursor-pointer hover:font-semibold flex gap-2 items-center">
                <RiLinkedinBoxFill />
                Linkedin
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-[2.2rem]">
        <button className="text-white">Login</button>
        <Button btn="btn1" text="Sign Up" />
      </div>
    </nav>
  );
};

export default NavBar;