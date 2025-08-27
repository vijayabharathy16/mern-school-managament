import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function ViewSalary() {
    const {id} = useParams();
    const [salary,setSalary] = useState ([]);
    
    const fetchViewSalary = async () => {
        try {
            const response = await fetch(`https://mern-school-managament-backend.onrender.com/api/salary/getOneSalary/${id}`);
            if(!response.ok) throw new Error('Failed to fetch to salary data');
            const data = await response.json();
             setSalary(data);
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(() =>{
        fetchViewSalary();
    },[id])
  return (
    <>
     <Layout>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-4 text-center ">Salary History</h2>
         <div className='flex justify-end items-center mt-5'>
            <Link to={'/admin-dashboard/salary-list'} className='bg-gray-400 cursor-pointer text-white py-1 px-6 rounded '><ArrowBackIcon/> Back</Link>
        </div>
        
          {salary && (
       
          <table className="table-auto  border border-gray-300 w-full text-left rounded mt-3">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">S.No</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Staff</th>
                <th className="border p-2">Basic Salary</th>
                <th className="border p-2">Allowances</th>
                <th className="border p-2">Deduction</th>
                <th className="border p-2">Pay Date</th>
              </tr>
            </thead>
            <tbody>
                
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">{salary.department}</td>
                <td className="border p-2">{salary.staff}</td>
                <td className="border p-2">{salary.basicsalary}</td>
                <td className="border p-2">{salary.allowances}</td>
                <td className="border p-2">{salary.dedication}</td>
                <td className="border p-2">{salary.paydate}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
     </Layout>
    </>
  )
}

export default ViewSalary