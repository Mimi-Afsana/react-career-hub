import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";  // Import PropTypes


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

// Define the propTypes for PrivateRoute
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,  // children should be React nodes and required
};

export default PrivateRoute;