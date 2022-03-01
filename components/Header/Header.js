import Link from "next/link";
import { StyledHeader } from "./StyledHeader";
import { Row, Col, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <StyledHeader>
      <Row fluid className="header">
        <ul>
          <li className="header-logo">
            <Link href="/">
              <yeseva40>Katy Oldfield</yeseva40>
            </Link>
          </li>
          <li className="header-pages">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="header-pages">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </Row>
    </StyledHeader>
  );
};
export default Navbar;
