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
    Text
} from '../styledComponents/GenStyling';
import { TopContainer, AddCancel, AddCanBut } from '../styledComponents/MessageStyling';

// const OPTIONS = ['One', 'Two', 'Three']

class Home extends React.Component {
    state = {
        activeView: 'messages',
    //     checkboxes: OPTIONS.reduceRight(
    //         (options, option) => ({
    //             ...options,
    //             [option]: false
    //         }),
    //         {}
    //     )
    }

    displayMessages = () => {
        this.setState({ activeView: 'messages' })
    }

    displayAdder = () => {
        this.setState({ activeView: 'adder' })
    }

    refresHandler = () => {
        window.location.reload();
    }

    componentDidMount() {
        this.props.fetchMessages();
    };

    addMessage = message => {
        this.props.addMessage(message);
    }

    render() {
        return (
            <CenterStage>
                <Spotlight>
                    <TopContainer>
                        <Text><h2>HERE ARE YOUR NOTES</h2></Text>
                        <ButtonBox>
                            <AddCancel>
                                {this.state.activeView === 'messages' ? (
                                    <AddCanBut
                                        type='button'
                                        onClick={this.displayAdder}
                                    >ADD A MESSAGE</AddCanBut>
                                ) : (
                                    <AddCanBut
                                        type='button'
                                        onClick={this.displayMessages}
                                    >CANCEL?</AddCanBut>
                                )}
                            </AddCancel>
                        </ButtonBox>
                    </TopContainer>
                    {this.state.activeView === 'messages' ? (
                        <DangerZone>
                            {this.props.fetching === 'fetching' ? (
                                <Text><p>PLEASE WAIT WHILE WE GRAB YOUR MESSAGES</p></Text>
                            ) : (
                                <MessageList
                                    messages={this.props.messages}
                                    refresHandler={this.refresHandler}
                                />
                            )}
                        </DangerZone>
                    ) : (
                        <DangerZone>
                            <AddMessage
                                addHandler={this.addMessage}
                                refresHandler={this.refresHandler}
                                // displayMessages={this.displayMessages}
                            />
                        </DangerZone>
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