import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const AdminRoute = ({ isLoggedIn, isAdmin, children }) => {
 if (!isLoggedIn | !isAdmin) {
    toast.error("You are not an ADMIN!",{toastId: 'success1',});
 return <Navigate to="/" replace />;
 }
 return children;
};
export default AdminRoute;