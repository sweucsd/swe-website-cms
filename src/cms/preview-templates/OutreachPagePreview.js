import React from "react";
import PropTypes from "prop-types";
import { OutreachPageTemplate } from "../../templates/outreach-page";

const OutreachPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <OutreachPageTemplate
        image={data.image}
        title={data.title}
        subheading={data.subheading}
        sectionTitle={data.sectionTitle}
        sectionDescription={data.sectionDescription}
        pageEvents={data.pageEvents}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

OutreachPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default OutreachPagePreview;
