import GlobalStyle from "./styles/GlobalStyle";
import Router from "./components/Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
