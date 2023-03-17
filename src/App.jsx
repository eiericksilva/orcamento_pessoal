import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import "../src/styles/App.css";

const App = () => {
  const [listaDespesas, setListaDespesas] = useState([]);

  return (
    <div className="Container">
      <Header />
      <div className="Body">
        <Form
          listaDespesas={listaDespesas}
          setListaDespesas={setListaDespesas}
        />
        <Table
          listaDespesas={listaDespesas}
          setListaDespesas={setListaDespesas}
        />
      </div>
    </div>
  );
};

export default App;
