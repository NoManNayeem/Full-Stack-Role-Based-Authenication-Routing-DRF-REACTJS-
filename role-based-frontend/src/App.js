
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";



// Pages
//Admin Pages
import AdminPage from './pages/adminPages/admin';
//Admin Pages
import Public from "./pages/public";
import Login from './pages/authPages/Login';
// User Pages //
import User from "./pages/user";
// User Pages //
// Manager Pages //
import Manager from './pages/manager';
// Manager Pages //
import NotFound from "./pages/notfound";



// Routes
import LogInRoute from './routes/authRoutes';
import AdminRoute from './routes/adminRoutes';
import ManagerRoute from './routes/managerRoute';
// Routes

// Navbar Layout
import AdminNavBar from './components/adminNav';
import UserNavBar from './components/userNav';
import ManagerNavBar from './components/managerNav';
// Navbar Layout

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);


  function handleLogin(){
      if(sessionStorage.getItem("accessToken")){
      setIsLoggedIn(true);
      if(sessionStorage.getItem("userType")==="3"){
        setIsAdmin(false);
        setIsManager(false);
      };
      if(sessionStorage.getItem("userType")==="1"){
        setIsAdmin(true);
        setIsManager(false);
      };
      
      if(sessionStorage.getItem("userType")==="2"){
        setIsAdmin(false);
        setIsManager(true);
      }
    }
  }

  useEffect(() => {
    handleLogin();  
  })

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* User Routes Starts */}
          { isLoggedIn && !isAdmin && !isManager &&
            <Route path="/" element={
              <div className='mainContainer'>
                < UserNavBar/>
                <LogInRoute isLoggedIn={isLoggedIn}>
                  <Outlet/>
                </LogInRoute>
              </div>
              }
            >
          <Route path="/" element={<User />} />


            </Route>}

          {/* User Routes Ends  */}

          {/* Admin Routes Starts  */}
          { isLoggedIn && isAdmin && !isManager &&
            <Route path="/" element={
              <div className='mainContainer'>
                < AdminNavBar/>
                <AdminRoute isAdmin={isAdmin} isLoggedIn={isLoggedIn}>
                  <Outlet/>
                </AdminRoute>
              </div>
              }
            >
          <Route path="/" element={<AdminPage />} />


          </Route>}
          {/* Admin Routes Ends  */}
          

          
          {/* Manager Routes Starts  */}
          { isLoggedIn && isManager && !isAdmin &&
            <Route path="/" element={
              <div className='mainContainer'>
                < ManagerNavBar/>
                <ManagerRoute isManager={isManager} isLoggedIn={isLoggedIn}>
                  <Outlet/>
                </ManagerRoute>
              </div>
              }
            >
            <Route path="/" element={<Manager />} />


          </Route>}
          
          {/* Public Routes Starts */}
          <Route path="public" element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* Public Routes Ends */}

        </Routes>
      </BrowserRouter>
    </>
  );
}
