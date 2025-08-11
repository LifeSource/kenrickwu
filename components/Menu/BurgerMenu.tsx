"use client";
import React from "react";
import "./menu.css";

type BurgerMenuProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BurgerMenu({ onClick }: BurgerMenuProps) {
  return (
    <button className="menu" aria-label="toggle menu" onClick={onClick}>
      <div className="menu__line menu__line--top"></div>
      <div className="menu__line menu__line--center"></div>
      <div className="menu__line menu__line--bottom"></div>
    </button>
  );
}
