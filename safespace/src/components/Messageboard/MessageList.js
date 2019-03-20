import React from 'react';
import Message from './Message';
import Checkbox from './Checkbox';
import { Spotlight } from '../../styledComponents/GenStyling';
import { MessageRow } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {

    render(props) {
        return (
            <Spotlight>
                    {props.messages.map(message => (
                        <MessageRow key={message.id}>
                            <Checkbox />
                            <Message message={message} />
                        </MessageRow>
                    ))}
            </Spotlight>
        );
    };
};

export default MessageList;