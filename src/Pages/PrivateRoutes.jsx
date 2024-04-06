import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);


  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center ">
        <ClipLoader color="#36d7b7" />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
    
  }

  return <div>{children}</div>;
};
PrivateRoutes.propTypes={
  children:PropTypes.node
}
export default PrivateRoutes;
