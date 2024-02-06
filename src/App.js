import Header from "./components/header/Header";
import Hero from "./components/article/Hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);

  const handleTemeButtonClick = () => {
    setState((prevState) => !prevState);
    if (state) {
      document.body.setAttribute("dark", "");
    } else {
      document.body.removeAttribute("dark");
    }
  };
  return (
    <div>
      <Header state={state} handleTemeButtonClick={handleTemeButtonClick} />
      <Hero />
      <Main />
      <Footer state={state} />
    </div>
  );
}

export default App;
