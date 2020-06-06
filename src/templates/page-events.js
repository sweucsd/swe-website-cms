import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PropTypes from "prop-types";

const PageEvents = (props) => {
  // console.log(props.pageEvents);
  return (
    <div className="module-container">
      {props.pageEvents.map((event, idx) => {
        console.log({ event });
        return (
          <div className="module" key={idx}>
            <center>
              {/* <img
              src={event.eventImage}
              alt={event.eventTitle}
              className='z-depth-3'
            /> */}
              <a href={event.link}>
                <PreviewCompatibleImage imageInfo={event} />
              </a>
            </center>

            <a href={event.link}>
              <h3>{event.title}</h3>
            </a>
            <p>{event.eventDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

PageEvents.propTypes = {
  pageEvents: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      link: PropTypes.string,
      eventDescription: PropTypes.string,
    })
  ),
};

export default PageEvents;
