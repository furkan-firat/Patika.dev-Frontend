import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";

function DashboardLayout() {
  return (
    <div>
      <DashboardNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
