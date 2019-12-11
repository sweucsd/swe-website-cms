import React from "react";
import PropTypes from "prop-types";
import "../../components/style.css";

const EventsCompPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <div className=" container">
        <div className="row">
          {data.featuredSponsors.map((sponsor, idx) => (
            <div className="col-md-4" key={idx}>
              <figure>
                <img src={sponsor.sponsorImage} alt={sponsor.title} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

EventsCompPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default EventsCompPreview;
