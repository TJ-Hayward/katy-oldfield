import Link from "next/link";
import { StyledHeader } from "./StyledHeader";
import { Row, Col, Container } from "react-bootstrap";
import AuthContext from "../../stores/authContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, login } = useContext(AuthContext);
  console.log(user);
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
          <li onClick={login}> Login/Signup</li>
        </ul>
      </Row>
    </StyledHeader>
  );
};
export default Navbar;
