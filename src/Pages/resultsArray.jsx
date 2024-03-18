import React from 'react';
import { JobContext } from '../App'; // Adjust the path to where your App.js is located

export default function ResultsArray() {
  const { jobList } = React.useContext(JobContext);


console.log(jobList)

  return (
    <div>
      {jobList.map((job, index) => (
        <div key={index}>
          {/* Render job details here, e.g., */}
          <h2>{job.title}</h2>
          <p>{job.companyName}</p>
          {/* Add more job details that you want to display */}
        </div>
      ))}
    </div>
  );
}
