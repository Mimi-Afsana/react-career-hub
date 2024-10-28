import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { signInWithGoogle } = useContext(AuthContext)


    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    console.log('location in the login page', location)
    const emailRef = useRef(null)
    const auth = getAuth()


    const handleGoogleSignup = () => {
        console.log('google is here')
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .catch(error => {
                console.log('error', error.message)
            })
        navigate(location?.state ? location.state : '/')
    }


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
                if (result.user.emailVerified) {
                    setSuccess('User Login Successfully')
                    // navigate after login
                    navigate(location?.state ? location.state : '/')
                }
                else {
                    alert('Please verify your email address')
                }


            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            console.log('please provide an email', emailRef.current.value)
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return
        }
        console.log('forget password')

        // send validation email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <Helmet><title>Career Hub | Login</title></Helmet>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" ref={emailRef} required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered pr-10 w-full" // Add right padding to make space for the icon
                                required
                            />

                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <label className="label">
                            <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-violet-500 text-white">Login</button>
                    </div>
                </form>
                <div className="form-control w-32 mx-auto mb-3">
                    <button onClick={handleGoogleSignup} className="btn bg-violet-200">Google SignIn</button>
                </div>
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
                <p className="text-center  mb-6">Do not have an account? <Link className="text-blue-600 font-bold" to='/signup'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;