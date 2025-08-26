import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { columns, SalaryButton } from '../components/SalaryUser';
import DataTable from 'react-data-table-component';

function SalaryList() {
    const [salaries, setSalaries] = useState([]);
    const onSalaryDel = async (id) => {
        const data = salaries.filter((sal) => sal._id !==id);
        setSalaries(data);
        fetchSalary();
    }
    const fetchSalary = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/salary/allSalary');
            const data = await response.json();
            const salaryWithSno = data.map((salary,index) => ({
                sno: index + 1,
                _id:salary._id,
                department: salary.department,
                staff: salary.staff,
                basicsalary: salary.basicsalary,
                allowances: salary.allowances,
                dedication: salary.dedication,
                paydate: salary.paydate,
                action:(<SalaryButton id={salary._id} onSalaryDel={onSalaryDel} />)
            }));
            setSalaries(salaryWithSno);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchSalary();
    },[])
  return (
    <>
    <Layout>
         <div className='p-5'>
        <div className='text-center'>
          <h3 className='font-semibold text-2xl'>Manage Salary List</h3>
        </div>
        {/* <div className='flex justify-between items-center'>
          <Link to={'/admin-dashboard/add-staff'} className='px-4 py-2 ms-auto bg-teal-600 text-white rounded'>Add Staff Details</Link>
        </div> */}
        <div className='p-5 rounde-lg shadow-lg'>
          <DataTable
          columns={columns}
          data={salaries}
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

export default SalaryList