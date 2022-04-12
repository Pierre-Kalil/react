import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Record } from "../pages/record";
import { Private } from "./auth";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Private component={<Dashboard />}>
            <Dashboard />
          </Private>
        }
      />
      <Route
        path="/record"
        element={
          <Private component={<Record />}>
            <Record />
          </Private>
        }
      />
    </Routes>
  );
};
