import React from 'react';
import { Text } from '../../styledComponents/GenStyling';
import { MessageBody } from '../../styledComponents/MessageStyling';

const Message = ({ message }) => (
    <MessageBody>
        <Text>
            <p>{message.message}</p>
        </Text>
    </MessageBody>
);

export default Message;