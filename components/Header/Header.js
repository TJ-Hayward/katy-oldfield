import Link from "next/link";
import { StyledHeader } from "./StyledHeader";
import { Row, Col, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <StyledHeader>
      <div className="header">
        <ul>
          <li className="header-logo">
            <Link href="/">
              <h4>Katy Oldfield</h4>
            </Link>
          </li>
          <li className="header-pages">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="header-pages">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};
export default Navbar;
