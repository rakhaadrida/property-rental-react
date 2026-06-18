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
    <section className="container detail-testimonial">
      <div className="detail-testimonial-layout">
        <div className="detail-testimonial-media">
          <div className="detail-testimonial-frame">
            <div className="detail-testimonial-frame-border" />
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
          <div className="detail-testimonial-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < rounded} />
            ))}
          </div>
          <p className="detail-testimonial-quote">{data.content}</p>
          <p className="detail-testimonial-author">
            {data.familyName}, {data.familyOccupation}
          </p>
          <button type="button" className="detail-testimonial-button">
            Read Their Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailTestimonial;
