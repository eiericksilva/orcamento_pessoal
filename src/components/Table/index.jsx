import React, { useEffect } from "react";
import { useDespesasContext } from "../../context/DespesasContext";
import { TableContainer } from "./styles";

const Table = () => {
  const { listaDespesas } = useDespesasContext();
  useEffect(() => {
    console.log(listaDespesas);
  }, []);
  return (
    <>
      <TableContainer>
        <caption>Lista de Despesas</caption>
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Tipo 1</td>
            <td>Descrição 1</td>
            <td>Valor 1</td>
          </tr>
          <tr>
            <td>Data 2</td>
            <td>Tipo 2</td>
            <td>Descrição 2</td>
            <td>Valor 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Tipo 3</td>
            <td>Descrição 3</td>
            <td>Valor 3</td>
          </tr>
        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;
