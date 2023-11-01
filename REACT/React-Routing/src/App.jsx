import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DashboardLayout from "./pages/DashboardLayout";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />}></Route>

            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="reviews/:id" element={<Reviews />} />
              <Route path="schedule" element={<Schedule />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
