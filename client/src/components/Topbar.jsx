import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const { token, logout } = useContext(AuthContext);
  
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function fetchProtected() {
      try {
        const res = await fetch("https://mern-school-managament-backend.onrender.com/auth/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed");
        setMsg(data.message);
      } catch (err) {
        setMsg("Failed to load protected data. " + err.message);
      }
    }
    if (token) fetchProtected();
  }, [token]);


  
  return (
    <>
      <div className="bg-white shadow-lg p-4 flex justify-between items-center ">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button
          onClick={logout }
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-all cursor-pointer"
        >
          
          <LogOut className="w-5 h-5 sm:w-6 sm:h-6"/> 
          <span className="font-md">Logout</span>
        </button>
      </div>
      {/* <p className="mb-2 p-2">Welcome, <strong>{user?.name || user?.email}</strong></p>
        <p className="mb-4 p-2">Protected message: {msg}</p> */}
    </>
  );
};

export default Topbar;
