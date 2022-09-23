import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const ManagerRoute = ({ isLoggedIn, isManager, children }) => {
 if (!isLoggedIn | !isManager) {
    toast.error("You are not a Manager!",{toastId: 'success1',});
 return <Navigate to="/" replace />;
 }
 return children;
};
export default ManagerRoute;