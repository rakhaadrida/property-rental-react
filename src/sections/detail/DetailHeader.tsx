import { Link } from "react-router-dom";

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
      <div className="row align-items-center detail-title-row">
        <div className="col detail-breadcrumb">
          <Link to="/" className="text-gray-500">
            Home
          </Link>
          <span className="text-gray-500"> / </span>
          <span className="text-gray-900 font-weight-medium">House Details</span>
        </div>
        <div className="col-auto detail-title">
          <h2 className="font-weight-bold text-gray-900 mb-1">{name}</h2>
          <span className="text-gray-500 font-weight-light">
            {city}, {country}
          </span>
        </div>
        <div className="col detail-title-spacer" aria-hidden="true" />
      </div>

      <div className="detail-gallery">
        <figure className="img-wrapper gallery-main">
          <img src={main} alt={`${name} exterior`} className="img-cover" />
        </figure>
        <div className="gallery-side">
          <figure className="img-wrapper">
            <img
              src={secondTop}
              alt={`${name} living room`}
              className="img-cover"
            />
          </figure>
          <figure className="img-wrapper">
            <img
              src={secondBottom}
              alt={`${name} bedroom`}
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default DetailHeader;
