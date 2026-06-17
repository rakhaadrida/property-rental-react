import { useState } from "react";

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
    <section className="tw:mx-auto tw:mt-16 tw:max-w-6xl tw:px-6">
      <div className="tw:grid tw:grid-cols-1 tw:gap-12 tw:lg:grid-cols-[1.6fr_1fr]">
        {/* About the place */}
        <div>
          <h2 className="tw:text-xl tw:font-semibold tw:text-ink">
            About the place
          </h2>
          <div
            className="tw:mt-5 tw:space-y-5 tw:text-[15px] tw:leading-relaxed tw:text-body"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="tw:mt-10 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-8 tw:sm:grid-cols-4">
            {features.map((feature, index) => (
              <div key={`${feature.name}-${index}`}>
                <img
                  src={featureIcon[feature.name] ?? "/assets/icons/icon_tv.svg"}
                  alt=""
                  aria-hidden="true"
                  className="tw:h-9 tw:w-9"
                />
                <p className="tw:mt-3 tw:text-sm tw:text-body">
                  <span className="tw:font-semibold tw:text-ink">
                    {feature.qty}
                  </span>{" "}
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking card */}
        <div className="tw:h-fit tw:rounded-2xl tw:border tw:border-line tw:p-8 tw:shadow-[0_10px_40px_rgba(21,44,91,0.08)]">
          <h3 className="tw:text-lg tw:font-semibold tw:text-ink">
            Start Booking
          </h3>
          <p className="tw:mt-5 tw:text-3xl tw:font-semibold tw:text-success">
            ${price}{" "}
            <span className="tw:font-light tw:text-muted">per night</span>
          </p>

          <div className="tw:mt-6">
            <label className="tw:text-sm tw:font-medium tw:text-ink">
              How long you will stay?
            </label>
            <div className="tw:mt-2 tw:flex tw:items-stretch tw:overflow-hidden tw:rounded-md tw:border tw:border-line">
              <button
                type="button"
                onClick={decrease}
                aria-label="Decrease nights"
                className="tw:flex tw:w-12 tw:items-center tw:justify-center tw:bg-pink tw:text-xl tw:font-semibold tw:text-white"
              >
                &minus;
              </button>
              <div className="tw:flex tw:flex-1 tw:items-center tw:justify-center tw:text-sm tw:text-ink">
                {nights} {nights > 1 ? "nights" : "night"}
              </div>
              <button
                type="button"
                onClick={increase}
                aria-label="Increase nights"
                className="tw:flex tw:w-12 tw:items-center tw:justify-center tw:bg-success tw:text-xl tw:font-semibold tw:text-white"
              >
                +
              </button>
            </div>
          </div>

          <div className="tw:mt-6">
            <label className="tw:text-sm tw:font-medium tw:text-ink">
              Pick a Date
            </label>
            <div className="tw:mt-2 tw:flex tw:items-center tw:gap-3 tw:rounded-md tw:border tw:border-line tw:p-2">
              <span className="tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded tw:bg-brand tw:text-white">
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
              <span className="tw:text-sm tw:text-ink">20 Jan - 22 Jan</span>
            </div>
          </div>

          <p className="tw:mt-5 tw:text-sm tw:text-body">
            You will pay{" "}
            <span className="tw:font-semibold tw:text-ink">${total} USD</span>{" "}
            per{" "}
            <span className="tw:font-semibold tw:text-ink">
              {nights} {nights > 1 ? "nights" : "night"}
            </span>
          </p>

          <button
            type="button"
            className="tw:mt-6 tw:w-full tw:rounded-md tw:bg-brand tw:py-3 tw:text-sm tw:font-medium tw:text-white tw:transition-colors tw:hover:bg-brand-dark"
          >
            Continue to Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;
