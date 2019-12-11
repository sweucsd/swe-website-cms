import React from "react";
import PropTypes from "prop-types";

const Main = ({ mainTitle, mainDescription, children }) => {
  return (
    <main className="section main">
      <h1 className="main__title">{mainTitle}</h1>
      {mainDescription ? (
        <p className="lead subtitle">{mainDescription}</p>
      ) : null}

      {children}
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      mainTitle: PropTypes.string,
      mainDescription: PropTypes.string
    })
  )
};

export default Main;
