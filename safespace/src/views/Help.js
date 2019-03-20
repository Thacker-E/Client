import React from 'react';
import { CenterStage, ButtonBox, Text } from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';
import { Grindr } from '../styledComponents/ImgStyling';

export default class About extends React.Component {
    render() {
        return (
            <CenterStage>
                <Grindr>
                    <TopContainer>
                        <Text><h2>IF YOU'RE STUCK...</h2></Text>
                        <ButtonBox />
                    </TopContainer>
                </Grindr>
            </CenterStage>
        );
    };
};