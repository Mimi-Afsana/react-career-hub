import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    console.log('location in the login page', location)

    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)


        // signinuser
        signIn(email, password)
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
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-violet-500 text-white">Login</button>
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
                <p className="text-center  mb-6">Do not have an account <Link className="text-blue-600 font-bold" to='/signup'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;