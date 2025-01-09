import './cart.css'
const Cart = ({bottleCart}) => {
    return (
        <div>
            <h4>Cart:{bottleCart.length} </h4>
            <div>
                {
                    bottleCart.map(bottle=> <img className='img'  key={bottle.id} src={bottle.img} alt="" /> )
                }
            </div>
        </div>
    );
};

export default Cart;