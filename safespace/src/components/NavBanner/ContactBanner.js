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

const ContactBanner = props => (
    <Banner>
        <Sectional>
            <PageName>CONTACT</PageName>
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
        </Sectional>
    </Banner>
);

export default ContactBanner;