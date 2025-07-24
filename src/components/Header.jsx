import React from 'react';


function Header() {
    return (
        <nav className="navbar bg-dark border-bottom border-body py-3" data-bs-theme="dark">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <a className="nav-link text-light custom-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light custom-link" href="#">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light custom-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
