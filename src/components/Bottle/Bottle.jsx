import PropTypes from 'prop-types'; // ES6
import './Bottle.css';

const Bottle = ({bottle, handleAddToCard}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired,
}
export default Bottle;