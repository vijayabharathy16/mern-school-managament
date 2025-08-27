import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { Bounce, toast } from "react-toastify";
function EditStaff() {
    const {id} = useParams();
    const navigate = useNavigate();
    //  
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [state,setState] = useState("");
    const [district,setDistrict] = useState("");
    const [address,setAddress] = useState("");

     const fetchStaff = async () =>{
              try {
                const response = await fetch(`https://mern-school-managament-backend.onrender.com/api/staff/getSingle/${id}`);
                const data = await response.json();
                //  console.log(data)
                   setName(data.name || "");
                   setEmail(data.email || "");
                   setPhoneno(data.phoneno || "");
                   setState(data.state || "");
                   setDistrict(data.district || "");
                   setAddress(data.address || "");
                            
              } catch (error) {
                console.log(error)
              }
        }
    
        useEffect(() =>{
          fetchStaff();
        }, [id])

       const editStaff = async(e) =>{
        e.preventDefault();

        try {
            const response = await fetch (`https://mern-school-managament-backend.onrender.com/api/staff/updatedUser/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({name,email,phoneno,state,district,address}),
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
                navigate("/admin-dashbaord/staff-list");
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
            <h2 className="text-2xl font-semibold mb-6">Edit Staffs</h2>
            <form onSubmit={editStaff} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter the name"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter the email"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Contact</label>
                <input
                  type="number"
                  value={phoneno}
                  placeholder="Enter the number"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                   onChange={(e) => setPhoneno(e.target.value)}
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  value={state}
                  placeholder="Enter the state"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                 onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <label>District</label>
                <input
                  type="text"
                  value={district}
                  placeholder="Enter the district"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  placeholder="Enter the address"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-2">
                <Link
                  to={"/admin-dashbaord/staff-list"}
                  className="bg-gray-500 py-2 px-2 text-white cursor-pointer rounded-lg "
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
   
  )
}

export default EditStaff