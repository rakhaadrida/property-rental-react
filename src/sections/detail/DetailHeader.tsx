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
    <section className="tw:mx-auto tw:max-w-6xl tw:px-6 tw:pt-10">
      <div className="tw:relative tw:flex tw:flex-col tw:items-center tw:gap-4 tw:sm:flex-row tw:sm:justify-between">
        <nav
          aria-label="Breadcrumb"
          className="tw:flex tw:items-center tw:gap-2 tw:text-sm tw:font-medium"
        >
          <Link to="/" className="tw:text-muted tw:no-underline">
            Home
          </Link>
          <span className="tw:text-muted">/</span>
          <span className="tw:text-ink">House Details</span>
        </nav>
        <div className="tw:text-center tw:sm:absolute tw:sm:left-1/2 tw:sm:-translate-x-1/2">
          <h1 className="tw:text-3xl tw:font-bold tw:text-ink">{name}</h1>
          <p className="tw:mt-1 tw:text-sm tw:text-muted">
            {city}, {country}
          </p>
        </div>
        <span className="tw:hidden tw:sm:block" aria-hidden="true" />
      </div>

      <div className="tw:mt-8 tw:grid tw:grid-cols-1 tw:gap-5 tw:md:grid-cols-2">
        <figure className="tw:h-72 tw:overflow-hidden tw:rounded-2xl tw:md:h-[460px]">
          <img
            src={main}
            alt={`${name} exterior`}
            className="tw:h-full tw:w-full tw:object-cover"
          />
        </figure>
        <div className="tw:grid tw:grid-rows-2 tw:gap-5">
          <figure className="tw:h-44 tw:overflow-hidden tw:rounded-2xl tw:md:h-auto">
            <img
              src={secondTop}
              alt={`${name} living room`}
              className="tw:h-full tw:w-full tw:object-cover"
            />
          </figure>
          <figure className="tw:h-44 tw:overflow-hidden tw:rounded-2xl tw:md:h-auto">
            <img
              src={secondBottom}
              alt={`${name} bedroom`}
              className="tw:h-full tw:w-full tw:object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default DetailHeader;
