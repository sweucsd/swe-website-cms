import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SocialMedia = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "social-media" } }) {
            frontmatter {
              emailLink
              instagramLink
              facebookLink
            }
          }
        }
      `}
      render={data => (
        <nav>
          <a href={`mailto:${data.markdownRemark.frontmatter.emailLink}`}>
            Email
          </a>
          <a href={data.markdownRemark.frontmatter.instagramLink}>Instagram</a>
          <a href={data.markdownRemark.frontmatter.facebookLink}>Facebook</a>
        </nav>
      )}
    />
  );
};

export default SocialMedia;
