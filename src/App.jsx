import { BrowserRouter } from "react-router-dom";
import { FRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FRoutes />
    </BrowserRouter>
  );
}

export default App;
