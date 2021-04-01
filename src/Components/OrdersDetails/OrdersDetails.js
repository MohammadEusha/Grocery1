import React from 'react';


const OrdersDetails = (props) => {

    const { name, price, weight, orderTime } = props.bought

    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item">{name}</li>
                <li class="list-group-item">{price}</li>
                <li class="list-group-item">{weight}</li>
                <li class="list-group-item">{(new Date(orderTime).toDateString('dd/MM/yyyy'))}</li>

            </ul>
        </div>
    );
};

export default OrdersDetails;