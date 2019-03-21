import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../stores/actions';

class AddMessage extends React.Component {
    state = {
        message: ''
    };

    componentDidMount() {
        this.props.addMessage();
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        if (this.state.message) {
            this.props.addMessage({
                message: this.state.message
            });
            this.setState({
                message: ''
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input/>
                <button></button>
            </form>
        );
    };
};

export default AddMessage;