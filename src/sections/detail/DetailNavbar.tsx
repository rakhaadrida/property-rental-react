import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse by", href: "/browse-by" },
  { label: "Stories", href: "/stories" },
  { label: "Agents", href: "/agents" },
];

const DetailNavbar = () => {
  return (
    <header className="tw:border-b tw:border-line">
      <div className="tw:mx-auto tw:flex tw:max-w-6xl tw:items-center tw:justify-between tw:px-6 tw:py-6">
        <Link
          to="/"
          className="tw:text-2xl tw:font-semibold tw:text-brand tw:no-underline"
        >
          Stay<span className="tw:text-ink">cation.</span>
        </Link>
        <nav className="tw:hidden tw:items-center tw:gap-8 tw:md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="tw:text-sm tw:font-medium tw:text-ink tw:no-underline tw:transition-colors tw:hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DetailNavbar;
