import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg"
            style={{ backgroundColor: '#ffffff', padding: '10px' }}
        >
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="/NewsOne.png"
                        alt="NewsOne Logo"
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginRight: '10px',
                        }}
                    />
                    <span className='me-3 fst-italic' style={{ fontSize: '1rem', fontWeight: 'bold', color: '#5cb874' }}>NewsOne</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav fst-italic">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Indonesia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/programming">
                                Programming
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/covid">
                                Covid-19
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/saved">
                                Saved
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;