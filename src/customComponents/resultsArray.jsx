import React from 'react';
import { Link } from 'react-router-dom';
export default function ResultsArray() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    fetch('https://nutrition-recruitment-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
      .then(response => response.json())
      .then(data => {
        const jobsArray = data ? Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).filter(job => job.isApproved) : []; // Filter for approved jobs
        setJobs(jobsArray);
      });
  }, []);

  const jobsArray = jobs.length > 0 ? jobs.map((job) => (
    <div key={job.id} className="border bg-white p-6 m-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">{job.title}</h2>
      <p className="text-sm text-gray-800 mb-1">Company: <span className="font-semibold">{job.companyName}</span></p>
      <p className="text-gray-700 mb-1">Location: <span className="font-medium">{job.location}</span></p>
      <p className="text-gray-700 mb-1">Job Type: <span className="font-medium">{job.jobType}</span></p>
      <p className="text-gray-700 mb-4">Category: <span className="font-medium">{job.category}</span></p>
      <p className="mt-2 text-gray-600 mb-4">{job.companyDescription}</p>
      <Link to={`/array/${job.id}`} className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-150 ease-in-out">View More</Link>
    </div>
  )) : <p className="text-center text-gray-500 text-lg">No approved jobs found.</p>;
  

   

  return (
    <div>
      {jobsArray}
    </div>
  );
  

}
