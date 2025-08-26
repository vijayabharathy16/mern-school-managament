import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
import { AuthProvider } from "./auth/AuthProvider";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./staffs/Users";
import AddSalary from "./salary/AddSalary";
import AddStaffMember from "./staffs/AddStaffMember";
import EditStaff from "./staffs/EditStaff";
import ViewStaff from "./staffs/ViewStaff";
import SalaryList from "./salary/SalaryList";
import EditSalary from "./salary/EditSalary";
import ViewSalary from "./salary/ViewSalary";
import AddLeave from "./leaves/AddLeave";
import LeaveList from "./leaves/LeaveList";
import ViewLeave from "./leaves/ViewLeave";
import EditLeave from "./leaves/EditLeave";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {

  return (
    <>
   
      <AuthProvider>
    
        <BrowserRouter>
      
          <Routes>
            {/* admin-dashbaord/editSalary */}
            {/* <Route path="/" element={<div className="p-8">Welcome. Use the nav to register or login.</div>} /> */}
            <Route path="/admin-dashbaord/staff-list"  element={<Users />}></Route>
            <Route path="/admin-dashbaord/edit/:id"  element={<EditStaff />}></Route>
            <Route path="/admin-dashbaord/view/:id"  element={<ViewStaff />}></Route>
            <Route path="/admin-dashboard/add-staff"  element={<AddStaffMember />}></Route>
            <Route path="/admin-dashboard/add-salary" element={<AddSalary />}></Route>
            <Route path="/admin-dashboard/salary-list" element={<SalaryList />}></Route>
            <Route path="/admin-dashboard/editSalary/:id"  element={<EditSalary />}></Route>
            <Route path="/admin-dashboard/viewSalary/:id"  element={<ViewSalary />}></Route>
             <Route path="/admin-dashboard/add-leave" element={<AddLeave />}></Route>
             <Route path="/admin-dashboard/leave-list" element={<LeaveList />}></Route>
             <Route path="/admin-dashboard/viewLeave/:id" element={<ViewLeave />}></Route>
             <Route path="/admin-dashboard/editLeave/:id" element={<EditLeave/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
