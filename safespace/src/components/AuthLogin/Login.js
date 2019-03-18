import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    loginHandler = e => {
        e.preventDefault();
        
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();

        // axios
        //     .get(``, this.state)
        //     .then(res => {
        //         localStorage.setItem('jwt', res.data.token);
        //         this.props.history.push('/');
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.loginHandler}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.changeHandler}
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.changeHandler}
                        required
                    />
                    <button type='submit'>Log In</button>
                </form>
                <h3>
                    {" "}
                    Not a registered user? Sign up <Link to='/signup'>here</Link>!
                </h3>
            </div>
        );
    };
};