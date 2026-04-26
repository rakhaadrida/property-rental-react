import Star from "../../components/star/Star";
import TestimonialFrame from "../../../public/assets/images/landing-page/testimonial-frame.jpg";
import Button from "../../components/button/Button";
import { Fade } from "react-awesome-reveal";

interface Testimonial {
  _id: string;
  imageUrl: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
}

interface TestimonialProps {
  data: Testimonial;
}

const Testimonial = ({ data }: TestimonialProps) => {
  return (
    <Fade direction="up" triggerOnce>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto testimonial-hero-section">
            <div className="testimonial-hero">
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute testimonial-image"
              />
              <img
                src={TestimonialFrame}
                alt="Testimonial Frame"
                className="position-absolute testimonial-frame"
              />
            </div>
          </div>
          <div className="col-6 testimonial-content">
            <h4 className="testimonial-name">{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h2 font-weight-regular my-3 lh-base">
              {data.content}
            </h5>
            <span className="text-gray-500 font-weight-light">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn testimonial-button"
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimonial;
