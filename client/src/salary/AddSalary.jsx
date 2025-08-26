import React, {  useState } from 'react'

 import Sidebar from "../components/Sidebar"
import Topbar from '../components/Topbar'
import Layout from '../components/Layout'
import DataTable from "react-data-table-component";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
// import { Table } from "flowbite-react";




function AddSalary() {
   const [department,setDepartment] = useState('');
    const [staff,setStaff] = useState('');
    const [basicsalary,setBasicsalary] = useState('');
    const [allowances,setAllowances] = useState('');
    const [dedication,setDedication] = useState('');
    const [paydate, setPaydate] = useState('');
    const navigate = useNavigate();
     const[errors,setErrors] = useState({});

     const validateForm = () =>{
       let newErrors = {};

       if(!department.trim()){
        newErrors.department = 'Dept is required';
       }
       if(!staff.trim()){
        newErrors.staff = 'staff is required';
       }
       if(!basicsalary.trim()){
        newErrors.basicsalary = 'Basic salary is required';
       }
       if(!allowances.trim()){
        newErrors.allowances = 'Allowances is required';
       }
       if(!dedication.trim()){
        newErrors.dedication = 'Dedication is required';
       }
       if(!paydate.trim()){
        newErrors.paydate = 'Paydate is required';
       }

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
    };

 const addSalary = async (e) => {
   e.preventDefault();
   if(!validateForm()) return;
      try {
            const response = await fetch('http://localhost:3001/api/salary/addSalary',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({department,staff,basicsalary,allowances,dedication,paydate}),
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
            navigate("/admin-dashboard/salary-list");
            } else {
              alert(result.message || "Failed to add staff member");
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
            <h2 className="text-2xl font-semibold mb-6">Add Staff Salary</h2>
            <form onSubmit={addSalary} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Department</label>
                {/* <input
                  type="text"
                  value={department}
                  placeholder="Enter the name"
                  className={`w-full border ${errors.department ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setDepartment(e.target.value)}
                /> */}
                 <select  name="subject" value={department}  className={`w-full border ${errors.department ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`} onChange={(e) => setDepartment(e.target.value)}>
                  
                 <option>Social</option>
                  <option>Maths</option>
                 <option>Science</option>
                 <option>English</option>
                 <option>Tamil</option>
                 <option>PT Sir</option>
                 <option>LIB</option>
               
                </select>
                 {errors.department && (<p className="text-red-500 text-sm mt-1">{errors.department}</p>)}
              </div>
              <div>
                <label>Staff</label>
                <input
                  type="text"
                  value={staff}
                  placeholder="Enter the staff"
                  className={`w-full border  ${errors.staff ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setStaff(e.target.value)}
                />
                 {errors.staff && (<p className="text-red-500 text-sm mt-1">{errors.staff}</p>)}
              </div>
              <div>
                <label>Basic Salary</label>
                <input
                  type="number"
                  value={basicsalary}
                  placeholder="Enter the number"
                  className={`w-full border  ${errors.basicsalary ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setBasicsalary(e.target.value)}
                />
                 {errors.basicsalary && (<p className="text-red-500 text-sm mt-1">{errors.basicsalary}</p>)}
              </div>
              <div>
                <label>Allowances</label>
                <input
                  type="number"
                  value={allowances}
                  placeholder="Enter the state"
                  className={`w-full border ${errors.allowances ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                 onChange={(e) => setAllowances(e.target.value)}
                />
                 {errors.allowances && (<p className="text-red-500 text-sm mt-1">{errors.allowances}</p>)}
              </div>
              <div>
                <label>Dedication</label>
                <input
                  type="text"
                  value={dedication}
                  placeholder="Enter the district"
                  className={`w-full border  ${errors.dedication ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setDedication(e.target.value)}
                />
                 {errors.dedication && (<p className="text-red-500 text-sm mt-1">{errors.dedication}</p>)}
              </div>
              <div>
                <label>Pay Date</label>
                <input
                  type="date"
                  value={paydate}
                  placeholder="Enter the address"
                  className={`w-full border  ${errors.paydate ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setPaydate(e.target.value)}
                />
                 {errors.paydate && (<p className="text-red-500 text-sm mt-1">{errors.paydate}</p>)}
              </div>
              <div className=" md:col-span-2 flex justify-center items-center">
               
                <button
                  type="submit"
                  className="bg-sky-500 py-2 px-2 text-white rounded-lg cursor-pointer hover:bg-sky-600 transition duration-200 w-5xl"
                >
                    <SaveIcon />
                   Add Salary
                </button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
   
    </>
  );
}

export default AddSalary;