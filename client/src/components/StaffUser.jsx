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
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phoneno,
  },
  {
    name: "State",
    selector: (row) => row.state,
  },
  {
    name: "District",
    selector: (row) => row.district,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const StaffButton = ({ id, onStaffDel }) => {
  const navigate = useNavigate();

  const deleteStaffUser = async (id) => {
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
            `https://mern-school-managament-front-end.onrender.com/api/staff/deletedUser/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            onStaffDel(id);
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
          onClick={() => navigate(`/admin-dashbaord/view/${id}`)}
        >
          <RemoveRedEyeIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-blue-600"
          onClick={() => navigate(`/admin-dashbaord/edit/${id}`)}
        >
          <EditIcon />
        </button>{" "}
        <button
          className="py-1 px-1 text-white rounded cursor-pointer bg-red-600"
          onClick={() => deleteStaffUser(id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};
