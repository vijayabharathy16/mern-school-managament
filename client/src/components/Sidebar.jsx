// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-white w-64 h-screen p-4 hidden md:block">
//       <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
//       <ul className="space-y-4">
//         <li><Link to={"/dashboard"} className="hover:text-sky-400">Dashboard</Link></li>
//         <li><Link to={"/users"} className="hover:text-sky-400">Users</Link></li>
//         <li><Link to={"/reports"} className="hover:text-sky-400">Reports</Link></li>
//         <li><Link to={""} className="hover:text-sky-400">Settings</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  ClipboardMinus,
  Settings,
  ChevronDown,
  Bell,
  LogOut,
  BookOpen,
  BookCopy,
 CircleUser,
 Logs,
 AppWindowMac,
 ClipboardList,
 FileUser
} from "lucide-react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Smlogo from '../assets/sm-logo.jpg'
{/* <Logs /> */}
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  // const [openMenu, setOpenMenu] = useState(null);

  // const toggleMenu = (menu) => {
  //   setOpenMenu(openMenu === menu ? null : menu);
  // };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-purple-700 text-white flex flex-col transition-all duration-300 `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 cursor-pointer">
        <span className={`${!isOpen && "hidden"} font-bold text-lg`}>
           <img src={Smlogo} alt="" className="w-10 h-10 rounded-full"/>
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded hover:bg-purple-500"
        >
          <Logs
            className={`transform transition-transform cursor-pointer ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          <li>
            <Link to={'/dashboard'}
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            >
              <Home size={20} />
              {isOpen && <span>Dashboard</span>}
              {/* <span className="ml-auto bg-blue-600 text-xs px-2 py-0.5 rounded-full">
                3
              </span> */}
            </Link>
          </li>

          <li>
            {/* <button
              onClick={() => toggleMenu("users")}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 w-full"
            >
              <Users size={20} />
              {isOpen && <span>Users</span>}
              {isOpen && (
                <ChevronDown
                  size={16}
                  className={`ml-auto transition-transform ${
                    openMenu === "users" ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            {openMenu === "users" && (
              <ul className="ml-10 mt-1 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block p-1 rounded hover:bg-gray-800"
                  >
                    All Users
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-1 rounded hover:bg-gray-800"
                  >
                    Add User
                  </a>
                </li>
              </ul>
            )} */}
          </li>

          <li>
            <Link to={'/admin-dashbaord/staff-list'}
              
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            >
              <CircleUser size={20} />
              {isOpen && <span>Staffs</span>}
            </Link>
          </li>

          <li>
            <Link to={'/admin-dashboard/add-salary'}
           
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            >
              <AppWindowMac size={20} />
              {isOpen && <span>Add Salary</span>}
            </Link>
          </li>
            <li>
            <Link to={'/admin-dashboard/salary-list'}
           
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            > 
              <ClipboardList size={20} />
              {isOpen && <span>Salary List</span>}
            </Link>
          </li>
           <li>
            <Link to={'/admin-dashboard/add-leave'}
           
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            >
              <ClipboardMinus size={20} />
              {isOpen && <span>Add Leave</span>}
            </Link>
          </li>
          <li>
            <Link to={'/admin-dashboard/leave-list'}
           
              className="flex items-center gap-3 p-2 rounded hover:bg-purple-400"
            >
              <FileUser size={20} />
              {isOpen && <span>Leave List</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      {/* <div className="p-4 border-t border-gray-700">
        <a
          href="#"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-800"
        >
          <Bell size={20} />
          {isOpen && <span>Notifications</span>}
          <span className="ml-auto bg-red-600 text-xs px-2 py-0.5 rounded-full">
            5
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 mt-2"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </a>
      </div> */}
    </div>
  );
}

