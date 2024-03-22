import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/to-do-logo.jpg";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    //quitar usuario de sessionStorage
    sessionStorage.removeItem("loginRC");
    //reseteo el state
    setUsuarioLogeado("");
    //redireccion a inicio
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="text-center d-flex justify-content-center">
        <Navbar.Brand as={Link} to="/" className="bg-body-tertiary">
          <img
            src={logo}
            alt="Logo de To-Do"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <h1>Lista de tareas</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link fs-5" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link fs-5" to="/mistareas">
              Mis tareas
            </NavLink>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
