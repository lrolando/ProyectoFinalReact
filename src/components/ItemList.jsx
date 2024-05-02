import {Item} from './Item';

import { Card, CardGroup, Row, Col } from 'react-bootstrap';

export const ItemList = ({ products}) => {
    return(
                <CardGroup class="row">
                    {products.map((product) => (
                        <Item key={product.id} product={product}/>
                    ))}
                </CardGroup>
    );
}; 