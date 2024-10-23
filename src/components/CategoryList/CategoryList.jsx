
const CategoryList = () => {
    return (

        <div className="my-16 max-w-6xl mx-auto">
            <h2 className="text-5xl text-center font-semibold my-6">Job Category List</h2>
            <p className="text-center">Explore Thousand of job opportunities with all the information you need. Its your future</p>
            <div className="flex flex-col gap-4 lg:flex-row mt-8">
                <div className="px-6 card-compact bg-violet-50 pt-6 rounded-lg pr-16">
                    <figure className="px-4">
                        <img
                            src="../../assets/icons/accounts.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>

                    </div>
                </div>
                <div className="px-6 card-compact  bg-violet-50 pt-6 rounded-lg pr-16">
                    <figure className="px-4">
                        <img
                            src="../../assets/icons/creative.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Creative Design</h2>
                        <p>100 Jobs Available</p>

                    </div>
                </div>
                <div className="px-6 card-compact  bg-violet-50 pt-6 rounded-lg pr-16">
                    <figure className="px-4">
                        <img
                            src="../../assets/icons/marketing.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Marketing & Sales</h2>
                        <p>300 Jobs Available</p>

                    </div>
                </div>
                <div className="px-6 card-compact  bg-violet-50 pt-6 rounded-lg pr-16">
                    <figure className="px-4">
                        <img
                            src="../../assets/icons/chip.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Engineering Job</h2>
                        <p>300 Jobs Available</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CategoryList;