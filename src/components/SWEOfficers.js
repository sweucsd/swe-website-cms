import React from "react";
import OfficerImage from "../components/OfficerImage";

const SWEOfficers = (props) => {
  return (
    <section className="section team">
      <h1 className="main__title team__title">SWE Officers</h1>

      <div className="team-container">
        {props.sweOfficers.map((officer, idx) => (
          <article className="team__module" key={idx}>
            <center>
              {/* <img src={officer.image} alt={officer.name} /> */}
              <OfficerImage imageInfo={officer} />
            </center>
            <a href={`mailto:${officer.email}`}>
              <h3>{officer.name}</h3>
            </a>
            <p>{officer.position}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SWEOfficers;
