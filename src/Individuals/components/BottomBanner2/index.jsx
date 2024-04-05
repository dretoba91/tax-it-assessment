import phone from "../../../assets/phone.svg";
import googleplay from "../../../assets/googleplay.svg";
import appstore from "../../../assets/appstore.svg";
import Wrapper from "../../../components/Wrapper";

function BottomBanner2() {
  return (
    <div className="h-[700px] w-full flex justify-center bg-white">
      <Wrapper className='flex flex-row justify-between pl-[40px]'>
      <div className="h-full w-[1000] flex items-end px-[80px] pt-[60px] bg-[#F1F1F1]">
        <img src={phone} alt="phone" className="h-[550px] w-[500px]" />
      </div>
      <div className="h-[700px] w-[700px] flex items-center px-20 pt-[80px]">
        <div className="h-[400px] w-[350px] flex flex-col items-start py-10 gap-8">
          <div>
            <h1 className="font-poppins font-semibold text-[36px] text-start text-[#4F4F4F]">
              Transact on the go
            </h1>
            <p className="font-poppins font-normal text-[15px] text-start text-wrap text-[#4F4F4F]">
              Stay on top of your business with our easy-to-use app
            </p>
          </div>
          <button className="font-poppins font-semibold h-[50px] w-36 rounded-[10px] bg-[#5CB23A] text-[16px] text-center text-white lg:text-[16px]">
            Get Started
          </button>
          <div className="flex flex-row gap-5">
            <img src={appstore} alt="appstore" className="h-[41px] w-[120px]" />
            <img src={googleplay} alt="googleplay" className="h-[41px] w-[120px]" />
          </div>
        </div>
      </div>
      </Wrapper>
    </div>
  );
}

export default BottomBanner2;
