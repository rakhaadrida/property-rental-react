import Navbar from "../components/navbar/Navbar";
import Hero from "../sections/landing/Hero";
import MostPicked from "../sections/landing/MostPicked";
import LandingPageSpecs from "../../specs/landingPage.json";
import { useRef } from "react";
import Categories from "../sections/landing/Categories";
import Testimonial from "../sections/landing/Testimonial";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  const refMostPicked = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <Hero
        travelers={LandingPageSpecs.hero.travelers}
        treasures={LandingPageSpecs.hero.treasures}
        cities={LandingPageSpecs.hero.cities}
        refMostPicked={refMostPicked}
      />
      <MostPicked data={LandingPageSpecs.mostPicked} ref={refMostPicked} />
      <Categories data={LandingPageSpecs.categories} />
      <Testimonial data={LandingPageSpecs.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
