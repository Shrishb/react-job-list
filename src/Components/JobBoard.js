import React from "react";
import PropTypes from "prop-types";

const JobBoard = (props) => {
  return (
    <div>
      <p> {props.job.role} </p>
    </div>
  );
};

JobBoard.propTypes = {
  job: PropTypes.object,
};

export default JobBoard;