import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderContent from '../HeaderContent/HeaderContent';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <header className="background-color header-area">
            <Container>
                <NavBar />
                <HeaderContent />
            </Container>
        </header>
    );
};

export default Header;