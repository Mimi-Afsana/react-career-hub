import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const Jobs = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="max-w-6xl mx-auto">
            <div className=" border border-blue-100 rounded pl-4 mb-6 p-4 mx-2">
                <div className="flex justify-center items-center  gap-6 lg:gap-16 flex-col lg:flex-row ">
                    <div className="w-60 mx-auto bg-slate-100 h-48 flex justify-center items-center rounded p-6">
                        <img
                            src={logo}
                            className="rounded-lg " />
                    </div>

                    <div className="flex justify-center items-center lg:gap-80 flex-col lg:flex-row">
                        <div>
                            <h1 className="text-2xl font-bold">{job_title}</h1>
                            <p className="py-4">
                                {company_name}
                            </p>
                            <div>
                                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                            </div>
                            <div className="mt-4 flex">
                                <h2 className="flex mr-4"><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>{location}</h2>
                                <h2 className="flex"><HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>{salary}</h2>
                            </div>

                        </div>

                        <Link to={`/job/${id}`} className="flex items-center justify-center lg:pr-16 mt-4 lg:mt-0">
                            <button className="btn bg-violet-500 text-white">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;