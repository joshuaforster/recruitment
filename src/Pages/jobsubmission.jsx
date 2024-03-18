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
      

      return(
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
                // Title 
                type='text'
                placeholder='Title'
                onChange={handleChange}
                name='title'
                value={jobDetailData.title}
            />
            <input 
                // CompanyName
                type="text"
                placeholder='Company Name'
                onChange={handleChange}
                name='companyName'
                value={jobDetailData.companyName}
            />
            <input 
                // Location
                type="text"
                placeholder='Location'
                onChange={handleChange}
                name='location'
                value={jobDetailData.location}
            />
            <fieldset>
                {/* type of job */}
                <legend>Type of job</legend>
                <input
                    type='radio'
                    id='Full-Time'
                    name='jobType'
                    value='Full-Time'
                    checked={jobDetailData.jobType === 'Full-Time'}
                    onChange = {handleChange}
                />
                <label htmlFor='Full-Time'>Full-Time</label>
                <input
                    type='radio'
                    id='Part-Time'
                    name='jobType'
                    value='Part-Time'
                    checked={jobDetailData.jobType === 'Part-Time'}
                    onChange = {handleChange}
                />
                <label htmlFor='Part-Time'>Part-Time</label>
                <input
                    type='radio'
                    id='Contract'
                    name='jobType'
                    value='Contract'
                    checked={jobDetailData.jobType === 'Contract'}
                    onChange = {handleChange}
                />
                <label htmlFor='Contract'>Contract</label>
            </fieldset>
            <input 
                // Job category
                placeholder='Job Category'
                type='text'
                name='category'
                id='category'
                onChange={handleChange}
                value={jobDetailData.category}
            />
            <input 
                // Salary range
                placeholder='Salary Range'
                id='salayRange'
                name='salaryRange'
                type='text'
                onChange={handleChange}
                value={jobDetailData.salaryRange}
            />  
            <input 
                // Experience Level
                placeholder='Experience Level'
                id='experienceLevel'
                name='experienceLevel'
                type='text'
                onChange={handleChange}
                value={jobDetailData.experienceLevel}
            />
            <input 
                // Responsibilities
                placeholder='Responsibilities'
                id='responsibilities'
                name='responsibilities'
                type='text'
                onChange={handleChange}
                value={jobDetailData.responsibilities}
            />
            <input 
                // Qualifications
                placeholder='Qualifications'
                id='qualifications'
                name='qualifications'
                type='text'
                onChange={handleChange}
                value={jobDetailData.qualifications}
            />            
            <input 
                // Company Description
                placeholder='Company Description'
                id='companyDescription'
                name='companyDescription'
                type='text'
                onChange={handleChange}
                value={jobDetailData.companyDescription}
            />
            <input 
                // Application Deadline
                placeholder='Company Description'
                id='applicationDeadline'
                name='applicationDeadline'
                type='date'
                onChange={handleChange}
                value={jobDetailData.applicationDeadline}
            />
            <input 
                // Application Process
                placeholder='Application Process'
                id='applicationProcess'
                name='applicationProcess'
                type='text'
                onChange={handleChange}
                value={jobDetailData.applicationProcess}
            />
            <input 
                // Benefits
                placeholder='Benefits'
                id='benefits'
                name='benefits'
                type='text'
                onChange={handleChange}
                value={jobDetailData.benefits}
            />
            <input 
                // Work Hours
                placeholder='Work Hours'
                id='workHours'
                name='workHours'
                type='text'
                onChange={handleChange}
                value={jobDetailData.workHours}
            />
            <input 
                // Travel Requirements
                placeholder='Travel Requirements'
                id='travelRequirements'
                name='travelRequirements'
                type='text'
                onChange={handleChange}
                value={jobDetailData.travelRequirements}
            />
            <input 
                // Diversity Statements
                placeholder='Diversity Statements'
                id='diversityStatement'
                name='diversityStatement'
                type='text'
                onChange={handleChange}
                value={jobDetailData.diversityStatement}
            />
            <input 
                // Keywords
                placeholder='Keywords'
                id='keywords'
                name='keywords'
                type='text'
                onChange={handleChange}
                value={jobDetailData.keywords}
            />
            <input 
                // Perks
                placeholder='Perks'
                id='companyPerks'
                name='companyPerks'
                type='text'
                onChange={handleChange}
                value={jobDetailData.companyPerks}
            />
            <input 
                // Email
                placeholder='Email'
                id='contactEmail'
                name='contactEmail'
                type='email'
                onChange={handleChange}
                value={jobDetailData.contactEmail}
            />
            <input 
                // Website
                placeholder='Website'
                id='companyWebsite'
                name='companyWebsite'
                type='url'
                onChange={handleChange}
                value={jobDetailData.companyWebsite}
            />
            <input 
                // Number
                placeholder='Number'
                id='contactNumber'
                name='contactNumber'
                type='number'
                onChange={handleChange}
                value={jobDetailData.contactNumber}
            />
            <fieldset> 
                {/* Work Location */}
                <legend>Work Location</legend>
                <input
                    type='radio'
                    name='remoteWork'
                    id='remoteWork'
                    value="In Person"
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "In Person"}
                />
                <label htmlFor='In Person'>In Person</label>
                <input
                    type='radio'
                    name='remoteWork'
                    id='remoteWork'
                    value="Remote"
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "Remote"}
                />
                <label htmlFor='Remote'>Remote</label>
                <input
                    type='radio'
                    name='remoteWork'
                    id='remoteWork'
                    value='Hybrid'
                    onChange={handleChange}
                    checked={jobDetailData.remoteWork === "Hybrid"}
                />
                <label htmlFor='Hybrid'>Hybrid</label>
            </fieldset>
            <input 
                type="file"
                id="companyLogo"
                name="companyLogo"
                onChange={handleChange}
                />
        <button>Submit</button>
        </form>
      )
      
}

