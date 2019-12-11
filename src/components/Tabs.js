import React from "react";
import { Link } from "gatsby";
import "./style.css";

const Tabs = () => {
  return (
    <section className="section tabs">
      <span className="z-depth-3">
        <Link to={"/social"}>Social</Link>
      </span>
      <span className="z-depth-3">
        <Link to={"/professional"}>Professional</Link>
      </span>
      <span className="z-depth-3">
        <Link to={"/outreach"}>Outreach</Link>
      </span>
    </section>
  );
};

export default Tabs;
