import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CityProvider } from "./contexts/CityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
