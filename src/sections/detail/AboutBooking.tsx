import { useState } from "react";
import Button from "../../components/button/Button";

interface Feature {
  _id: string;
  qty: string;
  name: string;
  imageUrl: string;
}

interface AboutBookingProps {
  description: string;
  features: Feature[];
  price: number;
  unit: string;
}

const featureIcon: Record<string, string> = {
  bedroom: "/assets/icons/icon_bedroom.svg",
  "living room": "/assets/icons/icon_livingroom.svg",
  "bath room": "/assets/icons/icon_bathroom.svg",
  "dining room": "/assets/icons/icon_diningroom.svg",
  mbps: "/assets/icons/icon_wifi.svg",
  "units ready": "/assets/icons/icon_ac.svg",
  refrigerator: "/assets/icons/icon_refrigerator.svg",
  television: "/assets/icons/icon_tv.svg",
};

const AboutBooking = ({
  description,
  features,
  price,
  unit,
}: AboutBookingProps) => {
  const [nights, setNights] = useState(2);
  const total = price * nights;

  const decrease = () => setNights((n) => Math.max(1, n - 1));
  const increase = () => setNights((n) => Math.min(30, n + 1));

  return (
    <section className="container about-booking">
      <div className="about-booking-layout row">
        <div className="col-lg-7">
          <h2 className="about-booking-heading">About the place</h2>
          <div
            className="about-booking-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="about-booking-features">
            {features.map((feature, index) => (
              <div key={`${feature.name}-${index}`} className="">
                <img
                  src={featureIcon[feature.name] ?? "/assets/icons/icon_tv.svg"}
                  alt=""
                  aria-hidden="true"
                  className="about-booking-feature-icon"
                />
                <p className="about-booking-feature-text">
                  <span className="font-weight-bold">{feature.qty}</span>{" "}
                  <span className="about-booking-feature-text-name">
                    {feature.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-booking-card col-lg-5">
          <h3 className="about-booking-card-title">Start Booking</h3>
          <p className="about-booking-price">
            ${price}{" "}
            <span className="about-booking-price-unit">per {unit}</span>
          </p>

          <div className="about-booking-field">
            <label className="about-booking-label">
              How long you will stay?
            </label>
            <div className="about-booking-counter">
              <button
                type="button"
                onClick={decrease}
                aria-label="Decrease nights"
                className="about-booking-counter-btn about-booking-counter-btn--decrease"
              >
                &minus;
              </button>
              <div className="about-booking-counter-value">
                {nights} {nights > 1 ? "nights" : "night"}
              </div>
              <button
                type="button"
                onClick={increase}
                aria-label="Increase nights"
                className="about-booking-counter-btn about-booking-counter-btn--increase"
              >
                +
              </button>
            </div>
          </div>

          <div className="about-booking-field">
            <label className="about-booking-label">Pick a Date</label>
            <div className="about-booking-date-picker">
              <span className="about-booking-date-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 1 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span className="about-booking-date-value">20 Jan - 22 Jan</span>
            </div>
          </div>

          <p className="about-booking-summary">
            You will pay{" "}
            <span className="about-booking-summary-total">${total} USD</span>{" "}
            per{" "}
            <span className="about-booking-summary-total">
              {nights} {nights > 1 ? "nights" : "night"}
            </span>
          </p>

          <Button
            className="btn px-5 about-booking-submit"
            hasShadow
            isPrimary
            href=""
          >
            Continue to Book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;
