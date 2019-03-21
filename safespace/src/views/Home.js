import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages, addMessage } from '../stores/actions';
import MessageList from '../components/Messageboard/MessageList';
import AddMessage from '../components/Messageboard/AddMessage';
import {
    CenterStage,
    Spotlight,
    DangerZone,
    ButtonBox,
    ButtonCage,
    IsButton,
    Text
} from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';

class Home extends React.Component {
    state = {
        activeView: 'messages'
    }

    componentDidMount() {
        this.props.fetchMessages();
    };

    addMessage = message => {
        this.props.addMessage(message);
    }

    displayMessages = () => {
        this.setState({ activeView: 'messages' })
    }

    displayAdder = () => {
        this.setState({ activeView: 'adder' })
    }

    render() {
        return (
            <CenterStage>
                <Spotlight>
                    <TopContainer>
                        <Text><h2>HERE ARE YOUR NOTES</h2></Text>
                        <ButtonBox>
                            <ButtonCage>
                                <IsButton
                                    type='button'
                                    onClick={this.displayAdder}
                                >ADD</IsButton>
                            </ButtonCage>
                            <ButtonCage>
                                <IsButton>DELETE</IsButton>
                            </ButtonCage>
                        </ButtonBox>
                    </TopContainer>
                    {this.state.activeView === 'messages' ? (
                        <DangerZone>
                            {this.props.fetching === 'fetching' ? (
                                <Text><p>PLEASE WAIT WHILE WE GRAB YOUR MESSAGES</p></Text>
                            ) : (
                                <MessageList messages={this.props.messages} />
                            )}
                        </DangerZone>
                        ) : (
                            <AddMessage
                                addHandler={this.addMessage}
                            />
                        )}
                    
                </Spotlight>
            </CenterStage>
        );
    };
};

const mapPropsToState = ({ fetchReducers }) => ({
    messages: fetchReducers.messages,
    fetching: fetchReducers.fetching
});

export default connect(mapPropsToState, { fetchMessages, addMessage })(Home);