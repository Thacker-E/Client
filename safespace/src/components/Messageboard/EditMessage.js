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
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        this.setState({
            text: {
                message: ''
            }
        });
    };

    submitHandler = e => {
        e.preventDefault();
        
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

export default connect(null, { editMessage })(EditMessage);