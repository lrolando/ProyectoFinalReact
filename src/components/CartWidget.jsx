import img from 'react-bootstrap/Image';
import Cart from '../assets/CartWidgetPhoto.png'

export const CartWidget = () => {
    return(	
           <>
            <img src={Cart} alt="Cart" class="img-thumbnail" width={40}/>
            <span>88</span>
           </>
		)
    }

