import { Fade } from "react-awesome-reveal";
import Brand from "../brand/Brand";
import Button from "../button/Button";
import { useLocation } from "react-router-dom";

const Navbar = (props: { isCentered?: boolean }) => {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Brand />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" href="/" type="link">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" href="/browse-by" type="link">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" href="/stories" type="link">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" href="/agents" type="link">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Navbar;
