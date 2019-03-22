import React from 'react';
import { connect } from 'react-redux';
import { editMessage } from '../../stores/actions';
import { ButtonCage, IsButton } from '../../styledComponents/GenStyling'
import { InputForm, InputCradle, AddInput } from '../../styledComponents/MessageStyling';

class EditMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: {
                message: ''
            }
        };
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            text: {
            ...this.state.text,
            [e.target.name]: e.target.value
            }
        });
    };

    foobar = () => {
        this.props.banana();
    }

    refresHandler = () => {
        window.location.reload();
    };

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.text.message) {
            this.props.editMessage(
                this.state.text,
                this.props.foobar
            );
            setTimeout(() => {
                this.refresHandler();
            }, 1000);
        };
    };

    render() {
        return (
            <InputForm onSubmit={this.submitHandler}>
                <InputCradle>
                    <AddInput
                        type='text'
                        name='message'
                        value={this.state.text.message}
                        onChange={this.changeHandler}
                        autoComplete='off'
                        required
                    />
                </InputCradle>
                <ButtonCage>
                    <IsButton type='submit'>EDIT</IsButton>
                </ButtonCage>
            </InputForm>
        );
    };
};

export default connect(null, { editMessage })(EditMessage);