import './bottle.css'
const Bottle = ({bottle,handleCart}) => {
    const {name,seller,price,stock,img}=bottle;
    return (
        <div className='bottle-container'>
            <div className='bottle-card'>
                <div >
                    <h3>Name: {name}</h3>
                    <h4>Seller: {seller}</h4>
                    <h4>Price: {price}</h4>
                    <p>Stock: {stock}</p>

                </div>
                <div>
                    <img src={img} alt="" />
                </div>

            </div>
            <div>
                <button onClick={()=>handleCart(bottle)}>Add To Cart !</button>
            </div>
        </div>
    );
};

export default Bottle;