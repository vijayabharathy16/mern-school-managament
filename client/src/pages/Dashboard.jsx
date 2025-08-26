import React from "react";
import Layout from "../components/Layout";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
function Dashboard() {
  const revenueData = [
    { month: "Jan",  allowance: 1200, bonus: 700 },
    { month: "Feb", allowance: 1350, bonus: 820 },
    { month: "Mar", allowance: 1280, bonus: 760 },
    { month: "Apr", allowance: 1500, bonus: 900 },
    { month: "May", allowance: 1700, bonus: 980 },
    { month: "Jun", allowance: 1650, bonus: 940 },
  ];

  const deptLeaves = [
    { dept: "Tamil", leaves: 8 },
    { dept: "English", leaves: 14 },
    { dept: "Maths", leaves: 11 },
    { dept: "Science", leaves: 6 },
    { dept: "Social", leaves: 9 },
    { dept: "PET", leaves: 9 },
    { dept: "LIB", leaves: 9 },
  ];
  return (
    <>
      <Layout>
        <div className="max-h-screen p-6 mt-2">
          {/* <div className="mb-3">
            <div className="text-2xl font-semibold text-gray-800">
              Dashboard
            </div>
              <p className="text-gray-500">Overview of revenue and leave stats</p>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
            <div className="bg-white rounded-2xl shadow p-4">
              <p className="text-gray-500 text-md">Monthly Revevenue</p>
              <p className="font-bold text-xl">₹1.70L</p>
              <span className="text-blue-500 text-md">+11.8% vs last month</span>
            </div>

             <div className="bg-white rounded-2xl shadow p-4">
              <p className="text-gray-500 text-md">Active Staff </p>
              <p className="font-bold text-xl">42</p>
              <span className="text-blue-500 text-md">Stable</span>
            </div>

            <div className="bg-white rounded-2xl shadow p-4">
              <p className="text-gray-500 text-md">Salary </p>
              <p className="font-bold text-xl">₹500</p>
              <span className="text-blue-500 text-md">Monthly Allowance</span>
            </div>
           
            <div className="bg-white rounded-2xl shadow p-4">
              <p className="text-gray-500 text-md">Pending Leaves</p>
              <p className="font-bold text-xl">7</p>
              <span className="text-blue-500 text-md">Action required</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
            <div className="bg-white rounded-2xl shadow p-4 lg:col-span-2 mt-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Allowance vs Bonus</h2>
                <span className="text-xs text-gray-500">Last 6 months</span>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="allowance" />
                    <Line type="monotone" dataKey="bonus" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-4 mt-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Leaves by Department</h2>
                <span className="text-xs text-gray-500">Current month</span>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={deptLeaves}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dept" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="leaves" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
