import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto my-16">
            <div className="text-center">
                <h1>{dataLength.length}</h1>
                <h2 className="text-5xl my-6 font-semibold">Featured Jobs</h2>
                <p>Explore Thousand of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mx-2 lg:mx-0">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex justify-center">
                <div className={dataLength === jobs.length ? 'hidden' : ''} >
                    <button onClick={() => setDataLength(jobs.length)} className="btn bg-violet-500 text-white mt-8 ">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;