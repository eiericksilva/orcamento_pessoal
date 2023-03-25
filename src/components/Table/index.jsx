import React, { useEffect } from "react";
import { TableContainer } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Table = ({ listaDespesas, setListaDespesas }) => {
  const [data] = useLocalStorage("despesas", listaDespesas);
  console.log(data);

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
          {data &&
            data.map((item) => (
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
