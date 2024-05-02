import React, {useState} from "react";
import { useContext } from "react";

import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { Container, Form, Image, Card } from "react-bootstrap";

export const ItemDetail = ({ product }) => {
    const {addItem} = useContext(CartContext);

    const add = (quantity) => {
        addItem(product, quantity);
    };

    return(
        <Container className="mt-4">

            <Card className="text-center">
                <Card.Header><h1>{product.title}</h1></Card.Header>
                    <Card.Body>
                            <Image 
                                src={product.image}
                                style={{ height: 450, width: "auto" }}
                                alt={product.title}
                                rounded
                            />
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Subtitle>{`Stock : ${product.stock}`}</Card.Subtitle>
                        <Card.Subtitle>{`Precio $ ${product.price}`}</Card.Subtitle>
                    </Card.Body>
                <Card.Footer className="text-muted"><ItemCount stock={product.stock} onAdd={add}/></Card.Footer>
            </Card>



            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    
                </Form.Group>
                <Form.Group>
                    
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label column="lg"></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label column="m"></Form.Label>
                </Form.Group>    
                    <Form.Label column="lg"></Form.Label>
                <Form.Group>    
                    
                </Form.Group>
            </Form>
        </Container>
    );
}
