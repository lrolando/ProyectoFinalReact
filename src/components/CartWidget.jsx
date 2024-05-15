import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Cart from '../assets/CartWidgetPhoto.png'
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity, 0)

    return(	
           <Link to = "/ProyectoFinalReact/Cart">
            <img src={Cart} alt="Cart" class="img-thumbnail" width={40}/>
            <span>{total}</span>
           </Link>
		)
    }

