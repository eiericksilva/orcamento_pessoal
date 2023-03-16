import { BrowserRouter } from "react-router-dom";
import { FRoutes } from "./routes";
import { useEffect } from "react";
import { useDespesasContext } from "./context/DespesasContext";
import { GlobalStyle } from "./styles/global";
const App = () => {
  const { listaDespesas, setListaDespesas } = useDespesasContext();
  const populateDB = () => {
    let localDespesas = localStorage.getItem("minhas_despesas");

    if (!localDespesas) {
      console.log("array vazio setado no minhas_despesas");
      localStorage.setItem("minhas_despesas", JSON.stringify([]));
    } else {
      localStorage.setItem("minhas_despesas", JSON.stringify(listaDespesas));
      console.log("localDespesas do populateDB", listaDespesas);
    }
  };
  useEffect(() => {
    populateDB();
  }, [listaDespesas]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FRoutes />
    </BrowserRouter>
  );
};

export default App;
