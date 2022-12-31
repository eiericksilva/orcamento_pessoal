import React from "react";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";

const Form = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Ano" {...register("ano")} />
      <select defaultValue="janeiro" {...register("mes")}>
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
      <input type="text" placeholder="Dia" {...register("dia")} />
      <select defaultValue="moradia" {...register("tipo")}>
        <option value="moradia">Moradia</option>
        <option value="alimentacao">Alimentação</option>
        <option value="transporte">Transporte</option>
        <option value="seguros">Seguros</option>
        <option value="saude">Saúde</option>
        <option value="higiene">Higiene</option>
        <option value="impostos">Impostos</option>
        <option value="lazer">Lazer</option>
      </select>
      <textarea
        id="descricao"
        placeholder="Descrição"
        {...register("descricao")}
      />
      <input type="text" placeholder="R$" {...register("valor")} />
      {children}
    </FormContainer>
  );
};

export default Form;
