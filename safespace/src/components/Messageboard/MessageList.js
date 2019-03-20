import React from 'react';
// import Message from './Message';
import Checkbox from './Checkbox';
import { Spotlight, Text } from '../../styledComponents/GenStyling';
import { MessageRow, MessageBody, } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {
    render() {
        return (
            <Spotlight>
                    {this.props.messages.map(message => (
                        <MessageRow key={message.id}>
                            <Checkbox />
                            <MessageBody>
                                <Text>
                                    <p>{message}</p>
                                </Text>
                            </MessageBody>
                            {/* <Message message={message} /> */}
                        </MessageRow>
                    ))}
            </Spotlight>
        );
    };
};

export default MessageList;