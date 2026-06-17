import { Link } from "react-router-dom";

const columns = [
  {
    title: "For Beginners",
    links: [
      { label: "New Account", href: "/register" },
      { label: "Start Booking a Room", href: "/properties" },
      { label: "Use Payments", href: "/use-payments" },
    ],
  },
  {
    title: "Explore Us",
    links: [
      { label: "Our Careers", href: "/careers" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

const DetailFooter = () => {
  return (
    <footer className="tw:mt-24 tw:border-t tw:border-line tw:py-14">
      <div className="tw:mx-auto tw:max-w-6xl tw:px-6">
        <div className="tw:grid tw:grid-cols-1 tw:gap-10 tw:sm:grid-cols-2 tw:lg:grid-cols-4">
          <div>
            <p className="tw:text-2xl tw:font-semibold tw:text-brand">
              Stay<span className="tw:text-ink">cation.</span>
            </p>
            <p className="tw:mt-4 tw:max-w-[220px] tw:text-sm tw:text-muted">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="tw:text-base tw:font-semibold tw:text-ink">
                {col.title}
              </h4>
              <ul className="tw:mt-4 tw:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="tw:text-sm tw:text-muted tw:no-underline tw:transition-colors tw:hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="tw:text-base tw:font-semibold tw:text-ink">
              Connect Us
            </h4>
            <ul className="tw:mt-4 tw:space-y-3 tw:text-sm tw:text-muted">
              <li>support@staycation.id</li>
              <li>021 - 2208 - 1996</li>
              <li>Staycation, Kemang, Jakarta</li>
            </ul>
          </div>
        </div>

        <p className="tw:mt-12 tw:text-center tw:text-sm tw:text-muted">
          Copyright 2019 &bull; All rights reserved &bull; Staycation
        </p>
      </div>
    </footer>
  );
};

export default DetailFooter;
