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
    name: "Staff Name",
    selector: (row) => row.staffname,
  },
  {
    name: "Leavet Type",
    selector: (row) => row.leavetype,
  },
  {
    name: "Start Date ",
    selector: (row) => row.startdate,
  },
  {
    name: "End Date",
    selector: (row) => row.enddate,
  },
  {
    name: "Reason",
    selector: (row) => row.reason,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    cell:row => (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold 
            ${row.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
              row.status === "Approved" ? "bg-green-200 text-green-800" :
              "bg-red-200 text-red-800"
            }`}>{row.status}</span>
    ),
    sortable: true
  },
  {
    name: "Action",
    selector: (row) => row.action,
     width:"170px"
  },
];

export const LeaveButton = ({id, onLeaveDel}) => {
  const navigate = useNavigate();

  const deleteLeaveUser = async (id) => {
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
            `http://localhost:3001/api/leave/deleteLeave/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            onLeaveDel(id);
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
          onClick={() => navigate(`/admin-dashboard/viewLeave/${id}`)}
        >
          <RemoveRedEyeIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-blue-600"
          onClick={() => navigate(`/admin-dashboard/editLeave/${id}`)}
        >
          <EditIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-red-600"
          onClick={() => deleteLeaveUser(id)}
        >
          <DeleteIcon />
        </button>

      </div>
    </>
  );
};
