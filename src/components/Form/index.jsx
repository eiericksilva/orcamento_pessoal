import React from "react";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    ano: yup
      .number()
      .typeError("Ano deve ser um número")
      .required("Ano é um dado obrigatório")
      .positive()
      .integer(),
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Ano" name="ano" {...register("ano")} />
      <span>{errors.ano?.message}</span>

      <select defaultValue="janeiro" name="mes" {...register("mes")}>
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
      <span>{errors.mes?.message}</span>

      <input placeholder="Dia" name="dia" {...register("dia")} />
      <span>{errors.dia?.message}</span>

      <select defaultValue="moradia" name="tipo" {...register("tipo")}>
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
      {children}
    </FormContainer>
  );
};

export default Form;
