import circle1 from "../assets/circle1.svg";
import Header from "../components/Header";
import { Footer } from '../components/Footer'
import IndividualPage from '../components/Send'
import Payment from '../components/Payment'
import BusinessHeadBanner from "./components/BusinessHeadBanner";
import people2 from '../assets/people2.svg';
import BusinessBottomBanner from "./components/BusinessBottomBanner"
// import HeadBanner from "./components/HeadBanner";
// import BottomBanner1 from "./components/BottomBanner1";
// import BottomBanner2 from "./components/BottomBanner2";

function ForBusinesses({toggleState, onClickToggle}) {
  return (
    <div className="w-full overflow-x-hidden relative">
      <Header toggleState={toggleState} onClickToggle={onClickToggle} />
      <BusinessHeadBanner />
      <Payment className="h-[1000px]" className2="py-[420px]" />
      <BusinessBottomBanner />
      <IndividualPage />
      <Footer />
      <img
        src={people2}
        alt="people2"
        className="h-[400px] absolute top-[550px] left-[480px]"
      />
      <img
        src={circle1}
        alt="cicle1"
        className="object-contain h-[772px] w-[787px] absolute top-[1900px] left-[980px]"
      />
    </div>
  );
}

export default ForBusinesses;
