import moneytransfer from "../../assets/money-transfer.svg";
import secure from "../../assets/security.svg";
import emi from "../../assets/emi.svg";
import { PaymentCard } from "../common";
import Wrapper from "../Wrapper";
import { twMerge } from 'tailwind-merge'

function Payment({className, className2}) {
    const styles = twMerge('flex justify-center', className);
    const wrapperStyles = twMerge(className2);
  return (
    <div className={styles}>
      <Wrapper className={wrapperStyles}>
        <div className="h-[509px] w-[1250px] lg:w-[90%] xl:w-[98%] md:w-[90%] px-6 py-1 flex flex-col items-center bg-white lg:px-10">
          <div className="justify-self-center">
            <h2 className="font-poppins font-semibold text-[36px] text-[#4F4F4F]">
              Payments tools designed for you
            </h2>
            <h3 className="font-poppins font-normal text-[18px] text-[#4F4F4F]">
              Explore payment features that provides you with every possible
              solution
            </h3>
          </div>
          <div className="lg:w-[1256px] md:w-[600px] lg:h-[400px] md:h-[600px] md:flex flex-row justify-between lg:px-0 lg:py-10 md:py-5 gap-7">
            <PaymentCard
              src={moneytransfer}
              alt={"moneytransfer"}
              h2={"User Friendly"}
              p={"Highly responsive and easy to navigate"}
            />
            <PaymentCard
              src={secure}
              alt={"secure"}
              h2={"Secure"}
              p={
                "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form."
              }
            />

            <PaymentCard
              src={emi}
              alt={"emi"}
              h2={"Fast"}
              p={
                "Transacting takes only a few seconds - it's convenient and safe."
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Payment;
