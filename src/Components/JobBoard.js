import React from "react";
import PropTypes from "prop-types";

const JobBoard = ({ job,handleTagClick }) => {
  const {
    logo,
    company,
    postedAt,
    position,
    contract,
    location,
    new: newJob,
    featured,
    languages,
    tools,
  } = job;
  

  const skillSet = [];
  if (languages) {
    skillSet.push(...languages);
  }
  if (tools) {
    skillSet.push(...tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        featured && `border-l-4 border-teal-500 border-solid`
      } sm:flex-row`}
    >
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24" src={logo} alt={company}></img>
      </div>

      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500 uppercase">
          {company}
          {newJob && (
            <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full">
              New!
            </span>
          )}
          {featured && (
            <span className="text-white bg-gray-800 font-bold py-1 px-2 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2"> {position} </h2>
        <p className="text-gray-700">
          {postedAt} - {contract} - {location}
        </p>
      </div>

      <div
        className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 
      border-solid sm:ml-auto sm:border-0 sm:mt-0 sm:pt-0"
      >
        {skillSet.map((skill) => (
          <span onClick={() => handleTagClick(skill)} className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

JobBoard.propTypes = {
  job: PropTypes.object,
};

export default JobBoard;