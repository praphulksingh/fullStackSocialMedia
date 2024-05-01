import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
