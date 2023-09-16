import PropTypes from 'prop-types';

const Cart = ({cartItem, totalCredit}) => {
    
    //console.log(typeof totalCredit);
    //console.log(cartItem);
    
    
    return (
        <div className="col-span-1 bg-white rounded-xl p-4 h-[300px] overflow-y-auto">
            <h1 className='text-lg font-semibold pb-2 text-[#2015FF]'>Credit Hour Remaining: {20-totalCredit} hr</h1>
            <hr className='text-black w-full p-1' />
            <h1 className='text-lg font-semibold'>Course Name</h1>
            {
                cartItem.map((item, id) => <p className='py-1' key={id}>{id+1}. {item.title}</p>)
            }
            <hr className='pt-1'/>
            <h2 className='text-lg font-semibold'>Total Credit hour: {totalCredit}</h2>
        </div>
    );
};
Cart.propTypes = {
    cartItem: PropTypes.array,
    totalCredit: PropTypes.number,
    
}
export default Cart;