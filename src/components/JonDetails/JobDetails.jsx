import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/LocalStorage";

import { FaDollarSign } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { Helmet } from "react-helmet-async";



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
        <div className="">
            <Helmet><title>Career Hub | Job Details</title></Helmet>
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
                            <h1 className="mb-5 text-5xl font-bold mt-6">Job Details</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto my-16">
                <div className=" md:col-span-3 rounded mx-4 lg:mx-0">
                    <p className="mb-4"><span className="font-bold ">Job Description:</span> {job.job_description}</p>
                    <p className="mb-4"><span className="font-bold">Job Responsibility: </span> {job.job_responsibility}</p>
                    <p className="mb-4"><span className="font-bold">Educational Requirements:</span> <br /> {job.educational_requirements}</p>
                    <p><span className="font-bold">Experiences: </span> <br /> {job.experiences}</p>
                </div>
                <div className="">
                    <div className=" bg-violet-100 rounded mx-4 lg:mx-0">
                        <div className="p-4 py-5">
                            <h2 className="text-xl font-bold mb-6">Job Details</h2>
                            <p className="my-2 flex "> <FaDollarSign className="mt-1 mr-2 text-blue-500" />
                                <span className="font-semibold"> Salary: </span> {job.salary} - (Per Month)</p>
                            <p className="mb-6 my-2 flex"><HiOutlineOfficeBuilding className="mt-1 mr-2 text-blue-500" />
                                <span className="font-semibold ">Job title: </span>{job.job_title}</p>
                            <h4 className="font-bold text-xl mb-4">Contact Information</h4>
                            <p className="mb-2 my-2 flex"><FaPhoneAlt className="mt-1 mr-2 text-blue-500" />
                                <span className="font-semibold">Phone: </span>{job.contact_information.phone}</p>
                            <p className="mb-2 my-2 flex"><MdOutlineMail className="mt-1 mr-2 text-blue-500" />
                                <span className="font-semibold">Email: </span>{job.contact_information.email}</p>
                            <p className="mb-2 my-2 flex"><FaRegAddressCard className="mt-1 text-2xl mr-2 text-blue-500" />
                                <span className="font-semibold">Address: </span>{job.contact_information.address}</p>
                        </div>

                    </div>
                    <div className="mt-2 mx-4 lg:mx-0">
                        <button onClick={handleApplyJob} className="btn bg-violet-500 text-white w-full ">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;