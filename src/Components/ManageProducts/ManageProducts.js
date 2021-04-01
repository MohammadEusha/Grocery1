import React from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
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
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/admin">Admin</Link>
                                </li>
                                <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                    <Link style={{ textDecoration: 'none' }} className="text-success" to="/manage">Manage Products</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

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
                        <td class="fw-bolder">Mark</td>
                        <td class="ps-4">1</td>
                        <td class="fw-bolder">@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;