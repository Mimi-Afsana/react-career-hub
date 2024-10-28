import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";
import { updateProfile } from "firebase/auth/cordova";


const SignUp = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    const { signInWithGoogle } = useContext(AuthContext)



    // Google signup
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


    // const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const accepted = form.get('terms')
        console.log(name, email, accepted)

        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 character or longer')
            return
        }

        else if (!accepted) {
            setRegisterError('Please accept our terms and condition!')
            return
        }

        // createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Login Successfully')

                // update profile
                updateProfile(result.user, {
                    displayName: name
                })
                    .then((result) => {
                        const EpUser = result.user
                        setUser(EpUser);
                        console.log(EpUser)
                    })
                    .catch(() => {
                        console.log('get error')
                    })
                // email verification
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Please check your email and verify tour account')
                    })

                // navigate after login
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }


    return (
        <div>
            <Helmet><title>Career Hub | Register</title></Helmet>
            <div>
                <h2 className="text-3xl mt-10 text-center">Please Register</h2>
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
                    </div>
                    <div className="form-control lg:w-2/5 w-4/6">
                        <label className="cursor-pointer label">
                            <input type="checkbox" defaultChecked
                                className="checkbox checkbox-primary" name="terms" />
                            <span className="label-text">Accepts our terms and condition</span>
                        </label>
                    </div>


                    <div className="form-control mt-4">
                        <button className="btn bg-violet-500 text-white">Register</button>
                        {
                            user && <h1>Welcome, {user?.displayName}!</h1>
                        }
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
                    success && <p className="text-green-600 text-center">
                        {success}
                    </p>
                }
                <p className="text-center  mb-10 mt-2">Already have an account? <Link className="text-blue-600 font-bold" to='/login'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;