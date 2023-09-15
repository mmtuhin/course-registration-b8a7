import PropTypes from 'prop-types';
import { useState } from 'react';

const Cart = ({cartItem}) => {
    
    // const [creditRemaining, setcreditRemaining] = useState(20)

    return (
        <div className="col-span-1">
            <h1>Credit Hour Remaining: </h1>
            {
                cartItem.map((item, id) => <p key={id}>{id+1}. {item.title}</p>)
            }
        </div>
    );
};
Cart.propTypes = {
    cartItem: PropTypes.array,
}
export default Cart;