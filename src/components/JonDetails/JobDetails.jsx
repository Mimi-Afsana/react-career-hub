import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border border-red-600 md:col-span-3">
                    <h2>Job Details of: {job.job_title}</h2>
                </div>
                <div className="border border-blue-900">
                    <h2 className="text-4xl">wait for details coming here</h2>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;