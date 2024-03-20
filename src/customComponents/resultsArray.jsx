import React from 'react';
// import { JobContext } from '../App'; // Adjust the path to where your App.js is located

// export default function ResultsArray() {
//   // const { jobList } = React.useContext(JobContext);
//   // console.log(jobList)

//   React.useEffect(() => {
//     fetch('https://nutrition-recruitment-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
//       .then(response => response.json())
//       .then(data => console.log(data)
//       )}, []);


//   return (
    // <div>
    //   {jobList.map((job, index) => (
    //     <div key={index}>
    //       {/* Render job details here, e.g., */}
    //       <h2>{job.title}</h2>
    //       <p>{job.companyName}</p>
    //       {/* Add more job details that you want to display */}
    //     </div>
    //   ))}
    // </div>
    <></>
//   );
// }



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

  return (
    <div>
      {jobs.length > 0 ? jobs.map((job) => (
        <div key={job.id} className="border p-4 m-2 rounded shadow-lg">
          <h2 className="text-xl font-bold">Title: {job.title}</h2>
          <p className="text-sm text-gray-600">Company:{job.companyName}</p>
          {/* Add more job details here */}
          <p>Location: {job.location}</p>
          <p>Job Type:{job.jobType}</p>
          <p>Job Category:{job.category}</p>
          {/* Include any other job details you want here */}
          <p className="mt-2 text-gray-500">{job.companyDescription}</p>
          {/* ... */}
        </div>
      )) : <p className="text-center text-gray-500 text-lg">No approved jobs found.</p>}
    </div>
  );
  

}
