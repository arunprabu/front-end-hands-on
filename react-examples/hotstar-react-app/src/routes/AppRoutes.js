import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Employees from "../components/Employees/Employees";
import HocDemo from "../components/HocDemo/HocDemo";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Signin from "../containers/Signin";
// import Users from "../containers/Users";
// import UserDetails from "../components/UserDetails/UserDetails";
const Users = React.lazy(() => import('../containers/Users'));
const UserDetails = React.lazy(() => import('../components/UserDetails/UserDetails'));

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    {/* id is the URL Parameter in the following URL */}
    <Route path="/users/:id" element={<UserDetails />} />
    <Route path="/hoc" element={<HocDemo />} />
    <Route path="/products" element={<Products />} />
    <Route path="/signin" element={<Signin />} />

    <Route path="/employees" element={<Employees />} />

  </Routes>
);

