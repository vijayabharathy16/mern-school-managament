import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ViewLeave() {
    const {id} = useParams();
    const [leaves, setLeaves] = useState([]);
    const fetchViewLeave = async () => {
        try {
            const response = await fetch(`https://mern-school-managament-backend.onrender.com/api/leave/getOneLeave/${id}`);
            if(!response.ok) throw new Error ('Failed to fetch to salary data');
            const data = await response.json();
            setLeaves(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchViewLeave();
    },[id]);
  return (
    <>
    <Layout>
        <>

        <div className='flex justify-center items-center max-h-screen  mx-auto'>
           <h4 className='text-xl font-semibold mt-5 text-center'>View Leave History</h4>

           
        </div>
        <div className='text-center py-6  shadow-2xl rounded-lg w-1/2 mx-auto mt-5'>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>Name: </span>{leaves.staffname}</h4>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>Leave Type: </span>{leaves.leavetype}</h4>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>Start Date: </span>{leaves.startdate}</h4>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>End Date: </span>{leaves.enddate}</h4>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>Reason: </span>{leaves.reason}</h4>
            <h4 className='text-lg font-medium mt-5'><span className='font-medium text-gray-700'>Status: </span>{leaves.status}</h4>
            <div className='p-5'>
               <Link to={'/admin-dashboard/leave-list'} className='text-white bg-gray-600 py-2 px-4 rounded-lg'><ArrowBackIcon/> Back</Link>
           </div>
           </div>
           
        </>
    </Layout>
    </>
  )
}

export default ViewLeave