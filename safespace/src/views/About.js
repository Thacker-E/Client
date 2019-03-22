import React from 'react';
import {
    CenterStage,
    Spotlight,
    ButtonBox,
    Text,
    CompName,
    TextBlock } from '../styledComponents/GenStyling';
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
                                <CompName>SAFE SPACE™</CompName> IS AN AUTOMATED MESSAGING SERVICE THAT PROVIDES SUPPORTIVE,
                                MOTIVATIONAL MESSAGES WRITTEN BY THE ONE PERSON WHO KNOWS YOU BEST:
                            </p>
                            <p>
                                YOURSELF.
                            </p>
                            <p>
                                OUR DESIRE IS TO ALLOW YOU AN ENTIRELY SINGULAR USER EXPERIENCE IN WHICH YOU
                                RECIEVE TEXT MESSAGES THAT YOU'VE WRITTEN TO GIVE YOU THAT EXTRA SUPPORT YOU MAY
                                NEED. IN PRACTICE, WE HOPE THAT YOU WILL COMPOSE EACH MESSAGE WITH POSITIVITY AND
                                SELF-AWARENESS IN MIND. FROM ENTHUSIASTIC REMINDERS TO DRINK WATER, EAT, OR
                                ANYTHING ELSE YOU MIGHT NEED, TO WORDS OF ENCOURAGEMENT DURING DIFFICULT MOMENTS,
                                SAFE SPACE™ IS DEDICATED TO GIVING YOU THE POWER BUILD ANOTHER AVENUE TO REMIND YOU
                                THAT YOU ARE WHAT YOU ARE, AND THAT NO ONE ELSE CAN DECIDE THAT FOR YOU.
                            </p>
                            <p>
                                WE AT <CompName>SAFE SPACE™</CompName> UNDERSTAND, HOWEVER, THAT THE FREEDOM WE
                                EAGERLY OFFER OUR USERS MAY TEMPT SOME TO SEND THEMSELVES NEGATIVE, HARMFUL,
                                AND/OR SELF-DESTRUCTIVE MESSAGES. SHOULD TIMES EVER GET TOO BAD, WE'VE PROVIDED
                                OUR USES ACCESS TO THE NATIONAL SUICIDE PREVENTION LIFELINE BELOW, JUST IN CASE.
                            </p>
                            <div>
                                <h4>NATIONAL SUICIDE PREVENTION LIFELINE</h4>
                                <h4>Call // 1 (800) 2738255</h4>
                                <p>Available 24 hours everyday</p>
                            </div>
                            
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
                </Spotlight>
            </CenterStage>
        );
    };
};