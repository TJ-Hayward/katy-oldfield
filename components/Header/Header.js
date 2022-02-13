import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>KO</h2>
      </div>
      <ul>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
