import React from 'react';


const OrdersDetails = (props) => {

    const { name, price, weight, orderTime } = props.bought

    return (
        <div className="m-5">
            <ul class="list-group">
                <li class="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Product Name : {name} </span></li>
                <li class="list-group-item "><span className="fw-bolder text-dark">Product Price : {price} $</span> </li>
                <li class="list-group-item "><span className="fw-bolder text-dark">Product Weight : {weight} Kg</span> </li>
                <li class="list-group-item "><span className="fw-bolder text-dark">Orders Placed At : {(new Date(orderTime).toDateString('dd/MM/yyyy'))}</span> </li>

            </ul>
        </div>
    );
};

export default OrdersDetails;