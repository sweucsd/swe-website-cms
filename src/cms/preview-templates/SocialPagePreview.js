import React from "react";
import PropTypes from "prop-types";
import { SocialPageTemplate } from "../../templates/social-page";

const SocialPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <SocialPageTemplate
        image={data.image}
        title={data.title}
        subheading={data.subheading}
        sectionTitle={data.sectionTitle}
        sectionDescription={data.sectionDescription}
        description={data.description}
        pageEvents={data.pageEvents}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

SocialPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default SocialPagePreview;
