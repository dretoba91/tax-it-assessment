import { useState } from "react";
import ForBusinesses from "./Businesses/forbusinesses";
import ForIndividual from "./Individuals/forindividual";


function App() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    console.log(`index: ${index}`);
    console.log(` from App: ${toggle}`);
    setToggle(index);
  }
  return (
    <>

      {toggle === 1 && <ForIndividual toggleState={toggle} onClickToggle={toggleTab}/>}
      {toggle === 2 && <ForBusinesses toggleState={toggle} onClickToggle={toggleTab} />}

    </>
  );
}

export default App;
