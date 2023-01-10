import { createContext, useContext, useState } from "react";

const DespesasContext = createContext({});

const DespesasProvider = ({ children }) => {
  const [listaDespesas, setListaDespesas] = useState([]);
  return (
    <DespesasContext.Provider value={{ listaDespesas, setListaDespesas }}>
      {children}
    </DespesasContext.Provider>
  );
};

export const useDespesasContext = () => {
  const context = useContext(DespesasContext);
  return context;
};

export { DespesasContext, DespesasProvider };
