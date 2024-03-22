import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import ListaTareas from "./components/pages/tareas/ListaTareas";
const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<Inicio editando={false} titulo='Agregue una tarea'/>}/>
        <Route exact path="/editar/:id" element={<Inicio editando={true} titulo='Editar tarea'/>}/>
        <Route exact path="/mistareas" element={<ListaTareas/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;