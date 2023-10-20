import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user, reload } = useContext(AuthContext);

    const location = useLocation();

    if (reload) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }


    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoutes;