import React from "react";
import Countdown from "../../Components/Countdown/Countdown.jsx";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import Rsvp from "../../Components/RSVP/rsvp.jsx";
import HistoryContainer from "../../Components/HistoryContainer/HistoryContainer.jsx";
import WeddingWitnesses from "../../Components/WitnessCard/WitnessCard.jsx";

const Home = () => {
  return (
    <div>
      <Rsvp />
      <HistoryContainer />
      <Countdown />
      <WeddingWitnesses />
      <Carousel />
    </div>
  );
};

export default Home;
