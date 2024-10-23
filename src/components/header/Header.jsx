import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "font-bold text-blue-500" : "text-black"
                    }
                >
                    Home
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                        isActive ? "font-bold text-blue-500" : "text-black"
                    }
                >
                    Jobs
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/applied"
                    className={({ isActive }) =>
                        isActive ? "font-bold text-blue-500" : "text-black"
                    }
                >
                    Applied Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                        isActive ? "font-bold text-blue-500" : "text-black"
                    }
                >
                    Blogs
                </NavLink>
            </li>
            {
                user ?
                    <button onClick={handleSignOut} className="btn">SignOut</button>
                    :
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-blue-500" : "text-black"
                            }
                        >
                            Login
                        </NavLink>
                    </li>
            }

        </>
    );

    return (
        <>
            <div className="bg-violet-50">
                <div className="navbar max-w-6xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {links}
                            </ul>
                        </div>
                        <a className="text-xl font-semibold">Career Hub</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-violet-500 text-white">Start Applying</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
