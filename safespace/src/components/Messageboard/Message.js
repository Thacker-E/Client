import React from 'react';
import { Text } from '../../styledComponents/GenStyling';
import { MessageBody } from '../../styledComponents/MessageStyling';

const Message = ({ message }) => (
    <MessageBody>
        <Text>
            <p>{message}</p>
        </Text>
    </MessageBody>
)

export default Message;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Checkbox from './Checkbox';
// import { Text } from '../../styledComponents/GenStyling';
// import { MessageRow, Message } from '../../styledComponents/MessageStyling';

// class Note extends React.Component {
//     state = {
//         checked: false
//     };

//     checkHandler = e => {
//         this.setState({ checked: e.target.checked });
//     };

//     render() {
//         return (
//             <Link to={`/messages/${this.props.message.id}`}>
//                 <MessageRow>
//                     <Checkbox
//                         checked={this.state.checked}
//                         onChange={this.checkHandler}
//                     />
//                     <Message>
//                         <Text>
//                             <h3>{this.props.message.title}</h3>
//                             <p>{this.props.message.messageBody}</p>
//                         </Text>
//                     </Message>
//                 </MessageRow>
//             </Link>
//         );
//     };
// };

// export default Note;