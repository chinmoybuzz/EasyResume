import { Outlet, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const AdminLayout = () => {
  const { isDark } = useTheme();

  const layoutBg = isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black";

  const sidebarBg = isDark ? "bg-gray-800 text-white" : "bg-white text-black";

  return (
    <div className={`flex min-h-screen ${layoutBg}`}>
      {/* Sidebar */}
      <div className={`w-64 p-6 space-y-4 shadow-md ${sidebarBg}`}>
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <Link to="/admin" className="block hover:text-blue-500">
          Dashboard
        </Link>

        <Link to="/admin/users" className="block hover:text-blue-500">
          Users
        </Link>
        <Link to="/admin/myself" className="block hover:text-blue-500">
          MySelf
        </Link>
        <Link to="/admin/github" className="block hover:text-blue-500">
          Github
        </Link>
        <Link to="/admin/github/login" className="block hover:text-blue-500">
          Github Login
        </Link>

        {/* <Link to="/admin/products" className="block hover:text-blue-500">
          Products
        </Link>
        <Link to="/" className="block hover:text-blue-500">
          Home Page
        </Link>
        <Link to="/" className="block hover:text-blue-500">
          Education
        </Link>
        <Link to="/" className="block hover:text-blue-500">
          Experience
        </Link>
        <Link to="/" className="block hover:text-blue-500">
          Project
        </Link>
        <Link to="/" className="block hover:text-blue-500">
          Technical Skills
        </Link> */}
      </div>

      {/* Page Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
