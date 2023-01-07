import { Routes, Route } from "react-router-dom";
/* pages */
import Home from "./pages/Home";

export const FRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>URL não encontrada</h1>} />
    </Routes>
  );
};
