import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../../components/style.css";
import Main from "../../components/Main";
const EventsCompPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <Main>
        <center>
          <div className="events z-depth-3">
            {data.featuredEvents.map((event, idx) => (
              <div className="events__row" key={idx}>
                <span>{event.title}</span>
                <time>{moment(event.date).format("dddd, MMMM D")}</time>
                <span>
                  <a href={event.link} target="_blank noopener noreferrer">
                    RSVP
                  </a>
                </span>
              </div>
            ))}
          </div>
        </center>
      </Main>
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
