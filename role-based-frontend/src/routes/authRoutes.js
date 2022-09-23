import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const LogInRoute = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
    toast.error("Log In Required!",{toastId: 'success1',});
 return <Navigate to="/" replace />;
 }
 return children;
};
export default LogInRoute;