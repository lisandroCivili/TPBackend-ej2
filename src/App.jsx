import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;