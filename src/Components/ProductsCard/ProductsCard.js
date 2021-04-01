import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductsCard = (props) => {
    const { name, weight, price, image } = props.product
    const cardStyle = {
        margin: '15px',
        borderRadius: '10px',
        float: 'left',
        backgroundColor: 'white',
    }

    const history = useHistory()
    const handleBuy = (name) => {
        history.push(`/checkOut/${name}`)
    }


    return (
        <div style={cardStyle} className="">
            <div class="card" style={{ width: "300px", height: "420px" }}>
                <div>
                    <img src={image} class="card-img-top img-fluid img-thumbnail" alt="..." />
                </div>
                <div class="card-body">
                    <h5>{name} : {weight} Kg</h5>
                    <div className="d-flex mt-3">
                        <h3 className="text-success">${price}</h3>
                        <button style={{ marginLeft: '90px', width: '130px' }} type="button" onClick={() => handleBuy(name)} class="btn btn-success align-items-end"><FontAwesomeIcon icon={faCartPlus} />  Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsCard;