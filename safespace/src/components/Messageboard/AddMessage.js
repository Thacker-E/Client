import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../stores/actions';

class AddMessage extends React.Component {
    state = {
        message: ''
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        if (this.state.message) {
            this.props.addHandler({
                message: this.state.message
            });
            this.setState({
                message: ''
            });
            window.location.reload();
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='message'
                    placeholder='Say something nice or encouraging to yourself'
                    value={this.state.message}
                    onChange={this.changeHandler}
                />
                <button type='submit'>ADD MESSAGE</button>
            </form>
        );
    };
};

export default connect(null, { addMessage })(AddMessage);