import Wrapper from "../../../components/Wrapper";
import semicircle from '../../../assets/semicircle.svg';

function BusinessHeadBanner() {
  return (
    <div className="h-[660px] w-full bg-black flex justify-center">
      <Wrapper className="flex flex-row justify-between pt-20">
        <div className="h-full w-[570px] flex flex-col justify-center lg:py-20 gap-3">
          <h1 className="font-poppins font-semibold text-[36px] text-center text-[#ffffff]">
            Manage payroll, compliance
          </h1>
          <h1 className="font-poppins font-semibold text-[36px] text-center text-[#ffffff]">
            & HR in real time
          </h1>
          <h1 className="font-poppins font-normal text-[14px] text-center text-wrap px-16 text-[#ffffff]">
            Make income tax remittances to the state internal revenue service
            for your employees.
          </h1>
          <div className="flex justify-center">
            <button className="font-poppins font-semibold h-10 w-[190px] px-2 rounded-lg bg-[#5CB23A] text-[16px] text-center text-white lg:text-[12.5px] mt-5">
              create free account
            </button>
          </div>
        </div>
        <img src={semicircle} alt="semicircle" className="h-[300px] absolute top-[360px] left-[900px]" />
      </Wrapper>
      
    </div>
  );
}

export default BusinessHeadBanner;
