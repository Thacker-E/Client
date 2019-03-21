import React from 'react';
import Checkbox from './Checkbox';
import Message from './Message';
import { Spotlight } from '../../styledComponents/GenStyling';
import { MessageRow } from '../../styledComponents/MessageStyling';
// import { Spotlight, Text } from '../../styledComponents/GenStyling';
// import { MessageRow, MessageBody } from '../../styledComponents/MessageStyling';

const MessageList = props => (
    <Spotlight>
        {props.messages.map(message => {
            return (
                <MessageRow key={message.id}>
                    <Checkbox />
                    <Message message={message} />
                </MessageRow>
            );
        })}
    </Spotlight>
);

export default MessageList;

// class MessageList extends React.Component {
//     render() {
//         return (
//             <Spotlight>
//                     {this.props.messages.map(message => {
//                         return (
//                             <MessageRow key={message.id}>
//                                 <Checkbox />
//                                 <MessageBody>
//                                     <Text>
//                                         <p>{message.message}</p>
//                                     </Text>
//                                 </MessageBody>
//                             </MessageRow>
//                         );
//                     })}
//             </Spotlight>
//         );
//     };
// };

// export default MessageList;