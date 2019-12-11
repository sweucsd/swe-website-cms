import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "../components/style.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";
import PageEvents from "./page-events";
import ToCalendar from "../components/ToCalendar";

export const ProfessionalPageTemplate = ({
  image,
  title,
  subheading,
  sectionTitle,
  sectionDescription,
  pageEvents
}) => (
  <Fragment>
    <HeroSection image={image} title={title} subheading={subheading} />
    <Tabs />
    <Main mainTitle={sectionTitle} mainDescription={sectionDescription}>
      <PageEvents pageEvents={pageEvents} />
      <ToCalendar />
    </Main>
  </Fragment>
);

ProfessionalPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  pageEvents: PropTypes.arrayOf(PropTypes.object)
};

const ProfessionalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProfessionalPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
        pageEvents={frontmatter.pageEvents}
      />
    </Layout>
  );
};

ProfessionalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProfessionalPage;

export const pageQuery = graphql`
  query ProfessionalPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "professional-page" } }) {
      frontmatter {
        title
        image
        subheading
        sectionTitle
        sectionDescription
        pageEvents {
          eventDescription
          eventImage
          eventTitle
        }
      }
    }
  }
`;
