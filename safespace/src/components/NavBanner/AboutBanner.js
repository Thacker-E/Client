import React from 'react';
import { Link } from 'react-router-dom';
import {
    Banner,
    CenterBoxseat,
    Sectional,
    WebsiteName,
    PageName,
    LinkNotButton
} from '../../styledComponents/NavStyling';

const AboutBanner = props => (
    <Banner>
        <Sectional>
            <PageName>ABOUT</PageName>
        </Sectional>
        <CenterBoxseat>
            <WebsiteName>YOUR SAFE SPACE</WebsiteName>
        </CenterBoxseat>
        <Sectional>
            <Link to='/'>
                <LinkNotButton type='button' onClick={props.displayHome}>
                    HOME
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

export default AboutBanner;