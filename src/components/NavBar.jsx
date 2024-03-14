//import Navbar from 'react-bootstrap/Navbar';
//import { Button } from 'bootstrap';
//import { ListGroup } from 'react-bootstrap';
//import {reactbootstrapminjs} from 'react-bootstrap/dist/react-bootstrap.min.js'
import { CartWidget } from './CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//bg-body-tertiary    expand="lg"

export const NavBar = () => {
    return(
		<div>
		<Navbar className="bg-body-tertiary">
		<Container>
			<Navbar.Brand href="#home">Borrachin</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Secciones" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Wiskies</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Vinos</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Aperitivos</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">Cervesas</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.5">Licores</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			</Navbar.Collapse>
		</Container>
		<CartWidget/>
		</Navbar>
		</div>
		)
    }