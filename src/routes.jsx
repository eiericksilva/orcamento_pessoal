import { Routes, Route } from "react-router-dom";
/* pages */
import Home from "./pages/Home";
import Consulta from "./pages/Consulta";

export const FRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="*" element={<h1>URL não encontrada</h1>} />
    </Routes>
  );
};
