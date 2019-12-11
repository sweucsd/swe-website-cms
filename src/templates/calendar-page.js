import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import RecentEvents from "./recent-events";
import Tabs from "../components/Tabs";
import Calendar from "../components/Calendar";

export const CalendarPageTemplate = ({
  image,
  title,
  subheading,
  sectionTitle,
  sectionDescription,
  calUrl
}) => (
  <Fragment>
    <HeroSection image={image} title={title} subheading={subheading} />
    <Tabs />
    <Main mainTitle={sectionTitle} mainDescription={sectionDescription}>
      <RecentEvents />
    </Main>
    <Calendar calUrl={calUrl} />
  </Fragment>
);

CalendarPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  calUrl: PropTypes.string
};

const CalendarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CalendarPageTemplate
        calUrl={frontmatter.calURL}
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
      />
    </Layout>
  );
};

CalendarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default CalendarPage;

export const pageQuery = graphql`
  query CalendarPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "calendar-page" } }) {
      frontmatter {
        title
        image
        subheading
        sectionTitle
        sectionDescription
        calURL
      }
    }
  }
`;
