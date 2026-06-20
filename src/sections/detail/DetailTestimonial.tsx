import Button from "../../components/button/Button";
import TestimonialFrame from "../../../public/assets/images/landing-page/testimonial-frame.jpg";
import Star from "../../components/star/Star";
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
    <Fade direction="up">
      <section className="container detail-testimonial">
        <div className="detail-testimonial-layout">
          <div className="detail-testimonial-media">
            <div className="detail-testimonial-frame">
              <img
                src={TestimonialFrame}
                alt="Testimonial Frame"
                className="position-absolute detail-testimonial-frame-image"
              />
              <figure className="detail-testimonial-image">
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="img-cover"
                />
              </figure>
            </div>
          </div>

          <div>
            <h3 className="detail-testimonial-name">{data.name}</h3>
            <Star value={5} width={36} height={36} spacing={4}></Star>
            <p className="detail-testimonial-quote">{data.content}</p>
            <p className="detail-testimonial-author">
              {data.familyName}, {data.familyOccupation}
            </p>
            <Button
              className="btn detail-testimonial-button"
              hasShadow
              isPrimary
              href=""
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default DetailTestimonial;
