
const Watch = ({watch}) => {
    const {model,price}=watch;
    return (
        <div>
            <h3>{model}</h3>
            <h4>{price}</h4>
        </div>
    );
};

export default Watch;