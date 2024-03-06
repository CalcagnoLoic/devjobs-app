import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import React from "react";
import ReactDOM from "react-dom/client";

import "../public/assets/style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-detail/:JobId" element={<JobDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </React.StrictMode>,
);
