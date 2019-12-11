import React from "react";

const Calendar = props => {
  return (
    <center>
      <figure class='calendar-container'>
        <iframe
          title='swe-calendar'
          src={props.calUrl}
          style={{ border: 0 }}
          width='800'
          height='600'
          frameborder='0'
          scrolling='no'
          className='z-depth-3'
        ></iframe>
      </figure>
    </center>
  );
};

export default Calendar;
