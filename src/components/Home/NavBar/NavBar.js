import React, { useContext, useEffect, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './NavBar.css';

const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    // console.log(user);

    const history = useHistory()
    
    const handleLogin = () => {
        history.push('/login');
    };

    const handLogOut = () => {
        setUser({
            userLogin: false,
            name: '',
            email: ''
        });
    };

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
        <Navbar expand="lg" className="pt-4">
            <NavLink exact to="/">
                <img
                    src={logo}
                    width="150px"
                    alt="logoImage"
                />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                    <NavLink activeClassName="active" to="/portfolio">Our Portfolio</NavLink>
                    <NavLink activeClassName="active" to="/team">Our Team</NavLink>
                    <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
                    {
                       isAdmin ?
                       <NavLink activeClassName="active" to="/serviceList">Dashboard</NavLink>
                       :
                       <NavLink activeClassName="active" to="/userService">Dashboard</NavLink>
                    }
                </Nav>
                {
                  user.userLogin
                  ?
                  <Button className="button-style" onClick={handLogOut}>Log Out</Button>
                  :
                  <Button className="button-style" onClick={handleLogin}>Log In</Button>
                } 
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;