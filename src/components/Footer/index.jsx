import tpay from "../../assets/tpay2_logo.svg";
import instagram from "../../assets/instagram-ic.svg";
import facebook from "../../assets/facebook-ic.svg";
import twitter from "../../assets/twitter-ic.svg";
import Wrapper from "../Wrapper";

export const Footer = () => {
  return (
    <div className="h-[297px] flex justify-center bg-white">
      <Wrapper className="lg:py-10 lg:px-10">
        <div className="h-full w-[1300px] border-0 px-6 flex justify-between py-10">
          <div className="flex flex-col h-48">
            <div>
              <img src={tpay} alt="tpay2" className="h-[50px] w-20" />
            </div>
            <div className="flex h-6 gap-5">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
            <div className="h-6 mt-5">
              <h4 className="font-poppins font-normal text-xs text-[#979797]">
                2015-2022 Taxaide Technologies Limited. All rights reserved
              </h4>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col px-1">
              <nav>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-semibold block items-start text-[18px] text-black text-start lg:text-[12.5px] rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-white"
                      aria-current="page"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-medium block text-[8px] text-[#979797] text-start lg:text-[12.5px] rounded md:bg-transparent md:text-[#979797] md:p-0 dark:text-[#979797] md:dark:text-[#979797]"
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-medium block text-[8px] text-[#979797] text-start lg:text-[12.5px] rounded md:bg-transparent md:text-[#979797] md:p-0 dark:text-[#979797] md:dark:text-[#979797]"
                      aria-current="page"
                    >
                      Legal & privacy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col px-1">
              <nav>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-semibold block items-start text-[18px] text-black text-start lg:text-[12.5px] rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-white"
                      aria-current="page"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-medium block text-[8px] text-[#979797] text-start lg:text-[12.5px] rounded md:bg-transparent md:text-[#979797] md:p-0 dark:text-[#979797] md:dark:text-[#979797]"
                      aria-current="page"
                    >
                      TBook®
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-medium block text-[8px] text-[#979797] text-start lg:text-[12.5px] rounded md:bg-transparent md:text-[#979797] md:p-0 dark:text-[#979797] md:dark:text-[#979797]"
                      aria-current="page"
                    >
                      TaxiTWithhold®
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-medium block text-[8px] text-[#979797] text-start lg:text-[12.5px] rounded md:bg-transparent md:text-[#979797] md:p-0 dark:text-[#979797] md:dark:text-[#979797]"
                      aria-current="page"
                    >
                      TaxiTPayroll®
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
