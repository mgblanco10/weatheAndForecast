import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherInput from "./components/WeatherInput";
import WeatherResult from "./components/WeatherResult";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherInput />} />
        <Route path="/result" element={<WeatherResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
