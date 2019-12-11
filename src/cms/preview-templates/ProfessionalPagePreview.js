import React from "react";
import PropTypes from "prop-types";
import { ProfessionalPageTemplate } from "../../templates/professional-page";

const ProfessionalPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ProfessionalPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        sectionTitle={data.sectionTitle}
        sectionDescription={data.sectionDescription}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
        pageEvents={data.pageEvents}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ProfessionalPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProfessionalPagePreview;
