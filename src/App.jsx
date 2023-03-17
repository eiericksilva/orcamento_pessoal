import { useEffect } from "react";
import { useDespesasContext } from "./context/DespesasContext";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import "../src/styles/App.css";

const App = () => {
  const { listaDespesas, setListaDespesas } = useDespesasContext();

  useEffect(() => {
    const despesaSalva = localStorage.getItem("lista_despesas");
    if (despesaSalva) {
      setListaDespesas(JSON.parse(despesaSalva));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lista_despesas", JSON.stringify(listaDespesas));
  }, [listaDespesas]);

  return (
    <div className="Container">
      <Header />
      <div className="Body">
        <Form />
        <Table />
      </div>
    </div>
  );
};

export default App;
