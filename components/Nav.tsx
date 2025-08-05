import Link from "next/link";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <h1>K. Wu</h1>
      <ul className="nav__list">
        <Link className="nav__list__item" href="/">
          <li>Home</li>
        </Link>
        <Link className="nav__list__item" href="/about">
          <li>About</li>
        </Link>
        <Link className="nav__list__item" href="/projects">
          <li>Projects</li>
        </Link>
        <Link className="nav__list__item" href="/projects">
          <li>Get in touch</li>
        </Link>
      </ul>
    </nav>
  );
}
