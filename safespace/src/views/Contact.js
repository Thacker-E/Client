import React from 'react';
import { CenterStage, Spotlight, ButtonBox, Text } from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';

export default class About extends React.Component {
    render() {
        return (
            <CenterStage>
                <Spotlight>
                    <TopContainer>
                        <Text><h2>GIVE US A SHOUT</h2></Text>
                        <ButtonBox />
                    </TopContainer>
                </Spotlight>
            </CenterStage>
        );
    };
};