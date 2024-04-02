import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ product}) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.detail}</Card.Text>
        <Card.Text>{product.category}</Card.Text>
        <Link to={`/ProyectoFinalReact/item/${product.id}`}>
            <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
)