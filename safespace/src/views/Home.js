import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../stores/actions';
import MessageList from '../components/Messageboard/MessageList';
import { CenterStage, Spotlight, Text, ButtonBox, ButtonCage, IsButton } from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
    };

    render() {
        return (
            <CenterStage>
                <Spotlight>
                    <TopContainer>
                        <Text><h2>HERE ARE YOUR NOTES</h2></Text>
                        <ButtonBox>
                            <ButtonCage>
                                <IsButton>ADD</IsButton>
                            </ButtonCage>
                            <ButtonCage>
                                <IsButton>DELETE</IsButton>
                            </ButtonCage>
                        </ButtonBox>
                    </TopContainer>
                    {this.props.fetchMessages !== 'fetching' ? (
                        <Text><p>PLEASE WAIT WHILE WE GRAB YOUR MESSAGES</p></Text>
                    ) : (
                        <MessageList messages={this.props.messages} />
                    )}
                </Spotlight>
            </CenterStage>
        );
    };
};

const mapPropsToState = (state) => ({
    messages: state.messages,
    fetching: state.fetching
});

export default connect(mapPropsToState, { fetchMessages })(Home);