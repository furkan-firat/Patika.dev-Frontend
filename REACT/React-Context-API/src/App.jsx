import { useContext, useState } from "react";
import "./App.css";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <br />
      <Header />
      <br />
      <hr />
      <br />
      <Button />
    </div>
  );
}

export default App;
