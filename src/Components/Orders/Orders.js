import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import OrdersDetails from '../OrdersDetails/OrdersDetails';

const Orders = () => {
    const [boughtProducts, setBoughtProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://lychee-pie-36175.herokuapp.com/cart?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBoughtProducts(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1>You have : {boughtProducts.length} bookings</h1>
            {
                boughtProducts.map(bought => <OrdersDetails bought={bought} ></OrdersDetails>)
            }
        </div>
    );
};

export default Orders;