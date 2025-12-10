import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Teams from "./pages/Teams";


import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


import DashboardLayout from "./layouts/DashboardLayout";
import HeroLayout from "./layouts/HeroLayout";
import AuthLayout from "./layouts/AuthLayout";

import "./css/index.css"
import "./css/hero.css"
import "./css/navbar.css"
import "./css/footer.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Public layout */}
        <Route element={<HeroLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        {/* Auth layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard layout */}
        <Route element={<DashboardLayout />}>
          {/* add dashboard pages here later */}
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
