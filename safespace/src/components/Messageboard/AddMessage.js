import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../stores/actions';
import { ButtonCage, IsButton } from '../../styledComponents/GenStyling'
import { InputForm, InputCradle, AddInput } from '../../styledComponents/MessageStyling';

class AddMessage extends React.Component {
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

    componentDidMount() {
        this.setState({
            text: {
                message: ''
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();
        if (this.state.text.message) {
            this.props.addHandler(this.state.text);
            setTimeout(() => {
                this.props.refresHandler();
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
                        placeholder='Say something nice or encouraging to yourself'
                        value={this.state.text.message}
                        onChange={this.changeHandler}
                        autoComplete='off'
                        required
                    />
                </InputCradle>
                <ButtonCage>
                    <IsButton type='submit'>ADD MESSAGE</IsButton>
                </ButtonCage>
            </InputForm>
        );
    };
};

export default connect(null, { addMessage })(AddMessage);