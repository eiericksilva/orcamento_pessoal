import React from "react";
import Header from "../components/Header";
import { Link } from "@mui/material";
import { FormContainer } from "../components/Form/styles";
import Table from "../components/Table";

const Consulta = () => {
  return (
    <div>
      <Header page="Home" path="/" />
      <FormContainer>
        <input placeholder="Ano" name="ano" />
        <select name="mes">
          <option value="" disabled>
            Selecione o mês
          </option>
          <option value="janeiro">Janeiro</option>
          <option value="fevereiro">Fevereiro</option>
          <option value="março">Março</option>
          <option value="abril">Abril</option>
          <option value="maio">Maio</option>
          <option value="junho">Junho</option>
          <option value="julho">Julho</option>
          <option value="agosto">Agosto</option>
          <option value="setembro">Setembro</option>
          <option value="outubro">Outubro</option>
          <option value="novembro">Novembro</option>
          <option value="dezembro">Dezembro</option>
        </select>
        <input placeholder="Dia" name="dia" />

        <select defaultValue="moradia" name="tipo">
          <option value="" disabled>
            Tipo da despesa
          </option>
          <option value="moradia">Moradia</option>
          <option value="alimentacao">Alimentação</option>
          <option value="transporte">Transporte</option>
          <option value="seguros">Seguros</option>
          <option value="saude">Saúde</option>
          <option value="higiene">Higiene</option>
          <option value="impostos">Impostos</option>
          <option value="lazer">Lazer</option>
        </select>
        <textarea id="descricao" placeholder="Descrição" name="descricao" />
        <input placeholder="R$" name="valor" />

        <button type="submit">Pesquisar</button>
      </FormContainer>
      <Table />
    </div>
  );
};

export default Consulta;
