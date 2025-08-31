import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from './Login'
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const from = location.state?.from?.pathname || "/";
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
const onSubmit = async (data) => {
  const userData = {
    name: data.name,
    email: data.email,
    password: data.password
  };

  try {
    const res = await axios.post("http://localhost:4001/user/signup", userData, {
      withCredentials: true
    });

    if (res.data && res.data.token) {
      localStorage.setItem("Token", res.data.token);

      toast.success("Signup Successfully");

      navigate(from, { replace: true });
    } else {
      toast.error("Signup failed: invalid response from server");
    }
  } catch (err) {
    toast.error("Error: " + (err.response?.data?.message || err.message));
  }
};

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className='flex justify-end'>
        <Link to="/" className='text-xl text-black-400'>&#x2715;</Link>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Create an Account
        </h2>
        <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
              {...register("name", { required: true })}
            />
             {errors.name && (
                  <span className="text-md text-red-500">
                    This field is required
                  </span>
                )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
              {...register("email", { required: true })}
            />
             {errors.email && (
                  <span className="text-md text-red-500">
                    This field is required
                  </span>
                )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
              {...register("password", { required: true })}
            />
             {errors.password && (
                  <span className="text-md text-red-500">
                    This field is required
                  </span>
                )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <a href="#" className="text-md text-green-500 underline" onClick={() =>document.getElementById("my_modal_5").showModal() }>
            Log In
          </a>
          <Login/>
        </p>
      </div>
    </div>
 

    </>
  )
}

export default Signup