import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='hed'>
            <div className="header">
                <img src="/src/assets/eco_logo.webp" alt="Logo" />
                <ul>
                    <li>
                        <Link to="/">Profil</Link>
                    </li>
                    <li>
                        <Link to="/post">Post</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link> {/* Yangi URL */}
                    </li>
                    <li>
                        <a href="https://t.me/EcoCityMarsItSchool_bot" target="_blank" rel="noopener noreferrer">Bot</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
