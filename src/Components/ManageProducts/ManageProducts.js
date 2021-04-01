import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProductsDetails from '../ManageProductsDetails/ManageProductsDetails';

const ManageProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://lychee-pie-36175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div>
            <div class="ms-5">
                <nav className="d-flex navbar navbar-expand-lg">
                    <div style={{ marginTop: '30px' }} className="container-fluid">
                        <h3 className="text-success">Grocery Store</h3>
                        <div className="d-flex flex-row-reverse" id="navbarNav">
                            <ul className="navbar-nav justify-content-end ms-5">
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/home">Home</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/admin">Add Products</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/manage">Manage Products</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <h1 className="text-center">You Have Total {products.length} Products ....!!!!!</h1>
                {
                    products.map(pd => <ManageProductsDetails pd={pd}></ManageProductsDetails>)
                }
            </div>

        </div>
    );
};

export default ManageProducts;