import banner from "../../assets/banner1.svg";
import Wrapper from "../Wrapper";

function SendPage() {
  return (
    <div className="h-[522px] flex justify-center">
      <Wrapper className='py-20'>
        <div className="h-[450px] w-[1300px] relative z-30 bg-[#5CB23A] border-0 px-6 flex items-center justify-between py-1 lg:px-0">
          <div className="h-full flex flex-col lg:px-10 lg:py-20">
            <h1 className="font-poppins font-semibold text-[36px] text-start text-[#ffffff]">
              Send funds
            </h1>
            <h1 className="font-poppins font-normal text-[36px] text-start text-[#e7e3e3]">
              Remit taxes
            </h1>
            <h1 className="font-poppins font-normal text-[36px] text-start text-[#e7e3e3]">
              Buy utilities
            </h1>
            <button className="font-poppins font-semibold h-10 w-36 rounded-[10px] bg-white text-[16px] text-center text-[#5CB23A] lg:text-[16px]">
              Get Started
            </button>
          </div>
          <img
            src={banner}
            alt="banner1"
            className="object-contain h-[450px] md:h-full md:pl-[40px] absolute md:bottom-0 md:right-0 bottom-0 right-0"
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default SendPage;
