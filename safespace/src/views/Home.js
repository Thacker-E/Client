import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMessages } from '../stores/actions';
import MessageList from '../components/Messageboard/MessageList';
import { CenterStage, Spotlight, Text, ButtonBox, ButtonCage, IsButton } from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';

class Home extends React.Component {
    state = {
        messages: [],
    }

    // componentDidMount() {
    //     axios.get('https://safespacebackend.herokuapp.com/messages')
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //             messages: res.data,
    //         })
    //     })
    // }
    
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
                    {this.props.fetchMessages === 'fetching' ? (
                        <Text><p>PLEASE WAIT WHILE WE GRAB YOUR MESSAGES</p></Text>
                    ) : (
                        <MessageList
                            messages={this.props.messages}
                            render={messages => console.log('Can you see me, now?', messages)}
                        />
                    )}
                </Spotlight>
            </CenterStage>
        );
    };
};

// const mapPropsToState = ({ props }) => ({
//     messages: props.messages,
//     fetching: props.fetching
// });

export default connect(null, { fetchMessages })(Home);
// export default connect(mapPropsToState, { fetchMessages })(Home);