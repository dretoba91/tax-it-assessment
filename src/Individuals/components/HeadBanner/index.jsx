import people from "../../../assets/people_1.png";
import Wrapper from "../../../components/Wrapper";

function HeadBanner() {
  return (
    <div className="h-[660px] w-full bg-black flex justify-center">
      <Wrapper className="lg:w-[90%] xl:w-[98%] md:w-[90%] flex flex-row justify-between pt-20">
        <div className="h-full w-[570px] md:flex flex flex-col justify-center lg:pr-0 md:pr-40 md:py-20 lg:py-20 gap-3">
          <h1 className="font-poppins lg:font-semibold md:font-semibold text-[30px] text-start text-[#ffffff]">
            Secure & seamless
          </h1>
          <h1 className="font-poppins lg:font-semibold md:font-semibold text-[30px] text-start text-[#ffffff]">
            online transactions
          </h1>
          <h1 className="font-poppins font-normal lg:text-[14px] md:text-[14px] text-start text-[#ffffff]">
            Providing you with the best online payment experience
          </h1>
          <button className="font-poppins font-semibold h-10 w-[190px] px-2 rounded-lg bg-[#5CB23A] text-[16px] text-center text-white lg:text-[12.5px] mt-5">
            create free account
          </button>
        </div>
        <div className="lg:py-0 md:py-10 lg:pr-0 md:pr-[60px]">
          <img
            src={people}
            alt="people"
            className="h-[550px] lg:pl-40 md:pl-[10px]"
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default HeadBanner;
