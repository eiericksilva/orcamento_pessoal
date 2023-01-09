import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
const Home = () => {
  return (
    <div style={{ display: flex, flexDirection: column }}>
      <Header page="Consulta" path="/consulta" />
      <Form />
    </div>
  );
};

export default Home;
