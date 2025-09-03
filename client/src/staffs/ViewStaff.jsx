import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import ViewProfile from '../assets/view.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GiteIcon from '@mui/icons-material/Gite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ViewStaff() {
    const {id} = useParams();
    const [staff, setStaff] = useState([]);

         const fetchViewStaff = async () =>{
                  try {
                    const response = await fetch(`https://mern-school-managament-front-end.onrender.com/api/staff/getSingle/${id}`);
                      if (!response.ok) throw new Error("Failed to fetch staff data");
                     const data = await response.json();
                    //  console.log(data)
                      setStaff(data);
                  
                  } catch (error) {
                    console.log(error)
                  }
            }
        
            useEffect(() =>{
              fetchViewStaff();
            }, [id])
  return (
    <>
    <Layout>
         <div className="flex flex-col items-center justify-center w-100 shadow-2xl mt-16 mx-auto p-6 rounded-lg">
        <div className="mb-6">
          <img
            src={ViewProfile}
            alt="Staff"
            className="w-32 h-32 rounded-full border"
          />
        </div>
        {/* <div className='py-4 '> */}
        <div className="text-center p-3">
          <h4 className="text-2xl font-semibold py-1"><AccountCircleIcon/>Name: <span>{staff.name}</span></h4>
          <p className="text-gray-600 py-1"><MailOutlineIcon/>Email: <span>{staff.email}</span></p>
          <p className="text-gray-600 py-1"><PhoneAndroidIcon/>Contact: <span>{staff.phoneno}</span></p>
          <p className="text-gray-600 py-1"><ApartmentIcon/>State: <span>{staff.state} </span></p>
          <p className="text-gray-600 py-1"><GiteIcon/>District: <span>{staff.district}</span></p>
          <p className="text-gray-600 py-1"><LocationOnIcon/>Address: <span>{staff.address}</span></p>
        </div>
        
        {/* </div> */}
        <div className='flex justify-center items-center'>
            <Link to={'/admin-dashbaord/staff-list'} className='bg-gray-400 cursor-pointer text-white py-1 px-6 rounded '><ArrowBackIcon/> Back</Link>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default ViewStaff