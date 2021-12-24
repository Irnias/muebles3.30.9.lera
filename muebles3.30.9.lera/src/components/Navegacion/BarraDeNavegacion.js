import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar,Nav } from 'react-bootstrap';
import Cartwidget from './Cartwidget';


const NavBarBS = () => {
    return ( 
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing"><Cartwidget/></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    
    </>
    )
}
export default NavBarBS

