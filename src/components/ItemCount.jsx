import React, {useState, useEffect} from 'react';

import { Button, InputGroup, Form, Container } from 'react-bootstrap';

export const ItemCount = ({ stock, onAdd}) => {

    const [count, setCount] = useState(1);

    const decrease = () => {
        if (count > 1) setCount((prev) => prev - 1);}

    const increase = () => {
        if (stock > count) setCount((prev) => prev + 1);}

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    }

    return (
        <div className='d-flex'>
            <Container className="mt-3" style={{ width: "auto" }}>
            <Form className="text-center">
                <Form.Group className="mb-3" >
                    <Container className='center'>
                        <InputGroup className="mb-3">
                            <Button variant="secondary" onClick={decrease}>-</Button>
                            <Form.Control type ="number" value={count} readOnly />
                            <Button variant="success" onClick={increase}>+</Button>
                        </InputGroup>
                    </Container>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Container className='center'>
                        <Button  variant="danger" onClick={handleAdd}>Agregar al carrito</Button>
                    </Container>
                </Form.Group>
            </Form>
            </Container>
        </div>
    )
}

export default ItemCount;