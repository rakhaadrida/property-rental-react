import Navbar from "../components/navbar/Navbar";
import Hero from "../sections/landing/Hero";
import LandingPageSpecs from "../../specs/landingPage.json";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        travelers={LandingPageSpecs.hero.travelers}
        treasures={LandingPageSpecs.hero.treasures}
        cities={LandingPageSpecs.hero.cities}
      />
    </>
  );
};

export default LandingPage;
