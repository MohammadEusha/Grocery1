import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
const CheckOut = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    const pdType = products.find(pd => pd.name === name);

    const addToCart = () => {
        const newAddToCart = { ...loggedInUser, ...pdType, _id: Math.random(), orderTime: new Date() };

        fetch('https://lychee-pie-36175.herokuapp.com/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully')
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bolder">{name}</td>
                            <td class="ps-4 fw-bolder">{pdType && pdType.weight + 'Kg'}</td>
                            <td class="fw-bolder">{pdType && pdType.price + '$'}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={addToCart}> Add To Cart</button>
            </div>

        </div>
    );
};

export default CheckOut;