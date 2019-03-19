import React from 'react';
import { Link, Route } from 'react-router-dom';
import { TermsConditions } from '../../views';

export default class Login extends React.Component {
    state = {
        activeForm: 'login',
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    displayLogin = () => {
        this.setState({
            activeForm: 'login',
            username: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });
    };

    displayRegister = () => {
        this.setState({
            activeForm: 'register',
            username: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });
    };

    displayTerms = () => {
        this.setState({ activeForm: 'terms' })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                {this.state.activeForm === 'login' ? (
                    <div>
                        <div>
                            <h4>
                                Welcome to Safe Space™
                            </h4>
                            <p>
                                Please log in to be inspired.
                            </p>
                        </div>
                        <form onSubmit={e => {
                            this.props.loginHandler(e);
                        }}>
                            <input
                                type='text'
                                name='username'
                                placeholder='Your username'
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
                                    type='button'
                                    value='Register'
                                    onClick={this.displayRegister}
                                >Register</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        {this.state.activeForm === 'register' ? (
                            <div>
                                <div>
                                    <h4>
                                        You've made the right choice. Welcome! To start using Safe Space™, you must
                                        first register below.
                                    </h4>
                                    <p>
                                        Notice: this servive sends you uplifting and positive messages throughout
                                        the day via your cellphone; you may incur addition charges by your carrier.
                                        By registering with Safe Space™, you agree to all of our {" "}
                                        <button
                                            type='button'
                                            value='Terms'
                                            onClick={this.displayTerms}
                                        >Terms and Conditions</button>.
                                        
                                    </p>
                                </div>
                                <form onSubmit={e => {
                                    this.props.registrationHandler(e);
                                }}>
                                    <input
                                        type='text'
                                        name='username'
                                        placeholder='Your username'
                                        value={this.state.username}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                    <input
                                        type='text'
                                        name='phone'
                                        placeholder='Your phone number'
                                        value={this.state.phone}
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
                                        type='password'
                                        name='password'
                                        placeholder='Confirm password'
                                        value={this.state.confirmPassword}
                                        onChange={this.changeHandler}
                                        required
                                    />
                                    <div>
                                        <button
                                            type='button'
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
                            </div>
                        ) : (
                            <div>
                                <Route path='/terms-and-conditions' component={TermsConditions} />
                                <button
                                    type='button'
                                    value='Register'
                                    onClick={this.displayRegister}
                                >Ok</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };
};