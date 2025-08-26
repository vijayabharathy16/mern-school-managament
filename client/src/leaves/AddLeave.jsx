import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";
import SaveIcon from '@mui/icons-material/Save';
function AddLeave() {
        const [staffname,setStaffName] = useState('');
        const [leavetype,setLeaveType] = useState('');
        const [startdate,setStartDate] = useState('');
        const [enddate,setEndDate] = useState('');
        const [reason, setReason] = useState('');
        const [status, setStatus] = useState("Pending");
        const navigate = useNavigate();
         const[errors,setErrors] = useState({});

       const validateForm = () =>{
       let newErrors = {};

        if (!staffname.trim()) {
      newErrors.staffname = "Staff name is required";
    }
    if (!leavetype.trim()) {
      newErrors.leavetype = "Leave type is required";
    }
    if (!startdate.trim()) {
      newErrors.startdate = "Start date is required";
    }
    if (!enddate.trim()) {
      newErrors.enddate = "End date is required";
    }
    if (!reason.trim()) {
      newErrors.reason = "Reason is required";
    }
    if (!status.trim()) {
      newErrors.status = "Status is required";
    }
       

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
    };
    
    const addLeave = async(e) => {
        e.preventDefault();
    if(!validateForm()) return;
        try {
            const response = await fetch('http://localhost:3001/api/leave/addLeave',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({staffname,leavetype,startdate,enddate,reason,status}),
            });
            const result = await response.json();
             if (response.ok) {
            toast.success('Successfully added', {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               transition: Bounce,
               });
            navigate("/admin-dashboard/leave-list");
            } else {
              alert(result.message || "Failed to add staff member");
            }
        } catch (error) {
            console.log(error)
        }
    }

//      const statusColor = {
//     Pending: "text-yellow-600 font-semibold",
//     Approved: "text-green-600 font-semibold",
//     Rejected: "text-red-600 font-semibold"
//   };
  return (
    <>
    <Layout>
        <div className="p-5">
          <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Add Staff Leave</h2>
            <form onSubmit={addLeave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Staff Name</label>
                <input
                  type="text"
                  value={staffname}
                  placeholder="Enter the name"
                  className={`w-full border ${errors.staffname ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setStaffName(e.target.value)}
                />
                
                 {errors.staffname && (<p className="text-red-500 text-sm mt-1">{errors.staffname}</p>)}
              </div>
              <div>
                <label>Leave Type</label>
                {/* <input
                  type="text"
                  value={staff}
                  placeholder="Enter the staff"
                  className={`w-full border  ${errors.staff ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setStaff(e.target.value)}
                /> */}
                 <select  name="leaveType" value={leavetype}  className={`w-full border ${errors.leavetype ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`} onChange={(e) => setLeaveType(e.target.value)}>
                   <option value="">Select leave type</option>
                   <option value="Sick Leave">Sick Leave</option>
                   <option value="Casual Leave">Casual Leave</option>
                   <option value="Earned Leave">Earned Leave</option>
                   <option value="Maternity Leave">Maternity Leave</option>
                   <option value="Other">Other</option>
                </select>
                 {errors.leavetype && (<p className="text-red-500 text-sm mt-1">{errors.leavetype}</p>)}
              </div>
              <div>
                <label>Start Date</label>
                <input
                  type="date"
                  value={startdate}
                  placeholder="Enter the number"
                  className={`w-full border  ${errors.startdate ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setStartDate(e.target.value)}
                />
                 {errors.startdate && (<p className="text-red-500 text-sm mt-1">{errors.startdate}</p>)}
              </div>
              <div>
                <label>End date</label>
                <input
                  type="date"
                  value={enddate}
                  placeholder="Enter the state"
                  className={`w-full border ${errors.enddate ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                 onChange={(e) => setEndDate(e.target.value)}
                />
                 {errors.enddate && (<p className="text-red-500 text-sm mt-1">{errors.enddate}</p>)}
              </div>
              <div>
              <label>Status</label>
              <select
                value={status}
                className={`w-full border ${
                  errors.status ? "border-red-500" : "border-gray-300" 
               } rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
      status === "Pending"
        ? "bg-yellow-100 text-yellow-700 font-semibold"
        : status === "Approved"
        ? "bg-green-100 text-green-700 font-semibold"
        : status === "Rejected"
        ? "bg-red-100 text-red-700 font-semibold"
        : "bg-white"}`}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending"  className="text-yellow-600 font-semibold" >Pending</option>
                <option value="Approved" className="text-green-600 font-semibold">Approved</option>
                <option value="Rejected" className="text-red-600 font-semibold">Rejected</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">{errors.status}</p>
              )}
              {status && (
    <span
      className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold
        ${
          status === "Pending"
            ? "bg-yellow-200 text-yellow-800"
            : status === "Approved"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
    >
      {status}
    </span>
  )}
            </div>
              <div>
                <label>Reason</label>
                {/* <input
                  type="text"
                  value={dedication}
                  placeholder="Enter the district"
                  className={`w-full border  ${errors.dedication ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setDedication(e.target.value)}
                /> */}
                <textarea  
                name='reason' 
                value={reason}
                className={`w-full border  ${errors.reason ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                onChange={(e) => setReason(e.target.value)}
                >
                   
                </textarea>
                 {errors.reason && (<p className="text-red-500 text-sm mt-1">{errors.reason}</p>)}
              </div>
               
              <div className=" md:col-span-2 flex justify-center items-center">
               
                <button
                  type="submit"
                  className="bg-sky-500 py-2 px-2 text-white rounded-lg cursor-pointer hover:bg-sky-600 transition duration-200 w-5xl"
                >
                    <SaveIcon />
                   Add Leave
                </button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
    </>
  )
}

export default AddLeave