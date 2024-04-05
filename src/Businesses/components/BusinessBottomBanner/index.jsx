import otp from "../../../assets/otp.svg";
import Wrapper from "../../../components/Wrapper";
import paybanner2 from '../../../assets/paybanner2.svg'

function BusinessBottomBanner() {
  return (
    <div className="h-[700px] w-full flex justify-center bg-white">
      <Wrapper className="flex flex-row justify-between lg:pr-[55px] lg:py-[40px]">
        <div className="h-full w-[590px] flex items-center pt-[80px]">
        <div className="h-[600px] w-[500px]">
        <img src={paybanner2} alt="paybanner2" />
        </div>
        </div>

        <div className="h-full w-[700px] relative z-30 bg-[#F1F1F1]">
          <div className="absolute bottom-[10px] right-[54px]">
            <img src={otp} alt="otp" className="h-[550px] w-[575px]" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default BusinessBottomBanner;
