import { useState } from "react";
import Button from "../../components/button/Button";
import NumberInput from "../../components/form/number/NumberInput";

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
  const [nights, setNights] = useState<number>(2);
  const total = price * nights;

  return (
    <section className="container about-booking">
      <div className="row">
        <div className="col about-section">
          <h4 className="font-weight-medium text-gray-900 mb-4">
            About the place
          </h4>
          <div
            className="about-description text-gray-500 font-weight-light"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={`${feature.name}-${index}`}>
                <img
                  src={featureIcon[feature.name] ?? "/assets/icons/icon_tv.svg"}
                  alt=""
                  aria-hidden="true"
                  width={36}
                  height={36}
                />
                <p className="feature-label text-gray-500 font-weight-light mt-2 mb-0">
                  <span className="text-gray-900 font-weight-medium">
                    {feature.qty}
                  </span>{" "}
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-auto booking-section">
          <div className="card booking-card">
            <h5 className="font-weight-medium text-gray-900 mb-4">
              Start Booking
            </h5>
            <h3 className="booking-price font-weight-medium mb-4">
              ${price}{" "}
              <span className="text-gray-500 font-weight-light">
                per {unit}
              </span>
            </h3>

            <p className="font-weight-medium text-gray-900 mb-2">
              How long you will stay?
            </p>
            <NumberInput
              name="nights"
              value={nights}
              max={30}
              min={1}
              suffix=" night"
              isSuffixPlural
              onChange={(e) => setNights(e.target.value)}
            />

            <p className="font-weight-medium text-gray-900 mb-2 mt-3">
              Pick a Date
            </p>
            <div className="pick-date mb-3">
              <span className="pick-date-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
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
              <span className="text-gray-900">20 Jan - 22 Jan</span>
            </div>

            <p className="text-gray-500 font-weight-light booking-total">
              You will pay{" "}
              <span className="text-gray-900 font-weight-medium">
                ${total} USD
              </span>{" "}
              per{" "}
              <span className="text-gray-900 font-weight-medium">
                {nights} {nights > 1 ? "nights" : "night"}
              </span>
            </p>

            <Button
              type="button"
              href=""
              isPrimary
              isBlock
              className="btn booking-button"
            >
              Continue to Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;
