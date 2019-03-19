import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../styledComponents/GenStyling';
import {
    Banner,
    CenterBoxseat,
    Sectional,
    WebsiteName,
    PageName,
    LinkNotButton
} from '../../styledComponents/NavStyling';

const HomeBanner = props => (
    <Banner>
        <Sectional>
            <PageName>HOME</PageName>
        </Sectional>
        <CenterBoxseat>
            <WebsiteName>YOUR SAFE SPACE</WebsiteName>
        </CenterBoxseat>
        <Sectional>
            <Link to='/about'>
                <LinkNotButton type='button' onClick={props.displayAbout}>
                    ABOUT
                </LinkNotButton>
            </Link>
            <Link to='/help'>
                <LinkNotButton type='button' onClick={props.displayHelp}>
                    HELP
                </LinkNotButton>
            </Link>
            <Link to='/contact'>
                <LinkNotButton type='button' onClick={props.displayContact}>
                    CONTACT
                </LinkNotButton>
            </Link>
        </Sectional>
    </Banner>
);

export default HomeBanner;