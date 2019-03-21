// import React from 'react';
// import Message from './Message';
// import { deleteMessage } from '../../stores/actions';
// // import Checkbox from '../Modals/Checkbox';
// // import { DeleteWindow } from '../Modals';
// import { Spotlight, ButtonCage, IsButton } from '../../styledComponents/GenStyling';
// import { MessageRow } from '../../styledComponents/MessageStyling';

// const MessageList = (props, killHandler = deleteHandler) => (
//     <Spotlight>
//         {props.messages.map(message => {
//             return (
//                 <MessageRow key={message.id}>
//                     {/* <label>
//                         <Checkbox />
//                     </label> */}
//                     <Message message={message} />
//                     <ButtonCage>
//                         <IsButton>EDIT</IsButton>
//                     </ButtonCage>
//                     <ButtonCage>
//                         <IsButton
//                             type='button'
//                             onClick={killHandler}
//                         >DELETE</IsButton>
//                     </ButtonCage>
//                     {/* <DeleteWindow /> */}
//                 </MessageRow>
//             );
//         })}
//     </Spotlight>
// );

// export default MessageList;

import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { deleteMessage } from '../../stores/actions';
import { Spotlight, ButtonCage, IsButton } from '../../styledComponents/GenStyling';
import { MessageRow } from '../../styledComponents/MessageStyling';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    submitHandler = (e, message) => {
        e.preventDefault();
        this.props.deleteMessage(message);
        setTimeout(tom => {
            this.props.refresHandler();
        }, 1000);
    };

    
    render() {
        return (
            <Spotlight>
                {this.props.messages.map(message => {
                    console.log(this.props.message)
                    return (
                        <MessageRow key={message.id}>
                            <Message message={message} />
                            <ButtonCage>
                                <IsButton>EDIT</IsButton>
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
                    );
                })}
            </Spotlight>
        );
    }
}

export default connect(null, { deleteMessage })(MessageList);