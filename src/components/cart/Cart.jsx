import PropTypes from 'prop-types';

const Cart = ({cartItem, totalCredit}) => {
    
    console.log(typeof totalCredit);
    //console.log(cartItem);
    
    
    return (
        <div className="col-span-1">
            <h1>Credit Hour Remaining:{20-totalCredit}</h1>
            {
                cartItem.map((item, id) => <p key={id}>{id+1}. {item.title}</p>)
            }
            <h2>Total Credit:{totalCredit}</h2>
        </div>
    );
};
Cart.propTypes = {
    cartItem: PropTypes.array,
    totalCredit: PropTypes.number,
    
}
export default Cart;