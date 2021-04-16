import React from 'react';
import './Nav.css'

 const Nav = (props) => {
     console.log(props);
    return (
    <nav className="navbar">
        <ul>
            <li><a href="#">{props.home}</a></li>
            <li><a href="#">{props.about}</a></li>
            <li><a href="#">{props.contact}</a></li>
            <li><a href="#">{props.faqs}</a></li>
        </ul>
    </nav>
    )
}

export default Nav