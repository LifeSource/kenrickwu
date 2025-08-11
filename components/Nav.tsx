"use client";

import Link from "next/link";
import BurgerMenu from "./Menu/BurgerMenu";
import "./nav.css";

export default function Nav() {
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("active");
    console.log("e parent: ", e.currentTarget.parentElement);
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const list = parent.querySelector(".nav__list");
      if (list) {
        list.classList.toggle("active");
      }
    }
  };

  return (
    <nav className="nav sticky">
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
          <li>Contact</li>
        </Link>
      </ul>
      <BurgerMenu onClick={toggleMenu} />
    </nav>
  );
}
