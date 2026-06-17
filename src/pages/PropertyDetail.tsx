import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import DetailHeader from "../sections/detail/DetailHeader";
import AboutBooking from "../sections/detail/AboutBooking";
import Activities from "../sections/detail/Activities";
import DetailTestimonial from "../sections/detail/DetailTestimonial";

const property = {
  name: "Village Angga",
  city: "Bogor",
  country: "Indonesia",
  price: 280,
  unit: "night",
  images: [
    "/assets/images/details-page/main-image.jpg",
    "/assets/images/details-page/item-image-1.jpg",
    "/assets/images/details-page/item-image-2.jpg",
  ],
  description:
    "<p>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p><p>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p><p>Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>",
  features: [
    { _id: "1", qty: "5", name: "bedroom", imageUrl: "" },
    { _id: "2", qty: "1", name: "living room", imageUrl: "" },
    { _id: "3", qty: "3", name: "bath room", imageUrl: "" },
    { _id: "4", qty: "1", name: "dining room", imageUrl: "" },
    { _id: "5", qty: "10", name: "mbps", imageUrl: "" },
    { _id: "6", qty: "7", name: "units ready", imageUrl: "" },
    { _id: "7", qty: "2", name: "refrigerator", imageUrl: "" },
    { _id: "8", qty: "4", name: "television", imageUrl: "" },
  ],
  activities: [
    {
      _id: "1",
      name: "Green Lake",
      type: "Nature",
      imageUrl: "/assets/images/details-page/treasure-1.jpg",
    },
    {
      _id: "2",
      name: "Dog Clubs",
      type: "Pool",
      imageUrl: "/assets/images/details-page/treasure-2.jpg",
    },
    {
      _id: "3",
      name: "Labour and Wait",
      type: "Shopping",
      imageUrl: "/assets/images/details-page/treasure-3.jpg",
      isPopular: true,
    },
    {
      _id: "4",
      name: "Snorkeling",
      type: "Beach",
      imageUrl: "/assets/images/details-page/treasure-4.jpg",
    },
  ],
  testimonial: {
    imageUrl: "/assets/images/details-page/testimonial.jpg",
    name: "Happy Family",
    rate: 5,
    content: "As a wife I can pick a great trip with my own lovely family ... thank you!",
    familyName: "Anggi",
    familyOccupation: "Product Designer",
  },
};

const PropertyDetail = () => {
  return (
    <>
      <Navbar />
      <DetailHeader
        name={property.name}
        city={property.city}
        country={property.country}
        images={property.images}
      />
      <AboutBooking
        description={property.description}
        features={property.features}
        price={property.price}
        unit={property.unit}
      />
      <Activities data={property.activities} />
      <DetailTestimonial data={property.testimonial} />
      <Footer />
    </>
  );
};

export default PropertyDetail;
