import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import image from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css';
import { faUserAlt, faPlus, faUsers, faComment } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    };

    const [user] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/checkAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [user]);
    return (
        <section className="sidebar">
            <div className="text-center">
                <img width="200px" src={image} alt="logoImage" onClick={handleClick} />
            </div>
            <div className="menu mt-5">
                <ul className="list-unstyled text-center">
                    {
                        isAdmin ?
                            <div className="adminMenu">
                                <li>
                                    <NavLink activeStyle={{ color: '#7ab259' }} to="/serviceList">
                                        <FontAwesomeIcon icon={faUsers} /> <span className="ml-2">Service List</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{ color: '#7ab259' }} to="/addService">
                                        <FontAwesomeIcon icon={faPlus} /> <span className="ml-2">Add Service</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{ color: '#7ab259' }} to="/addAdmin">
                                        <FontAwesomeIcon icon={faUserAlt} /> <span className="ml-2">Add Admin</span>
                                    </NavLink>
                                </li>
                            </div>
                            :
                            <div className="userMenu">
                                <li>
                                    <NavLink activeStyle={{ color: '#7ab259' }} to="/userService">
                                        <FontAwesomeIcon icon={faUsers} /> <span className="ml-2">Service List</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{ color: '#7ab259' }} to="/review">
                                        <FontAwesomeIcon icon={faComment} /> <span className="ml-2">Review agency</span>
                                    </NavLink>
                                </li>
                            </div>
                    }
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;