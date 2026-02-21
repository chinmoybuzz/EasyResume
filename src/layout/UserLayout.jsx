import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useTheme } from "../context/ThemeContext";

const UserLayout = () => {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-blue-100 text-black"}`}>
      <Navbar />
      <div className="container mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
