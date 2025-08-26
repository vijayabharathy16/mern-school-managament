import React, { useEffect, useState } from 'react'

 import Sidebar from "../components/Sidebar"
import Topbar from '../components/Topbar'
import Layout from '../components/Layout'
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import { columns,  StaffButton } from '../components/StaffUser';
// import { Table } from "flowbite-react";




function Users() {
   
  const [staffs, setStaff] = useState([]);
  
   const onStaffDel = async (id) => {
       const data = staffs.filter((stf) => stf._id !== id)
       setStaff(data);
        fetchStaff();
   };
    const fetchStaff = async () =>{
          try {
            const response = await fetch('http://localhost:3001/api/staff/allStaff');
            const data = await response.json();
            const staffWithSno = data.map((staff, index) => ({
        sno: index + 1,
        _id:staff._id,
        name: staff.name,
        email: staff.email,
        phoneno: staff.phoneno,
        state: staff.state,
        district: staff.district,
        address: staff.address,
        action:(<StaffButton id={staff._id} onStaffDel={onStaffDel}/>)
      }));
          setStaff(staffWithSno);
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() =>{
      fetchStaff();
    }, [])
 
    

  return (
    
    <>
    <Layout>
      <div className='p-5'>
        <div className='text-center'>
          <h3 className='font-semibold text-2xl'>Manage Staff List</h3>
        </div>
        <div className='flex justify-between items-center'>
          <Link to={'/admin-dashboard/add-staff'} className='px-4 py-2 ms-auto bg-teal-600 text-white rounded'>Add Staff Details</Link>
        </div>
        <div className='p-5 rounde-lg shadow-lg'>
          <DataTable
          columns={columns}
          data={staffs}
           keyField="_id" 
            pagination
            
            highlightOnHover
            
            paginationPerPage={5}
         
            responsive
            
         
          />
        </div>
      </div>
    </Layout>
   
    </>
  )
}

export default Users