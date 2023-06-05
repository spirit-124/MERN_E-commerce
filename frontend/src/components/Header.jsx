import { Navbar, Container, Nav } from "react-bootstrap";

const Heaader = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <i className="fas fa-shopping-cart"></i>
              &nbsp; CART
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-user"></i>
              &nbsp; SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heaader;
