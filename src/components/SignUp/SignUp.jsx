import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')

        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)

        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Login Successfully')
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-violet-500 text-white">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-600 text-center">
                        {registerError}
                    </p>
                }
                {
                    success && <p className="text-green-600">
                        {success}
                    </p>
                }
                <p className="text-center  mb-6">Already have an account <Link className="text-blue-600 font-bold" to='/login'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;