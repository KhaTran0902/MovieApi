import MovieList from "../movieList/MovieList";
import "./Home.css";
import {
  Button,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="poster">
        {/* <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row
            xs={2}
            md={4}
            lg={6}
            style={{ border: "1px solid red", color: "white" }}
          >
            <Col style={{ border: "1px solid green", color: "white" }}>
              1 of 2
            </Col>
            <Col style={{ border: "1px solid green", color: "white" }}>
              2 of 2
            </Col>
          </Row>
          <Row
            xs={1}
            md={2}
            style={{ border: "1px solid red", color: "white" }}
          >
            <Col style={{ border: "1px solid green", color: "white" }}>
              1 of 3
            </Col>
            <Col style={{ border: "1px solid green", color: "white" }}>
              2 of 3
            </Col>
            <Col style={{ border: "1px solid green", color: "white" }}>
              3 of 3
            </Col>
          </Row>
          <Row xs="auto" style={{ border: "1px solid red", color: "white" }}>
            <Col style={{ border: "1px solid green", color: "white" }}>
              1 of 3
            </Col>
            <Col style={{ border: "1px solid green", color: "white" }}>
              2 of 3
            </Col>
            <Col style={{ border: "1px solid green", color: "white" }}>
              3 of 3
            </Col>
          </Row>
        </Container>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button> */}
        <MovieList/>
      </div>
     
    </>
  );
};
export default Home;
