import { Routes, Route } from "react-router-dom";
/* pages */
import Home from "./pages/Home";
import Register from "./pages/Register";

export const FRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>URL não encontrada</h1>} />
    </Routes>
  );
};
