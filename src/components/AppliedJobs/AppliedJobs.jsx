import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    // console.log(jobs)
    useEffect(() => {
        const storeJobsIds = getStoredJobApplication()

        if (jobs.length > 0) {
            const jobApplied = []
            for (const id of storeJobsIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied)
        }

    }, [])
    return (

        <div>
            <h3>{appliedJobs.length}</h3>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    appliedJobs.map(job => <li key='job.id'>
                        <span>{job.job_title}</span> <br />
                    <span>{job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;