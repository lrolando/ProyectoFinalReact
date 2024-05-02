import { onBackgroundMessage } from 'firebase/messaging/sw';
import {CartWidget} from './CartWidget';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return(
		<div>
		<Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/ProyectoFinalReact/">Borrachin</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/ProyectoFinalReact/">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Secciones" id="basic-nav-dropdown">
					<NavDropdown.Item href="/ProyectoFinalReact/category/wiskies">Wiskies</NavDropdown.Item>
					<NavDropdown.Item href="/ProyectoFinalReact/category/vinos">Vinos</NavDropdown.Item>
					<NavDropdown.Item href="/ProyectoFinalReact/category/aperitivos">Aperitivos</NavDropdown.Item>
					<NavDropdown.Item href="/ProyectoFinalReact/category/cervezas">Cervezas</NavDropdown.Item>
					<NavDropdown.Item href="/ProyectoFinalReact/category/licores">Licores</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Container>
		<CartWidget/>
		</Navbar>
		</div>
		)
    }