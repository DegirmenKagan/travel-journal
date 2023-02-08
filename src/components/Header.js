import React from "react";
import globe from "../images/globe.svg";
export default function Header() {
  return (
    <header>
      <img src={globe} />
      <h1>my travel journal.</h1>
    </header>
  );
}
