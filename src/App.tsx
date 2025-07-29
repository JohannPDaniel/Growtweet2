import { GlobalStyle } from "./config/global/globalStyle";
import AppRoutes from "./config/routes/appRoutes";

function App() {
  return (
    <>
        <AppRoutes />
        <GlobalStyle />
    </>
  );
}

export default App