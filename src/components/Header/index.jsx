// import { NavLink } from 'react-router-dom';
import tpay from "../../assets/tpay2_logo.svg";
import rectangle from "../../assets/rectangle.svg";
import NavTab from "../common/Nav";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Header({ toggleState, onClickToggle }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(`open menu fun: ${openMenu}`);
  };
  console.log(`open menu: ${openMenu}`);

  return (
    <>
      <div className="w-full fixed flex justify-center z-50 top-0 bg-black lg:border-b-black lg:border-b">
        <div className="px-[20px] lg:w-[90%] xl:w-[98%] md:w-[90%]  flex items-center justify-between py-1 max-w-[1440px] bg-black lg:px-0">
          <div className="flex flex-direction: row items-center gap-8 pl-5">
            <img src={tpay} alt="tpay" className="h-[64px] w-40" />

            <NavTab toggleState={toggleState} onClickToggle={onClickToggle} />
          </div>

          <nav className="flex-row flex-start md:flex hidden p-0 gap-10 h-8">
            <ul className="flex flex-row items-center gap-8">
              <li>
                <a
                  href="#"
                  className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
            <img src={rectangle} alt="rectangle" />
            <ul className="flex flex-row items-center">
              <li>
                <a
                  href="#"
                  className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
            </ul>

            <button className="font-poppins font-semibold h-7 w-[170px] px-2 rounded-lg bg-[#5CB23A] text-[16px] text-center text-white lg:text-[12.5px]">
              create free account
            </button>
          </nav>
          <div onClick={toggleMenu} className="block md:hidden">
            {!openMenu ? (
              <AiOutlineMenu size={24} color="#5CB23A" />
            ) : (
              <AiOutlineClose size={20} color="#5CB23A" />
            )}
          </div>

          {/* responsiveness */}
          <div
            className={`${
              openMenu
                ? "fixed left-0 top-0 w-[30%] border-r border-r-gray-900 h-full bg-gray-600 ease-in-out duration-500"
                : "fixed left-[-100%]"
            }`}
          >
            <img src={tpay} alt="tpay" className="h-[64px] w-40 m-4" />
            <nav className="pt-5">
              <ul className="">
                <li className="p-4 border-b border-b-gray-500">
                  <a
                    href="#"
                    className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li className="p-4 border-b border-b-gray-500">
                  <a
                    href="#"
                    className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                    aria-current="page"
                  >
                    Contact
                  </a>
                </li>
                <li className="p-4 border-b border-b-gray-500">
                  <a
                    href="#"
                    className="font-poppins block py-2 px-3 text-[16px] text-white lg:text-[12.5px] rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                    aria-current="page"
                  >
                    Login
                  </a>
                </li>
                <li className="p-4">
                  <button className="font-poppins font-semibold h-7 w-[190px] px-2 rounded-lg bg-[#5CB23A] text-[16px] text-center text-white lg:text-[12.5px]">
                    create free account
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
