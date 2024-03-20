import React from 'react'
import { JobContext } from '../App';


export default function JobSubmission(){

    const { addJob } = React.useContext(JobContext)

    const initialState = {
        title: '',
        companyName: '',
        location: '',
        jobType: '', // e.g., full-time, part-time
        category: '', // e.g., IT, Healthcare
        salaryRange: '',
        experienceLevel: '', // e.g., entry-level, mid-level, senior
        responsibilities: '',
        qualifications: '',
        companyDescription: '',
        applicationDeadline: '',
        applicationProcess: '', // e.g., email, link to application form
        benefits: '',
        workHours: '',
        travelRequirements: '',
        diversityStatement: '',
        keywords: '',
        companyPerks: '',
        contactEmail: '',
        companyWebsite: '',
        contactNumber: '',
        remoteWork: '', // Assume a binary choice for simplicity; adapt as needed
        companyLogo: null, // To handle file uploads, initially null
    };


    const [jobDetailData, setJobDetailData] = React.useState({
        title: '',
        companyName: '',
        location: '',
        jobType: '', // e.g., full-time, part-time
        category: '', // e.g., IT, Healthcare
        salaryRange: '',
        experienceLevel: '', // e.g., entry-level, mid-level, senior
        responsibilities: '',
        qualifications: '',
        companyDescription: '',
        applicationDeadline: '',
        applicationProcess: '', // e.g., email, link to application form
        benefits: '',
        workHours: '',
        travelRequirements: '',
        diversityStatement: '',
        keywords: '',
        companyPerks: '',
        contactEmail: '',
        companyWebsite: '',
        contactNumber: '',
        remoteWork: '', // Assume a binary choice for simplicity; adapt as needed
        companyLogo: null, // To handle file uploads, initially null
        isApproved: false
      });


    function handleChange(e) {
    
        const {name, value, checked, files, type,} = e.target;
      
        if (type === 'file') {

          setJobDetailData(prevData => ({
            ...prevData,
            [name]: files[0] 
          }));

        } else {
          // Handles all other input types
          setJobDetailData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value 
          }));
        }
      }

      function handleSubmit(e){
        e.preventDefault()
        addJob(jobDetailData);
        setJobDetailData(initialState)

      }
      

        return (
            <div className="mx-4 md:mx-12 lg:mx-24 border p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold my-4">Create a job advert</h1> 
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  name="title"
                  value={jobDetailData.title}
                  required
                />
                <input
                  className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Company Name"
                  onChange={handleChange}
                  name="companyName"
                  value={jobDetailData.companyName}
                />
                <input
                  className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Location"
                  onChange={handleChange}
                  name="location"
                  value={jobDetailData.location}
                />
                <fieldset className="border p-3 rounded-md">
                  <legend className="font-semibold">Type of job</legend>
                  <div className="flex items-center space-x-6">
                    <input
                      className="accent-blue-500"
                      type="radio"
                      id="Full-Time"
                      name="jobType"
                      value="Full-Time"
                      checked={jobDetailData.jobType === "Full-Time"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Full-Time" className="cursor-pointer">Full-Time</label>
          
                    <input
                      className="accent-blue-500"
                      type="radio"
                      id="Part-Time"
                      name="jobType"
                      value="Part-Time"
                      checked={jobDetailData.jobType === "Part-Time"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Part-Time" className="cursor-pointer">Part-Time</label>
          
                    <input
                      className="accent-blue-500"
                      type="radio"
                      id="Contract"
                      name="jobType"
                      value="Contract"
                      checked={jobDetailData.jobType === "Contract"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Contract" className="cursor-pointer">Contract</label>
                  </div>
                </fieldset>
                <input
                  className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Job Category"
                  type="text"
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={jobDetailData.category}
                />
                <input
                  className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Salary Range"
                  id="salayRange"
                  name="salaryRange"
                  type="text"
                  onChange={handleChange}
                  value={jobDetailData.salaryRange}
                />
                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Experience Level"
                id="experienceLevel"
                name="experienceLevel"
                type="text"
                onChange={handleChange}
                value={jobDetailData.experienceLevel}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Responsibilities"
                id="responsibilities"
                name="responsibilities"
                type="text"
                onChange={handleChange}
                value={jobDetailData.responsibilities}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Qualifications"
                id="qualifications"
                name="qualifications"
                type="text"
                onChange={handleChange}
                value={jobDetailData.qualifications}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Company Description"
                id="companyDescription"
                name="companyDescription"
                type="text"
                onChange={handleChange}
                value={jobDetailData.companyDescription}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Application Deadline"
                id="applicationDeadline"
                name="applicationDeadline"
                type="date"
                onChange={handleChange}
                value={jobDetailData.applicationDeadline}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Application Process"
                id="applicationProcess"
                name="applicationProcess"
                type="text"
                onChange={handleChange}
                value={jobDetailData.applicationProcess}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Benefits"
                id="benefits"
                name="benefits"
                type="text"
                onChange={handleChange}
                value={jobDetailData.benefits}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Work Hours"
                id="workHours"
                name="workHours"
                type="text"
                onChange={handleChange}
                value={jobDetailData.workHours}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Travel Requirements"
                id="travelRequirements"
                name="travelRequirements"
                type="text"
                onChange={handleChange}
                value={jobDetailData.travelRequirements}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Diversity Statements"
                id="diversityStatement"
                name="diversityStatement"
                type="text"
                onChange={handleChange}
                value={jobDetailData.diversityStatement}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Keywords"
                id="keywords"
                name="keywords"
                type="text"
                onChange={handleChange}
                value={jobDetailData.keywords}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Perks"
                id="companyPerks"
                name="companyPerks"
                type="text"
                onChange={handleChange}
                value={jobDetailData.companyPerks}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Email"
                id="contactEmail"
                name="contactEmail"
                type="email"
                onChange={handleChange}
                value={jobDetailData.contactEmail}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Website"
                id="companyWebsite"
                name="companyWebsite"
                type="url"
                onChange={handleChange}
                value={jobDetailData.companyWebsite}
                />

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Number"
                id="contactNumber"
                name="contactNumber"
                type="number"
                onChange={handleChange}
                value={jobDetailData.contactNumber}
                />

                <fieldset className="border p-3 rounded-md"> 
                <legend className="font-semibold">Work Location</legend>
                <div className="flex items-center space-x-6">
                    <input
                    className="accent-blue-500"
                    type="radio"
                    name="remoteWork"
                    id="remoteWork"
                    value="In Person"
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "In Person"}
                    />
                    <label htmlFor="In Person" className="cursor-pointer">In Person</label>
                    <input
                    className="accent-blue-500"
                    type="radio"
                    name="remoteWork"
                    id="remoteWork"
                    value="Remote"
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "Remote"}
                    />
                    <label htmlFor="Remote" className="cursor-pointer">Remote</label>
                    <input
                    className="accent-blue-500"
                    type="radio"
                    name="remoteWork"
                    id="remoteWork"
                    value="Hybrid"
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "Hybrid"}
                    />
                    <label htmlFor="Hybrid" className="cursor-pointer">Hybrid</label>
                </div>
                </fieldset>

                <input 
                className="border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-blue-500"
                type="file"
                id="companyLogo"
                name="companyLogo"
                onChange={handleChange}
                />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Submit
                </button>
              </form>
            </div>
          );
          
    
}

