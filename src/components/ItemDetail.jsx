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
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Subtitle>{`Stock : ${product.stock}`}</Card.Subtitle>
                        <Card.Subtitle>{`Precio $ ${product.price}`}</Card.Subtitle>
                    </Card.Body>
                <Card.Footer className="text-muted"><ItemCount stock={product.stock} onAdd={add}/></Card.Footer>
            </Card>

        </Container>
    );
}
