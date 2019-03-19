import React from 'react';
import axios from 'axios';

const Authenticate = App => Login => {
    return class extends React.Component {
        state = {
            isLoggedIn: false,
            token: null
        };

        componentDidMount() {
            if(localStorage.getItem('jwt')) {
                this.setState({ isLoggedIn: true });
                this.setState({ token: localStorage.getItem('jwt') });
            }
        }
        
        loginHandler = e => {
            e.preventDefault();
            let loginCredentials = {
                username: e.target[0].value,
                password: e.target[1].value
            }
            console.log("What are these login credentials?", loginCredentials);
            axios
                .post(
                    `https://safespacebackend.herokuapp.com/login`,
                    loginCredentials
                )
                .then(res => {
                    console.log(res.data);
                    localStorage.setItem('jwt', res.data.token);
                    this.setState({ isLoggedIn: true });
                    this.props.history.push('/');
                })
                .catch(err => console.error(err));
        }

        registrationHandler = e => {
            e.preventDefault();
            const registrationCredentials = {
                username: e.target[0].value,
                phone: e.target[1].value,
                password: e.target[2].value,
                confirmPassword: e.target[3].value
            };
            console.log("What are these registration credentials?", registrationCredentials);
            if (this.password !== this.confirmPassword) {
                alert("The passwords don't match.")
            } else {
                axios
                    .post(
                        `https://safespacebackend.herokuapp.com/register`,
                        registrationCredentials
                    )
                    .then(res => {
                        console.log(res.data.message);
                        localStorage.setItem('jwt', res.data.token);
                        this.setState({ isLoggedIn: true });
                        this.props.history.push('/');
                    })
                    .catch(err => console.error(err));
            }
        }

        render() {
            if (this.state.loggedIn) {
                return <App />;
            } else {
                return (
                    <Login
                        loginHandler={this.loginHandler}
                        registrationHandler={this.registrationHandler}
                    />
                )
            }
        }
    };
};

export default Authenticate