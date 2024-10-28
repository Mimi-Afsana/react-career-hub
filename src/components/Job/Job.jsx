import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";  // Import PropTypes


const Job = ({ job }) => {
    // console.log(job)
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    console.log(typeof (id))

    return (
        <div>

            <div className="card-compact bg-base-100 border border-blue-100 rounded-md px-8 pt-8 py-4">
                <figure className="pl-4">
                    <img
                        src={logo}
                        alt="Jobs" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                    </div>

                    <div className="mt-4 flex">
                        <h2 className="flex mr-4"><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>{location}</h2>
                        <h2 className="flex"><HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>{salary}</h2>
                    </div>

                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn bg-violet-500 text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define the propTypes for Job component
Job.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  // id could be a string or a number
        logo: PropTypes.string.isRequired,  // logo should be a string (URL)
        job_title: PropTypes.string.isRequired,  // job_title should be a string
        company_name: PropTypes.string.isRequired,  // company_name should be a string
        remote_or_onsite: PropTypes.string.isRequired,  // remote_or_onsite should be a string
        location: PropTypes.string.isRequired,  // location should be a string
        job_type: PropTypes.string.isRequired,  // job_type should be a string
        salary: PropTypes.string.isRequired,  // salary should be a string
    }).isRequired,  // job object is required
};


export default Job;