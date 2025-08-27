import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import SaveIcon from '@mui/icons-material/Save';
import { Bounce, toast } from 'react-toastify';


function EditLeave() {
    const {id} = useParams();
     const [staffname,setStaffName] = useState('');
     const [leavetype,setLeaveType] = useState('');
     const [startdate,setStartDate] = useState('');
     const [enddate,setEndDate] = useState('');
     const [reason, setReason] = useState('');
     const [status, setStatus] = useState("Pending");
     const navigate = useNavigate();

     const fetchLeave = async () => {
        try {
            const response = await fetch(`https://mern-school-managament-backend.onrender.com/api/leave/getOneLeave/${id}`);
            const data = await response.json();
            setStaffName(data.staffname || '');
            setLeaveType(data.leavetype || '');
            setStartDate(data.startdate || '');
            setEndDate(data.enddate || '');
            setReason(data.reason || '');
            setStatus(data.status || '');
        } catch (error) {
            console.log(error);
        }
     }

     useEffect(() =>{
        fetchLeave();
     },[id]);

     const editLeave = async(e) => {
        e.preventDefault();
        try {
             const response = await fetch (`https://mern-school-managament-backend.onrender.com/api/leave/updatedLeave/${id}`,{
                 method:"PUT",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body:JSON.stringify({staffname,leavetype,startdate,enddate,reason,status}),
                 });
              
            const result = await response.json();
              if(response.ok){
                   toast.success('Edited Successfully', {
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
                     }else{
                         alert(result.message || "Updated failed")
                     }
                  } catch (error) {
                    console.log(error)
                  }
              }
  return (
    <>
    <Layout>
        <div className="p-5">
          <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Update Staff Leave</h2>
            <form onSubmit={editLeave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Staff Name</label>
                <input
                  type="text"
                  value={staffname}
                  placeholder="Enter the name"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setStaffName(e.target.value)}
                />
                
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
                 <select  name="leaveType" value={leavetype}  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500" onChange={(e) => setLeaveType(e.target.value)}>
                   <option value="">Select leave type</option>
                   <option value="Sick Leave">Sick Leave</option>
                   <option value="Casual Leave">Casual Leave</option>
                   <option value="Earned Leave">Earned Leave</option>
                   <option value="Maternity Leave">Maternity Leave</option>
                   <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>Start Date</label>
                <input
                  type="date"
                  value={startdate}
                  placeholder="Enter the number"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                   onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <label>End date</label>
                <input
                  type="date"
                  value={enddate}
                  placeholder="Enter the state"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                 onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div>
              <label>Status</label>
              <select
                value={status}
                className={`w-full border 
                  
                rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
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
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => setReason(e.target.value)}
                >
                   
                </textarea>
              </div>
               
              <div className=" md:col-span-2 flex justify-center items-center">
               
                <button
                  type="submit"
                  className="bg-sky-500 py-2 px-2 text-white rounded-lg cursor-pointer hover:bg-sky-600 transition duration-200 w-5xl"
                >
                    <SaveIcon />
                   Update Leave
                </button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
    </>
  )
}

export default EditLeave