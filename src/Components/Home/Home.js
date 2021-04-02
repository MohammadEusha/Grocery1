import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductsCard from '../ProductsCard/ProductsCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-5 ">
                <div className="row ">
                    <div className="col-md">
                        {
                            products.length === 0 &&
                            <div className="mt-5">
                                <div>
                                    <h1>Your Requested Page Is Loading.Please Wait For Few Seconds...!!!!!</h1>
                                </div>
                                <div class="d-flex justify-content-center mt-5">
                                    <div style={{ height: '100px', width: "100px" }} class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            products.map(product => <ProductsCard product={product} ></ProductsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;