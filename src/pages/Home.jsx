import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Form>
        <button type="submit">Pesquisar</button>
      </Form>
    </div>
  );
};

export default Home;
