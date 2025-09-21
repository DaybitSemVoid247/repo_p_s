import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Form from "./pages/form";
import Mesas from "./pages/mesas";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/mesas" element={<Mesas />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

