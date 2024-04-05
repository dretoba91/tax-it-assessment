import bottombanner from "../../../assets/bottombanner1.svg";
import Wrapper from "../../../components/Wrapper";
import paybanner1 from "../../../assets/paybanner1.svg";

function BottomBanner1() {
  return (
    <div className="lg:h-[700px] md:h-[1000px] w-full flex justify-center bg-white">
      <Wrapper className="flex flex-row justify-between">
        <div className="lg:w-[90%] xl:w-[98%] md:w-[90%] lg:h-full md:max-h-full md:flex md:flex-col lg:flex-row justify-between lg:pr-0 lg:py-[20px]">
          <div className="lg:h-full md:h-[40%] lg:w-[590px] md:w-[100px] md:flex items-center pt-[80px]">
            <div className="lg:h-[440px] md:h-[100px] lg:w-[500px] md:w-[250]">
              <img src={paybanner1} alt="paybanner1" />
            </div>
          </div>
          <div className="lg:h-full md:h-[50%] lg:w-[700px] md:w-[350px] relative lg:mt-0 md:mt-[80px] bg-[#F1F1F1]">
            <div className="absolute lg:bottom-[-30px] lg:right-[-54px] z-30">
              <img
                src={bottombanner}
                alt="bottombanner"
                className="h-[550px] w-[575px]"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default BottomBanner1;
