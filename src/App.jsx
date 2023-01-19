import { BrowserRouter } from "react-router-dom";
import { FRoutes } from "./routes";
import { useEffect } from "react";
import { useDespesasContext } from "./context/DespesasContext";
import { GlobalStyle } from "./styles/global";
function App() {
  const { listaDespesas, setListaDespesas } = useDespesasContext();
  useEffect(() => {
    let localDespesas = localStorage.getItem("minhas_despesas");
    if (!localDespesas) {
      localStorage.setItem("minhas_despesas", JSON.stringify([]));
    } else {
      localDespesas = JSON.parse(localDespesas);
      setListaDespesas(localDespesas);
    }
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FRoutes />
    </BrowserRouter>
  );
}

export default App;
