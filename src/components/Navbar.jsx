import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

//* changed the name of the component only INTERNALLY to avoid conflict with react bootstrap
function MyNavbar() {

  const { handleToggleTheme, bootstrapTheme } = useContext(ThemeContext)

  return (
    <Navbar expand="sm" className="bg-body-tertiary" bg={bootstrapTheme} data-bs-theme={bootstrapTheme}>

      {/* <Container> */}
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
            <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
            <button onClick={handleToggleTheme}>☀️/🌑</button>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}

      

      {/* <Link to="/">Home</Link>
      <Link to="/contact">Contacts</Link>
      <Link to="/about">About</Link>
      <Link to="/book/list">Book List</Link>
      <Link to="/book/add">Add a Book</Link>
      <button>☀️/🌑</button> */}

    </Navbar>
  )
}

export default MyNavbar