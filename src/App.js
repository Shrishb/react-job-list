import React, { useState, useEffect } from "react";
import JobBoard from "./components/JobBoard";
import data from "./mockdata/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level];

    if (filters.length === 0) {
      return true;
    }

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }
    return tags.some((tag) => filters.includes(tag));
  };

  const filteredJobs = jobs.filter(filterFunc);

  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (clickedFiler) =>{
    setFilters(filters.filter((f) => f!== clickedFiler))
  };

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="header" />
      </header>
      <div className="flex bg-white shadow-md rounded my-16 mx-10 p-6">
        {filters.length > 0 &&
          filters.map((filter) => (
            <span
            className="mx-2"
            onClick={() => handleFilterClick(filter)}
            >
            <span className="p-2 bg-teal-100 text-teal-500 font-bold rounded"> {filter}</span>      
            <span className="cursor-pointer p-2 bg-teal-500 bg-teal-300">X</span>
            </span>
          ))}
      </div>

      {jobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobBoard job={job} key={job.id} handleTagClick={handleTagClick} />
        ))
      ) : (
        <p> Jobs are loading...</p>
      )}
    </div>
  );
}

export default App;