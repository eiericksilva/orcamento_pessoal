import React, { useState, useEffect } from "react";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDialogContext } from "../../context/DialogContext";
import DialogComponent from "../Dialog/DialogComponent";
import { useDespesasContext } from "../../context/DespesasContext";

const schema = yup
  .object({
    ano: yup
      .number()
      .typeError("Ano deve ser um número")
      .required("Ano é um dado obrigatório")
      .positive("Ano deve ser um número positivo")
      .integer("Ano deve ser um número inteiro"),
    mes: yup.string().required("Mês é um dado obrigatório"),
    dia: yup
      .number()
      .typeError("Dia deve ser um número")
      .required("Dia é um dado obrigatório"),
    tipo: yup
      .string("Tipo da despesa deve ser um texto")
      .required("Tipo da despesa é um dado obrigatório"),
    descricao: yup
      .string("Descrição deve ser um texto")
      .required("Descrição é um dado obrigatório"),
    valor: yup
      .number()
      .typeError("Valor deve ser um número")
      .required("Valor é um dado obrigatório"),
  })
  .required();

const Form = ({ children }) => {
  const { listaDespesas, setListaDespesas } = useDespesasContext();
  const { openDialog } = useDialogContext();
  const populateDB = () => {
    localStorage.setItem("minhas_despesas", JSON.stringify(listaDespesas));
  };
  const displayLogUser = () => {
    if (isValid) {
      openDialog({
        message: "🔥" + "Despesa cadastrada com sucesso!",
        title: "Sucesso!",
      });
    } else {
      openDialog({
        message: "😠" + "Não foi possível cadastrar despesa no momento",
        title: "Falha!",
      });
    }
  };

  const onSubmit = (newRegister) => {
    setListaDespesas([...listaDespesas, newRegister]);
  };

  useEffect(() => {
    populateDB();
  }, [listaDespesas]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Ano" name="ano" {...register("ano")} />
      <span>{errors.ano?.message}</span>

      <select name="mes" {...register("mes")}>
        <option value="" disabled>
          Selecione o mês
        </option>
        <option value="01">Janeiro</option>
        <option value="02">Fevereiro</option>
        <option value="03">Março</option>
        <option value="04">Abril</option>
        <option value="05">Maio</option>
        <option value="06">Junho</option>
        <option value="07">Julho</option>
        <option value="08">Agosto</option>
        <option value="09">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>
      <span>{errors.mes?.message}</span>

      <input placeholder="Dia" name="dia" {...register("dia")} />
      <span>{errors.dia?.message}</span>

      <select defaultValue="moradia" name="tipo" {...register("tipo")}>
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
      <span>{errors.tipo?.message}</span>
      <textarea
        id="descricao"
        placeholder="Descrição"
        name="descricao"
        {...register("descricao")}
      />
      <span>{errors.descricao?.message}</span>
      <input placeholder="R$" name="valor" {...register("valor")} />
      <span>{errors.valor?.message}</span>

      <button onClick={displayLogUser} type="submit">
        Registrar
      </button>
      <DialogComponent />
    </FormContainer>
  );
};

export default Form;
