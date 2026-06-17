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

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill={filled ? "#fcd535" : "#e5e5e5"}
    aria-hidden="true"
  >
    <path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.64 1.12 6.54L12 17.27 6.13 20.45l1.12-6.54L2.5 9.27l6.6-1.01L12 2z" />
  </svg>
);

const DetailTestimonial = ({ data }: TestimonialProps) => {
  const rounded = Math.round(data.rate);

  return (
    <section className="tw:mx-auto tw:mt-24 tw:max-w-6xl tw:px-6">
      <div className="tw:grid tw:grid-cols-1 tw:items-center tw:gap-12 tw:lg:grid-cols-2">
        <div className="tw:flex tw:justify-center">
          <div className="tw:relative tw:w-full tw:max-w-sm">
            <div className="tw:absolute tw:-left-4 tw:-top-6 tw:h-[92%] tw:w-[92%] tw:rounded-2xl tw:border tw:border-line tw:bg-white" />
            <figure className="tw:relative tw:overflow-hidden tw:rounded-bl-[80px] tw:rounded-tr-2xl">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="tw:h-[440px] tw:w-full tw:object-cover"
              />
            </figure>
          </div>
        </div>

        <div>
          <h3 className="tw:text-xl tw:font-semibold tw:text-ink">
            {data.name}
          </h3>
          <div className="tw:mt-4 tw:flex tw:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < rounded} />
            ))}
          </div>
          <p className="tw:mt-5 tw:text-3xl tw:font-medium tw:leading-snug tw:text-ink tw:text-balance">
            {data.content}
          </p>
          <p className="tw:mt-5 tw:text-sm tw:text-muted">
            {data.familyName}, {data.familyOccupation}
          </p>
          <button
            type="button"
            className="tw:mt-8 tw:rounded-md tw:bg-brand tw:px-6 tw:py-3 tw:text-sm tw:font-medium tw:text-white tw:transition-colors tw:hover:bg-brand-dark"
          >
            Read Their Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailTestimonial;
