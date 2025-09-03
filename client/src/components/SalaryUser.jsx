import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
   
  },
  {
    name: "Department",
    selector: (row) => row.department,
  },
  {
    name: "Staff",
    selector: (row) => row.staff,
  },
  {
    name: "Basic Salary",
    selector: (row) => row.basicsalary,
  },
  {
    name: "Allowances",
    selector: (row) => row.allowances,
  },
  {
    name: "Dedication",
    selector: (row) => row.dedication,
  },
  {
    name: "Pay Date",
    selector: (row) => row.paydate,
  },
  {
    name: "Action",
    selector: (row) => row.action,
     width:"170px"
  },
];

export const SalaryButton = ({id, onSalaryDel}) => {
  const navigate = useNavigate();

  const deleteSalaryUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://mern-school-managament-front-end.onrender.com/api/salary/deleteSalary/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            onSalaryDel(id);
            Swal.fire("Deleted!", "The staff has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Failed to delete staff.", "error");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <>
      <div className="">
        <button
          className="py-1 px-1 text-dark-100 rounded cursor-pointer bg-yellow-500"
          onClick={() => navigate(`/admin-dashboard/viewSalary/${id}`)}
        >
          <RemoveRedEyeIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-blue-600"
          onClick={() => navigate(`/admin-dashboard/editSalary/${id}`)}
        >
          <EditIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-red-600"
          onClick={() => deleteSalaryUser(id)}
        >
          <DeleteIcon />
        </button>

      </div>
    </>
  );
};
