import React from 'react';
import { Link, Route } from 'react-router-dom';
import { TermsConditions } from '../../views';
import { Text, NotButton } from '../../styledComponents/GenStyling';
import {
    FormPage,
    LoginBox,
    RegisterBox,
    LoginHeader,
    RegisterHeader,
    LoginDiv,
    LogInput,
    LoginButton,
    OurTerms,
    buttonDec
} from '../../styledComponents/LoginStyling';

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
            password: ''
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
            <FormPage>
                {this.state.activeForm === 'login' ? (
                    <LoginBox>
                        <LoginHeader>
                            <Text>
                                <h4>
                                    Welcome to Safe Space™
                                </h4>
                                <p>
                                    Please log in to be inspired.
                                </p>
                            </Text>
                        </LoginHeader>
                        <form onSubmit={e => {
                            this.props.loginHandler(e);
                        }}>
                            <LoginDiv>
                                <LogInput
                                    type='text'
                                    name='username'
                                    placeholder='Your username'
                                    value={this.state.username}
                                    onChange={this.changeHandler}
                                    required
                                />
                            </LoginDiv>
                            <LoginDiv>
                                <LogInput
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.changeHandler}
                                    required
                                />
                            </LoginDiv>
                            <div>
                                <LoginButton
                                    type='submit'
                                    value='Login'
                                    onClick={this.loginHandler}
                                >LOG IN</LoginButton>
                                <LoginButton
                                    type='button'
                                    value='Register'
                                    onClick={this.displayRegister}
                                >REGISTER</LoginButton>
                            </div>
                        </form>
                    </LoginBox>
                ) : (
                    <div>
                        {this.state.activeForm === 'register' ? (
                            <RegisterBox>
                                <RegisterHeader>
                                    <Text>
                                        <h4>
                                            Welcome! to Safe Space™
                                        </h4>
                                        <p>
                                            You've made the right choice. To use this service, you must first
                                            register below.
                                        </p>
                                        <p>
                                            Notice: this servive sends you uplifting and positive messages throughout
                                            the day via your cellphone; you may incur addition charges by your carrier.
                                            By registering with Safe Space™, you agree to all of our {" "}
                                            <Link to='/terms-and-conditions'>
                                                <NotButton
                                                    type='button'
                                                    value='Terms'
                                                    onClick={this.displayTerms}
                                                >Terms and Conditions</NotButton>
                                            </Link>.
                                        </p>
                                    </Text>
                                </RegisterHeader>
                                <form onSubmit={e => {
                                    this.props.registrationHandler(e);
                                }}>
                                    <LoginDiv>
                                        <LogInput
                                            type='text'
                                            name='username'
                                            placeholder='Your username'
                                            value={this.state.username}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </LoginDiv>
                                    <LoginDiv>
                                        <LogInput
                                            type='text'
                                            name='phone'
                                            placeholder='Your phone number'
                                            value={this.state.phone}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </LoginDiv>
                                    <LoginDiv>
                                        <LogInput
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            value={this.state.password}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </LoginDiv>
                                    <LoginDiv>
                                        <LogInput
                                            type='password'
                                            name='confirmPassword'
                                            placeholder='Confirm password'
                                            value={this.state.confirmPassword}
                                            onChange={this.changeHandler}
                                            required
                                        />
                                    </LoginDiv>
                                    <div>
                                        <LoginButton
                                            type='submit'
                                            value='Register'
                                            onClick={this.registrationHandler}
                                        >REGISTER</LoginButton>
                                        <LoginButton
                                            type='button'
                                            value='Login'
                                            onClick={this.displayLogin}
                                        >LOG IN</LoginButton>
                                    </div>
                                </form>
                            </RegisterBox>
                        ) : (
                            <OurTerms>
                                <Route exact path='/terms-and-conditions' component={TermsConditions} />
                                <button
                                    type='button'
                                    value='Register'
                                    onClick={this.displayRegister}
                                    style={buttonDec}
                                >Ok</button>
                            </OurTerms>
                        )}
                    </div>
                )}
            </FormPage>
        );
    };
};