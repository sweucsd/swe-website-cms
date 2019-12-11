import React from "react";

const PageEvents = props => {
  console.log(props.pageEvents);
  return (
    <div class="module-container">
      {props.pageEvents.map((event, idx) => (
        <div class="module" key={idx}>
          <center>
            <img
              src={event.eventImage}
              alt={event.eventTitle}
              class="z-depth-3"
            />
          </center>

          <a href={event.eventLink}>
            <h3>{event.eventTitle}</h3>
          </a>
          <p>{event.eventDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default PageEvents;
