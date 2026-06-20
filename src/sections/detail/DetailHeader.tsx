import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Fade } from "react-awesome-reveal";

interface GalleryProps {
  name: string;
  city: string;
  country: string;
  images: string[];
}

const DetailHeader = ({ name, city, country, images }: GalleryProps) => {
  const [main, secondTop, secondBottom] = images;

  return (
    <section className="container detail-header">
      <div className="detail-header-top">
        <Breadcrumb
          items={[{ label: "Home", to: "/" }, { label: "House Details" }]}
        />
        <div className="detail-header-title-block">
          <h1 className="detail-header-title">{name}</h1>
          <p className="detail-header-location">
            {city}, {country}
          </p>
        </div>
        <span className="detail-header-spacer" aria-hidden="true" />
      </div>

      <Fade direction="up" triggerOnce>
        <div className="detail-header-gallery row">
          <figure className="detail-header-main-image col-lg-7 col-md-12">
            <img
              src={main}
              alt={`${name} exterior`}
              className="img-cover detail-header-main-image-hero"
            />
          </figure>
          <div className="detail-header-side-images col-lg-5 col-md-12">
            <figure className="detail-header-side-image">
              <img
                src={secondTop}
                alt={`${name} living room`}
                className="img-cover"
              />
            </figure>
            <figure className="detail-header-side-image">
              <img
                src={secondBottom}
                alt={`${name} bedroom`}
                className="img-cover"
              />
            </figure>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default DetailHeader;
