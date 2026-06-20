import DetailHeader from "../sections/detail/DetailHeader";
import AboutBooking from "../sections/detail/AboutBooking";
import Activities from "../sections/detail/Activities";
import DetailTestimonial from "../sections/detail/DetailTestimonial";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PropertyDetailSpecs from "../../specs/itemDetails.json";

const PropertyDetail = () => {
  return (
    <div className="detail-page">
      <Navbar />
      <main>
        <DetailHeader
          name={PropertyDetailSpecs.name}
          city={PropertyDetailSpecs.city}
          country={PropertyDetailSpecs.country}
          images={PropertyDetailSpecs.imageUrls.map((img) => img.url)}
        />
        <AboutBooking
          description={PropertyDetailSpecs.description}
          features={PropertyDetailSpecs.features}
          price={PropertyDetailSpecs.price}
          unit={PropertyDetailSpecs.unit}
        />
        <Activities data={PropertyDetailSpecs.activities} />
        <DetailTestimonial data={PropertyDetailSpecs.testimonial} />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
