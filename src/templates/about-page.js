import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import Tabs from "../components/Tabs";
import SWEOfficers from "../components/SWEOfficers";

export const AboutPageTemplate = ({
  title,
  image,
  subheading,
  sectionTitle,
  sectionDescription,
  sweOfficers
}) => {
  return (
    <Fragment>
      <HeroSection image={image} title={title} subheading={subheading} />
      <Tabs />
      <Main
        mainTitle={sectionTitle}
        mainDescription={sectionDescription}
      ></Main>
      <SWEOfficers sweOfficers={sweOfficers} />
    </Fragment>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  sweOfficers: PropTypes.arrayOf(PropTypes.object)
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        sectionTitle={frontmatter.sectionTitle}
        sectionDescription={frontmatter.sectionDescription}
        sweOfficers={frontmatter.sweOfficers}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const PageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        image
        subheading
        sectionTitle
        sectionDescription
        sweOfficers {
          email
          image
          name
          position
        }
      }
    }
  }
`;
