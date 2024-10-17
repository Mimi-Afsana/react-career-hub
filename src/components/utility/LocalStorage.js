const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = idInt => {
    console.log(idInt)
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === idInt);
    // console.log(typeof (jobId))
    if (!exists) {
        storedJobApplications.push(idInt);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, saveJobApplication }