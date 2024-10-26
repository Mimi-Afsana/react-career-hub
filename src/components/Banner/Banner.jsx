
const Banner = () => {
    return (
        <>
            <div className="bg-violet-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
                        <img
                            src="../../assets/images/user.png"
                            className="max-w-sm rounded-lg" />
                        <div className="">
                            <h1 className="text-5xl font-bold text-center lg:text-start mt-4 lg:mt-0">One Step Closer <br /> To Your <br /> <span className="text-blue-400">Dream Job</span> </h1>
                            <p className="py-6 text-center lg:text-start">
                                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            </p>
                            <div className="flex justify-center lg:justify-start mb-4">
                                <button className="btn bg-violet-500 text-white font-semibold">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;