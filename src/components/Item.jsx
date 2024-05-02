import { Link } from "react-router-dom";
import { Image, Card, Button } from "react-bootstrap";


export const Item = ({ product}) => (

    <Card className="text-center" style={{ width: '20rem', background:'grey'}}>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Image style={{ height: 300, width: 180 }} src={product.image} thumbnail/>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.categoryId}</Card.Text>
        <Link to={`/ProyectoFinalReact/item/${product.id}`}>
            <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
)