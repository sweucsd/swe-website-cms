import React from "react";
import { StaticQuery, graphql } from "gatsby";

const BeyondSwe = () => {
  return (
    <StaticQuery
      query={graphql`
        query BeyondSweComponentTemplate {
          markdownRemark(frontmatter: { templateKey: { eq: "beyond-swe" } }) {
            frontmatter {
              title
              description
              featuredLinks {
                link
                linkTitle
              }
            }
          }
        }
      `}
      render={data => (
        <aside className="beyond">
          <h3>{data.markdownRemark.frontmatter.title}</h3>
          <h4>{data.markdownRemark.frontmatter.description}</h4>
          <div className="beyond__tabs">
            {data.markdownRemark.frontmatter.featuredLinks.map((link, idx) => (
              <span key={idx}>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.linkTitle}
                </a>
              </span>
            ))}
          </div>
        </aside>
      )}
    />
  );
};

export default BeyondSwe;
