import React from 'react';

export default class Login extends React.Component {
    state = {
        activeForm: 'login',
        username: '',
        password: '',
        phone: ''
    };

    displayRegister = () => {
        this.setState({
            activeForm: 'register',
            username: '',
            password: '',
            phone: ''
        });
    };

    displayLogin = () => {
        this.setState({
            activeForm: 'login',
            username: '',
            password: ''
        });
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                {this.state.activeForm === 'login' ? (
                    <form onSubmit={e => {
                        this.props.loginHandler(e);
                    }}>
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
                        <div>
                            <button
                                type='submit'
                                value='Login'
                                onClick={this.loginHandler}
                            >Log In</button>
                            <button
                                type='submit'
                                value='Register'
                                onClick={this.displayRegister}
                            >Register</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={e => {
                        this.props.registrationHandler(e);
                    }}>
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
                        <input
                            type='text'
                            name='phone'
                            placeholder='Phone number'
                            value={this.state.phone}
                            onChange={this.changeHandler}
                            required
                        />
                        <div>
                            <button
                                type='submit'
                                value='Login'
                                onClick={this.displayLogin}
                            >Log In</button>
                            <button
                                type='submit'
                                value='Register'
                                onClick={this.registrationHandler}
                            >Register</button>
                        </div>
                    </form>
                )}
            </div>
        );
    };
};