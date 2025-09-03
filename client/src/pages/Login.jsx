import React, { useContext, useState } from "react";
import AuthLogo from "../assets/authentication.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is Invalid";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await fetch("https://mern-school-managament-front-end.onrender.com/auth/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log(result);
      if (!response.ok) throw new Error(result.message || "Login failed");
      setToast({ message: "Login successful!", type: "success" });
      login({ token: result.token, user: result.user });

      // navigate('/dashboard');
      setTimeout(() => {
        setToast(null); // Hide toast after 3 seconds
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
      setToast({ type: "error", message: error.message });
      setTimeout(() => setToast(null), 3000);
    }
  };
  return (
    <>
      {toast && (
        <div
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
       px-8 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm font-medium 
       ${
         toast.type === "success"
           ? "bg-green-100 text-green-700"
           : "bg-red-100 text-red-700"
       }`}
        >
          {toast.message}
        </div>
      )}
      
      <div className="min-h-70 flex flex-col w-3xl mx-auto md:flex-row mt-20 rounded-4xl  shadow-xl/20">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-4">
          <img src={AuthLogo} alt="" className="max-w-full auto" />
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
            <form onSubmit={loginUser}>
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}{" "}
              </div>

              <div className="mb-4 relative">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                 <div
                  className="absolute inset-y-1 top-6  right-3  flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ?  <FaEye /> :<FaEyeSlash />}
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
                
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition duration-200 cursor-pointer"
              >
                Login
              </button>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Don't have an Account?{" "}
              <Link 
                to={"/register"}
                className="font-semibold text-sky-400 hover:text-indigo-500 "
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
