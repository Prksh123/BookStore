import React from "react";
import axios from "axios";
import { useUserStore } from "../store/useUserStore";
import toast from "react-hot-toast";

function Logout() {
  const { clearUser } = useUserStore();
  const handleLogout = async() => {
    try {
      await axios.post("http://localhost:4001/user/logout", {}, { withCredentials: true });
      clearUser();
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Token");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-black text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;