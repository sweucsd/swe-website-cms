import React from "react";

const SWEOfficers = props => {
  return (
    <section class="section team">
      <h1 class="main__title team__title">SWE Officers</h1>

      <div class="team-container">
        {props.sweOfficers.map(officer => (
          <article class="team__module">
            <center>
              <img src={officer.image} alt={officer.name} />
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
