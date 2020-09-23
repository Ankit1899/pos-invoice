import React from 'react';
import './Menustyle.css';
import {Link} from 'react-router-dom';

const User = () => {
    return (
        <div className="Menustyle">
            <ul>
                <li><Link to="Home">Home</Link></li>
                <li className="account"><Link to="Register">Sign up</Link></li>
                <li className="account"><Link to="Login">Login</Link></li>
            </ul>
        </div>
    )
}

export default User;