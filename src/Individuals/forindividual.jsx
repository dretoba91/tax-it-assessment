import circle1 from "../assets/circle1.svg";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import SendPage from "../components/Send";
import Payment from "../components/Payment";
import HeadBanner from "./components/HeadBanner";
import BottomBanner1 from "./components/BottomBanner1";
import BottomBanner2 from "./components/BottomBanner2";

function ForIndividual({ toggleState, onClickToggle}) {
  return (
    <div className="w-full overflow-x-hidden relative z-30">
      <Header toggleState={toggleState} onClickToggle={onClickToggle} />
      <HeadBanner />
      <Payment className="h-[620px]" className2="py-20" />
      <BottomBanner1 />
      <BottomBanner2 />
      <SendPage />
      <Footer />
      <img
        src={circle1}
        alt="cicle1"
        className="h-[772px] w-[787px] absolute top-[1570px] left-[980px] object-contain"
      />
    </div>
  );
}

export default ForIndividual;
