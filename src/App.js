
import './App.css';
import { useContext } from "react";
import About from './Components/intro/About';
import Contact from './Components/intro/Contact';
import Intro from './Components/intro/Intro';
import ProductList from './Components/intro/ProductList';
import Navbar from './Components/Navbar';
import Toggle from './Components/Toggle/Toggle';
import { ThemeContext } from "./Context";
import {Skills} from "./Components/intro/Skills"
function App() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
    <Toggle/>
     <Navbar/>
     <Intro/>
     <About/>
     <Skills/>
     <ProductList/>
     <Contact/>
    </div>
  );
}

export default App;
