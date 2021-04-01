import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {




    return (
        <div >
            <nav className="d-flex navbar navbar-expand-lg">
                <div style={{ marginTop: '30px' }} className="container-fluid">
                    <h3 className="text-success">Grocery Store</h3>
                    <div className="d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 text-dark ">
                                <Link style={{ textDecoration: 'none' }} className="text-success" to="/home">Home</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none' }} className="text-success" to="/checkOut/:name">CheckOut</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold">
                                <Link style={{ textDecoration: 'none' }} className="text-success" to="/orders">See Your Orders List</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item pt-2 fw-bold ">
                                <Link style={{ textDecoration: 'none' }} className="text-success" to="/admin"> Admin</Link>
                            </li>
                            <li style={{ marginLeft: '50px', fontWeight: 'bold' }} className="nav-item">
                                <Link style={{ textDecoration: 'none' }} className="btn btn-success mt-1" to="/login"><FontAwesomeIcon icon={faUserPlus} />  Login</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;