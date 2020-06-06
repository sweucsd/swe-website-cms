import React from "react";
import { Link } from "gatsby";

const ToCalendar = () => {
  return (
    <p className="full-container">
      <Link to="/calendar" className="full">
        Full Calendar
      </Link>
    </p>
  );
};

export default ToCalendar;
