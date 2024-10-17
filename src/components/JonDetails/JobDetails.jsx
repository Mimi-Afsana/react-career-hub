import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(typeof (id))
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job, typeof (job.id));

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('you have applied successfully')
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border border-red-600 md:col-span-3">
                    <h2>Job Details of: {job.job_title}</h2>
                </div>
                <div className="border border-blue-900">
                    <h2 className="text-4xl">wait for details coming here</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;