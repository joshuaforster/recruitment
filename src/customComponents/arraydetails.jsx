import React from 'react';
import { useParams } from "react-router-dom";

export default function ArrayDetails() {
    const [jobs, setJobs] = React.useState([]);
    const [job, setJob] = React.useState(null); // State to hold the current job based on the ID
    const { id } = useParams(); // Extract `id` from the route parameter

    React.useEffect(() => {
        fetch('https://nutrition-recruitment-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
            .then(response => response.json())
            .then(data => {
                const jobsArray = data ? Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                })) : []; // Corrected the missing closing parenthesis and bracket
                setJobs(jobsArray);
            });
    }, []);

    React.useEffect(() => {
        // Find the job that matches the `id` from the route
        const foundJob = jobs.find(job => job.id === id);
        setJob(foundJob); // Set this job to state
    }, [jobs, id]); // This effect depends on `jobs` and `id`

    return (
        <section>
        <div className="px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto mt-4">
          {job ? (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              
              <section className="mb-4">
                <h3 className="font-semibold">Company Name</h3>
                <p className="text-gray-700">{job.companyName}</p>
      
                {job.companyWebsite && (
                  <p className="text-blue-500"><a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">{job.companyWebsite}</a></p>
                )}
      
                <h3 className="font-semibold mt-4">Company Description</h3>
                <p className="text-gray-700">{job.companyDescription || "Not provided."}</p>
              </section>
      
              <section className="mb-4">
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-700">{job.location || "Remote / Not specified"}</p>
                
                <h3 className="font-semibold mt-4">Job Type</h3>
                <p className="text-gray-700">{job.jobType || "Not specified"}</p>
                
                <h3 className="font-semibold mt-4">Salary Range</h3>
                <p className="text-gray-700">{job.salaryRange || "Not specified"}</p>
                
                <h3 className="font-semibold mt-4">Category</h3>
                <p className="text-gray-700">{job.category || "Not specified"}</p>
                
                <h3 className="font-semibold mt-4">Experience Level</h3>
                <p className="text-gray-700">{job.experienceLevel || "Not specified"}</p>
                
                <h3 className="font-semibold mt-4">Qualifications</h3>
                <p className="text-gray-700">{job.qualifications || "Not provided."}</p>
              </section>
      
              <section className="mb-4">
                <h3 className="font-semibold">Responsibilities</h3>
                <p className="text-gray-700">{job.responsibilities || "Not provided."}</p>
                
                <h3 className="font-semibold mt-4">Benefits</h3>
                <p className="text-gray-700">{job.benefits || "Not provided."}</p>
      
                {job.companyPerks && (
                  <div>
                    <h3 className="font-semibold mt-4">Company Perks</h3>
                    <p className="text-gray-700">{job.companyPerks}</p>
                  </div>
                )}
              </section>
      
              <section className="mt-6">
                <h3 className="font-semibold">How to Apply</h3>
                {job.applicationProcess ? (
                  <p className="text-gray-700">{job.applicationProcess}</p>
                ) : (
                  <p className="text-gray-700">Please send your application to <a href={`mailto:${job.contactEmail}`} className="text-blue-500">{job.contactEmail}</a></p>
                )}
              </section>
            </div>
          ) : (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg">
              <p>Job not found.</p>
            </div>
          )}
        </div>
        </section>

      );
      
}
