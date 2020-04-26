import React, { useState, useEffect } from "react";
import JobBoard from "./components/JobBoard";
import data from "./mockdata/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      ) : (
        <p> Jobs are loading...</p>
      )}
    </div>
  );
}

export default App;
