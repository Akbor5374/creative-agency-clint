import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import './Login.css';
import gLogo from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase_config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [user, setUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                let newUser = { ...user };
                newUser = {
                    userLogin: true,
                    name: displayName,
                    email
                };
                setUser(newUser);
                history.replace(from);
            })
    };

    const homePage = () => {
        history.push('/');
    };
    return (
        <section className="login-area">
            <Container>
                <div className="logo text-center mt-5 mb-4">
                    <img width="250px" src={logo} alt="logoImage" onClick={homePage} />
                </div>
                <div className="login-box m-auto d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h2 className="mb-4">Login</h2>
                        <div
                            className="login d-flex align-items-center p-2"
                            onClick={handleLogin}
                        >
                            <img
                                width="30px"
                                height="30px"
                                src={gLogo}
                                alt="googleLogo"
                            />
                            <h5 className="m-auto">continue with google</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Login;