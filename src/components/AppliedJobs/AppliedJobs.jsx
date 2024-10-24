import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";
import { Helmet } from "react-helmet-async";
import Jobs from "../Jobs/Jobs";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    // console.log(jobs)

    const handleJobFilter = (lilter) => {
        if (lilter === 'all') {
            setDisplayJobs(appliedJobs);
        }

        else if (lilter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (lilter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }

    }
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
            setDisplayJobs(jobApplied)
        }

    }, [jobs])
    return (

        <div>
            <Helmet><title>Career Hub | Applied Jobs</title></Helmet>
            <div className="bg-violet-50 ">
                <div
                    className="h-52	"
                    style={{
                        backgroundImage: "url(../../assets/images/bg1.png)",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="back"></div>
                    <div className="hero-content  text-center ml-0 lg:ml-32">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-5xl font-bold mt-6">Applied Jobs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <Jobs key={job.id} job={job}>

                    </Jobs>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;