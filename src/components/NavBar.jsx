import { useEffect, useState } from 'react';
import {CartWidget} from './CartWidget';
import {Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { getFirestore, getDoc, doc, collection, getDocs, where, query } from "firebase/firestore";
import { Link } from 'react-router-dom';

export const NavBar = () => {

	const [categories, setCategories] = useState([]);

	useEffect(() => {

		const db = getFirestore();
		const cat = collection(db, 'categories')

		getDocs(cat).then((snapshot) => {
			setCategories(
			snapshot.docs.map((doc) => {
						return{ id: doc.id, ...doc.data() }}))})
	})

	const handleClick = () => history.push()

    return(
		<div>
		<Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
			<Link  to={'/ProyectoFinalReact/'} style={{ textDecoration: 'none'}}><Navbar.Brand>Borrachin</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
				<Link  to={'/ProyectoFinalReact/'} style={{ textDecoration: 'none'}}><Nav.Link>Home</Nav.Link></Link>
					<NavDropdown title="Secciones" id="basic-nav-dropdown">
					{categories.map((i)=> {
						return(
							<NavDropdown.Item>
								<Link to={`/ProyectoFinalReact/category/${i.id}`}
									style={{ textDecoration: 'none',
												textDecorationColor: 'none',
												textEmphasisColor: 'none' }}>
									{i.title}
								</Link>
							</NavDropdown.Item>
							
						)
					})}
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Container>
		<CartWidget/>
		</Navbar>
		</div>
		)
    }