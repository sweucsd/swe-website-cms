import React, { Fragment } from "react";

const MainContent = () => {
  return (
    <Fragment>
      <h1 className="main__title">{props.mainTitle}</h1>
      <p className="lead subtitle">{props.mainDescription}</p>
    </Fragment>
  );
};

export default MainContent;
