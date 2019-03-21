import React from 'react';
import Checkbox from './Checkbox';
import { Spotlight, Text } from '../../styledComponents/GenStyling';
import { MessageRow, MessageBody } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {
    render() {
        return (
            <Spotlight>
                    {this.props.messages.map(message => {
                        return (
                            <MessageRow key={message.id}>
                                <Checkbox />
                                <MessageBody>
                                    <Text>
                                        <p>{message.message}</p>
                                    </Text>
                                </MessageBody>
                            </MessageRow>
                        );
                    })}
            </Spotlight>
        );
    };
};

export default MessageList;