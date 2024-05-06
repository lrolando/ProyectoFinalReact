import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { Container, Form, InputGroup, Button, ListGroup, Card, CloseButton } from "react-bootstrap";

const initialValues = {
    name: "",
    phone: "",
    email: "",
    direccion: ""
}    
export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext(CartContext)

    const total = () => 
        items.reduce((acc, i) => acc + i.quantity * i.item.price, 0);

    const handleChange = (ev) => {
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubmit = () => {
        const order = {
            buyer: values,
            items: items,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({id}) => {
                if(id){
                    alert("Su orden: " + id + "ha sido completada!");
                    sessionStorage.clear('cart')
                }
            })
            .finally(() => {
            clear();
            setValues(initialValues);
    })
    }
    
    const handleRemove = (id) => {removeItem(id)}
    const handleClear = () => clear();

    return(
        <>
        
        <Container className="mt-4">
            <h1>Products</h1>
            {items.map((i) => {
                return(<>
                    <Card key = {i.item.id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{i.item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Cant: {i.quantity}</Card.Subtitle>
                            <Card.Text>$ {i.item.price}</Card.Text>
                            <Card.Link onClick={() => handleRemove(i.item.id)}>Eliminar</Card.Link>
                        </Card.Body>
                    </Card>
                        {/*<ul  >
                            <li>Prod: </li>
                            <li></li>
                            <li></li>
                            <button >X</button>
                </ul>*/}</>
                        )
                
            })}
            <div>Total: {total()}</div>
            <Button onClick={handleClear}>Vaciar</Button>
            
        </Container> 

        {items?.length > 0 && (  
        <Container> 
        <Form.Label htmlFor="basic-url">Informacion de envio</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Nombre</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={handleChange}/>
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Celular</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={handleChange}/>
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={handleChange}/>
        </InputGroup>

        <InputGroup>
            <InputGroup.Text>Direccion</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange}/>
        </InputGroup>
        
        <Button type="button" onClick={handleSubmit}>Enviar</Button>

        </Container>)}
        </>
    )
}
            {/*<form>
                <label>Nombre</label>
                <input
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />
                <label>Celu</label>
                <input
                    type="text"
                    value={values.phone}
                    name="phone"
                    onChange={handleChange}
                />    
                <label>Email</label>
                <input
                    type="text"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                />
                
        </form>*/}
       