import React from "react";
import { TableContainer } from "./styles";

const Table = () => {
  return (
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
          <td>data 1</td>
          <td>tipo 1</td>
          <td>descrição 1</td>
          <td>valor 1</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default Table;
