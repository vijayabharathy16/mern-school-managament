import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { columns, LeaveButton } from '../components/LeaveUser';
import DataTable from 'react-data-table-component';

function LeaveList() {
    const [leaves, setLeaves] = useState([]);
    const onLeaveDel = async (id) => {
        const data = leaves.filter((leave) => leave._id !==id);
        setLeaves(data);
        fetchLeave();
    }
    const fetchLeave = async() => {
        try {
             const resposne = await fetch('https://mern-school-managament-backend.onrender.com/api/leave/allLeave');
        const data = await resposne.json();
         const leaveWithSno = data.map((leave,index) => ({
                        sno: index + 1,
                        _id:leave._id,
                        staffname: leave.staffname,
                        leavetype: leave.leavetype,
                        startdate: leave.startdate,
                        enddate: leave.enddate,
                        reason: leave.reason,
                        status: leave.status,
                        action:(<LeaveButton id={leave._id} onLeaveDel={onLeaveDel} />)
                    }));
                 setLeaves(leaveWithSno);
        } catch (error) {
            console.log(error);
        }  
        
    }

    useEffect(() => {
        fetchLeave();
    }, []);
  return (
    <>
    <Layout>
         <div className='p-5'>
        <div className='text-center'>
          <h3 className='font-semibold text-2xl'>Manage Leave List</h3>
        </div>
        {/* <div className='flex justify-between items-center'>
          <Link to={'/admin-dashboard/add-staff'} className='px-4 py-2 ms-auto bg-teal-600 text-white rounded'>Add Staff Details</Link>
        </div> */}
        <div className='p-5 rounde-lg shadow-lg'>
          <DataTable
          columns={columns}
          data={leaves}
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

export default LeaveList