import React from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useUserStore } from "../store/useUserStore";
import toast from "react-hot-toast";

function login() {
  const setUser = useUserStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
      const userData = {
        "email": data.email,
        "password": data.password
      }
      try{
      const res = await axios.post("http://localhost:4001/user/login",userData,{
        withCredentials: true,  
       })
        if (res.data && res.data.user && res.data.token) {
          setUser(res.data.user);
          localStorage.setItem("Token", res.data.token); 
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_5").close();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Login failed: invalid response from server");
        }
      } catch (err) {
        toast.error("Error: " + (err.response?.data?.message || err.message));
        document.getElementById("my_modal_5").close();
      }
  }

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-end">
            <a href="/" className="text-xl text-black-400">
              &#x2715;
            </a>
          </div>
          <div className="modal-action flex-col items-center justify-items-center px-auto ">
            <h1 className="text-2xl font-bold font-serif text-green-600 mb-4">
              LOGIN
            </h1>
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-md text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-md text-green-500">
                    This field is required
                  </span>
                )}
              </label>
              <button className="btn mt-5 bg-green-500 text-white">
                Login
              </button>
              <p className="mt-5">
                Not Registered?{" "}
                <a className="text-green-600 underline" href="/signup">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default login;
