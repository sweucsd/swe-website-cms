import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Beyond from "../templates/beyond-swe";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  // let title;
  // switch (window.location.pathname) {
  //   case "/":
  //     title = "Home";
  //     break;
  //   case "/about":
  //     title = "About";
  //     break;
  //   case "/calendar":
  //     title = "Calendar";
  //     break;
  //   case "/envision":
  //     title = "Envision";
  //     break;
  //   case "/social":
  //     title = "Social";
  //     break;
  //   case "/professional":
  //     title = "Professional";
  //     break;
  //   case "/outreach":
  //     title = "Outreach";
  //     break;
  //   case "/contact":
  //     title = "Contact";
  //     break;
  //   default:
  //     title = "";
  // }
  return (
    <div className="js">
      <Helmet>
        <html lang="en" />

        <title>{/*{title}&mdash;*/}Society of Women Engineers</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/icon_gear.png`}
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <Fragment>{children}</Fragment>
      <Beyond />
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
