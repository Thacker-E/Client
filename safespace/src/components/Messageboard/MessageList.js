import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import EditMessage from './EditMessage';
import { deleteMessage } from '../../stores/actions';
import { Spotlight, ButtonCage, IsButton } from '../../styledComponents/GenStyling';
import { MessageRow } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    submitHandler = (e, message) => {
        e.preventDefault();
        this.props.deleteMessage(message);
        setTimeout(() => {
            this.props.refresHandler();
        }, 1000);
    };

    isOpenHander = e => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Spotlight>
                {this.props.messages.map(message => {
                    console.log(this.props.message)
                    return (
                        <div>
                        <MessageRow key={message.id}>
                            <Message message={message} />
                            <ButtonCage>
                                <IsButton
                                    type='submit'
                                    onClick={e => {
                                        this.isOpenHander(e)
                                    }}
                                >EDIT</IsButton>
                            </ButtonCage>
                            <ButtonCage>
                                <IsButton
                                    type='submit'
                                    onClick={e => {
                                        this.submitHandler(e, message.id);
                                    }}
                                >DELETE</IsButton>
                            </ButtonCage>
                        </MessageRow>
                                                    <div>
                                                    {this.state.isOpen && <EditMessage
                                                        foobar={message.id}
                                                    />}
                                                </div>
                                    </div>
                    );
                })}
            </Spotlight>
        );
    }
}

export default connect(null, { deleteMessage })(MessageList);