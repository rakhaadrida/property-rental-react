import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
  ariaLabel?: string;
}

const Breadcrumb = ({
  items,
  separator = "/",
  className = "",
  ariaLabel = "Breadcrumb",
}: BreadcrumbProps) => {
  return (
    <nav
      aria-label={ariaLabel}
      className={`detail-header-breadcrumb ${className}`.trim()}
    >
      {items.map((item, index) => (
        <>
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index < items.length - 1 && <span>{separator}</span>}
        </>
      ))}
    </nav>
  );
};

export default Breadcrumb;
