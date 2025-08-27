import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { Bounce, toast } from "react-toastify";

function AddStaffMember() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneno,setPhoneno] = useState('');
    const [state,setState] = useState('');
    const [district,setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
     const[errors,setErrors] = useState({});

     const validateForm = () =>{
       let newErrors = {};

       if(!name.trim()){
        newErrors.name = 'Name is required';
       }
       if(!email.trim()){
        newErrors.email = 'Email is required';
       }else if(!/\S+@\S+\.\S+/.test(email)){
        newErrors.email = 'Email format is Invalid'
       }
       if(!phoneno.trim()){
        newErrors.phoneno = 'Contact is required';
       }
       if(!state.trim()){
        newErrors.state = 'State is required';
       }
       if(!district.trim()){
        newErrors.district = 'District is required';
       }
       if(!address.trim()){
        newErrors.address = 'Address is required';
       }

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
    };
    
    const addStaff = async (e) => {
         e.preventDefault();
         if(!validateForm()) return;
        try {
            const response = await fetch('https://mern-school-managament-backend.onrender.com/api/staff/addStaff',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name,email,phoneno,state,district,address}),
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
            navigate("/admin-dashbaord/staff-list");
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
            <h2 className="text-2xl font-semibold mb-6">Add Staffs</h2>
            <form onSubmit={addStaff} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter the name"
                  className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setName(e.target.value)}
                />
                 {errors.name && (<p className="text-red-500 text-sm mt-1">{errors.name}</p>)}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter the email"
                  className={`w-full border  ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setEmail(e.target.value)}
                />
                 {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
              </div>
              <div>
                <label>Contact</label>
                <input
                  type="number"
                  value={phoneno}
                  placeholder="Enter the number"
                  className={`w-full border  ${errors.phoneno ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                   onChange={(e) => setPhoneno(e.target.value)}
                />
                 {errors.phoneno && (<p className="text-red-500 text-sm mt-1">{errors.phoneno}</p>)}
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  value={state}
                  placeholder="Enter the state"
                  className={`w-full border ${errors.state ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                 onChange={(e) => setState(e.target.value)}
                />
                 {errors.state && (<p className="text-red-500 text-sm mt-1">{errors.state}</p>)}
              </div>
              <div>
                <label>District</label>
                <input
                  type="text"
                  value={district}
                  placeholder="Enter the district"
                  className={`w-full border  ${errors.district ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setDistrict(e.target.value)}
                />
                 {errors.district && (<p className="text-red-500 text-sm mt-1">{errors.district}</p>)}
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  placeholder="Enter the address"
                  className={`w-full border  ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setAddress(e.target.value)}
                />
                 {errors.address && (<p className="text-red-500 text-sm mt-1">{errors.address}</p>)}
              </div>
              <div className="md:col-span-2 flex justify-end gap-2">
                <Link
                  to={"/admin-dashbaord/staff-list"}
                  className="bg-gray-400 py-2 px-2 text-white cursor-pointer rounded-lg "
                >
                    <ArrowBackIcon/>
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-sky-500 py-2 px-2 text-white rounded-lg cursor-pointer hover:bg-sky-600 transition duration-200"
                >
                    <SaveIcon/>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AddStaffMember;
