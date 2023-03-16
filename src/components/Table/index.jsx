import React, { useEffect } from "react";
import { useDespesasContext } from "../../context/DespesasContext";
import { TableContainer } from "./styles";

const Table = () => {
  const { listaDespesas } = useDespesasContext();

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
          {listaDespesas.map((item) => (
            <tr key={crypto.randomUUID}>
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
