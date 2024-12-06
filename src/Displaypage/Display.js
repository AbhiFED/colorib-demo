import React from "react";

// import Slider from "../Components/Carrousel/Slider";
import FashionGrid from "../Components/Cardscomp/Cardscomp";
import InformationSlider from "../Components/infsld/InformationSlider";
import Four from "../Components/Four";
import FirstSection from "../Components/FirstSection";
import Secondsection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
const Display = () => {
  return (
    <>
      <div>
        <FirstSection />
        <Secondsection />
        <ThirdSection />
        <Four/>
        {/* <Slider /> */}
        <FashionGrid />
        <InformationSlider />
      </div>
    </>
  );
};

export default Display;
