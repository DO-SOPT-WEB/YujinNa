import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./components/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
