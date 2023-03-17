import React, { useEffect } from "react";
import { TableContainer } from "./styles";

const Table = ({ listaDespesas, setListaDespesas }) => {
  useEffect(() => {
    getLocalDespesas();
  }, []);

  const getLocalDespesas = () => {
    let localDespesas = localStorage.getItem("despesas");

    if (localDespesas === null) {
      localStorage.setItem("despesas", JSON.stringify([]));
    } else {
      localDespesas = JSON.parse(localDespesas);
      setListaDespesas(localDespesas);
    }
  };

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {listaDespesas.map((item) => (
            <tr key={parseInt(Math.random() * 10000)}>
              <td>{`${item.dia}/${item.mes}/${item.ano}`}</td>
              <td>{item.tipo}</td>
              <td>{item.descricao}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;
