

function PaymentCard({src, alt, h2, p}) {
  return (
    <div className="lg:h-[350px] lg:w-[350px] md:h-[150px] md:w-[170px] bg-white justify-center lg:px-5 md:px-5 lg:py-10 md:py-40 border-2 rounded-lg border-[#d2f5e1]">
      <div className="lg:h-[203px] lg:w-[345px] md:h-full md:w-[150px] md:flex flex-col items-start justify-center md:px-5 md:py-5 lg:px-0 lg:py-5 gap-2 mt-10">
        <img src={src} alt={alt} className="h-[67px] w-[67]" />
        <h2 className="font-poppins font-medium text-[22px] text-[#0F0919] text-start">
          {h2}
        </h2>
        <p className="font-poppins font-normal text-[12px] text-[#555555] text-start lg:text-wrap md:text-wrap md:pr-20 lg:pr-20">
          {p}
        </p>
      </div>
    </div>
  );
}

export default PaymentCard