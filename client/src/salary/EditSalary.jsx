import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { Bounce, toast } from "react-toastify";
function EditSalary() {
        const {id} = useParams();
    
       const [department,setDepartment] = useState('');
        const [staff,setStaff] = useState('');
        const [basicsalary,setBasicsalary] = useState('');
        const [allowances,setAllowances] = useState('');
        const [dedication,setDedication] = useState('');
        const [paydate, setPaydate] = useState('');
        const navigate = useNavigate();
  
       const fetchSalary = async () => {
          try {
            const response = await fetch(`http://localhost:3001/api/salary/getOneSalary/${id}`);
            const data = await response.json();
            setDepartment(data.department || '');
            setStaff(data.staff || '');
            setBasicsalary(data.basicsalary || '');
            setAllowances(data.allowances || '');
            setDedication(data.dedication || '');
            setPaydate(data.paydate || '');
          } catch (error) {
            console.log(error)
          }
       }

       useEffect(() =>{
        fetchSalary();
       },[id]);

       const editSalary = async (e) => {
        e.preventDefault();
               try {
                const response = await fetch (`http://localhost:3001/api/salary/updateSalary/${id}`,{
                 method:"PUT",
                  headers:{
                      "Content-Type" : "application/json"
                  },
                  body:JSON.stringify({department,staff,basicsalary,allowances,dedication,paydate}),
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
                            navigate("/admin-dashboard/salary-list");
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
            <h2 className="text-2xl font-semibold mb-6">Add Staff Salary</h2>
            <form onSubmit={editSalary} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label>Department</label>
                {/* <input
                  type="text"
                  value={department}
                  placeholder="Enter the name"
                  className={`w-full border ${errors.department ? "border-red-500" : "border-gray-300"} rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  onChange={(e) => setDepartment(e.target.value)}
                /> */}
                 <select  name="subject" value={department}  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500" onChange={(e) => setDepartment(e.target.value)}>
                  
                 <option>Social</option>
                  <option>Maths</option>
                 <option>Science</option>
                 <option>English</option>
                 <option>Tamil</option>
                 <option>PT Sir</option>
                 <option>LIB</option>
               
                </select>
              </div>
              <div>
                <label>Staff</label>
                <input
                  type="text"
                  value={staff}
                  placeholder="Enter the staff"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                   onChange={(e) => setStaff(e.target.value)}
                />
              </div>
              <div>
                <label>Basic Salary</label>
                <input
                  type="number"
                  value={basicsalary}
                  placeholder="Enter the number"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                   onChange={(e) => setBasicsalary(e.target.value)}
                />
              </div>
              <div>
                <label>Allowances</label>
                <input
                  type="number"
                  value={allowances}
                  placeholder="Enter the state"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                 onChange={(e) => setAllowances(e.target.value)}
                />
              </div>
              <div>
                <label>Dedication</label>
                <input
                  type="text"
                  value={dedication}
                  placeholder="Enter the district"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setDedication(e.target.value)}
                />
              </div>
              <div>
                <label>Pay Date</label>
                <input
                  type="date"
                  value={paydate}
                  placeholder="Enter the address"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setPaydate(e.target.value)}
                />
              </div>
              <div className=" md:col-span-2 flex justify-center items-center">
               
                <button
                  type="submit"
                  className="bg-sky-500 py-2 px-2 text-white rounded-lg cursor-pointer hover:bg-sky-600 transition duration-200 w-5xl"
                >
                    <SaveIcon />
                   Update Salary
                </button>
              </div>
            </form>
          </div>
        </div>
    </Layout>
    </>
  )
}

export default EditSalary