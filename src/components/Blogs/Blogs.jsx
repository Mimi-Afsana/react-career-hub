import { useEffect, useState } from 'react';
import '../Blogs/Blogs.css'
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const [blogsJobs, setBlogsJobs] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then((response) => response.json())
            .then((data) => {
                setBlogsJobs(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('/blogs.json')
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <Helmet><title>Career Hub | Blogs</title></Helmet>
            <header className="bg-violet-500 text-white text-center py-6 mt-5">
                <h1 className="text-4xl font-bold">Welcome to the Jobs Blog</h1>
            </header>
            <div className="  max-w-6xl mx-auto">
                <main className="container mx-auto p-6">
                    <section id="jobs" className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-violet-500">Available Jobs</h2>
                        <ul className="space-y-6">
                            {blogsJobs.map((job, index) => (
                                <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{job.job_title}</h3>
                                    <p className="text-gray-700">{job.job_description}</p>
                                    <p className="text-gray-500 mt-2"><strong>Location:</strong> {job.location}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="blogs">
                        <h2 className="text-2xl font-semibold mb-6 text-violet-500">Latest Blog Posts</h2>
                        <ul className="space-y-6">
                            {blogs.map((blog, index) => (
                                <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-700">{blog.content}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Blogs;