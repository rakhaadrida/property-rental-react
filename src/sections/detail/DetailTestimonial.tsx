import Star from "../../components/star/Star";
import Button from "../../components/button/Button";
import TestimonialFrame from "../../../public/assets/images/details-page/testimonial-frame.jpg";
import { Fade } from "react-awesome-reveal";

interface TestimonialData {
  imageUrl: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
}

interface TestimonialProps {
  data: TestimonialData;
}

const DetailTestimonial = ({ data }: TestimonialProps) => {
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
                href="/testimonial"
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

export default DetailTestimonial;
