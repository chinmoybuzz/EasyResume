import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";

import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import Resume from "../pages/user/Resume";

import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Myself from "../pages/admin/Myself";
import GithubIntegration from "../pages/admin/GithubIntegration";
import AdminProducts from "../pages/admin/AdminProducts";

const AppRoutes = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="resume" element={<Resume />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="myself" element={<Myself />} />
        <Route path="github" element={<GithubIntegration />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
