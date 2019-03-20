import React from 'react';
import { CenterStage, Spotlight, ButtonBox, Text, TextBlock } from '../styledComponents/GenStyling';
import { TopContainer } from '../styledComponents/MessageStyling';

export default class About extends React.Component {
    render() {
        return (
            <CenterStage>
                <Spotlight>
                    <TopContainer>
                        <Text><h2>NEW TO SAFE SPACE™?</h2></Text>
                        <ButtonBox />
                    </TopContainer>
                    <TextBlock>
                        <Text>
                            <h3>THE CONCEPT</h3>
                            <p>
                                THIS SERVICE IS FOR YOU TO REMIND YOURSELF THAT YOU'RE NOTHING ELSE THAN YOURSELF.
                                SIMPLY ADD A MESSAGE TO YOUR MESSAGE BOARD AND YOU'LL RECIEVE A LITTLE WORD OF
                                ENCOURAGEMENT FROM THE PERSON THAT KNOWS YOU BEST:
                            </p>
                            <p>
                                YOURSELF.
                            </p>
                        </Text>
                    </TextBlock>
                    <TextBlock>
                        <Text>
                            <h3>MEET THE TEAM</h3>
                            <p>
                                PEEPS.
                            </p>
                        </Text>
                    </TextBlock>
                    <TextBlock>
                        <Text>
                            <h3>MEET THE TEAM</h3>
                            <p>
                                MORE PEEPS.
                            </p>
                        </Text>
                    </TextBlock>
                </Spotlight>
            </CenterStage>
        );
    };
};