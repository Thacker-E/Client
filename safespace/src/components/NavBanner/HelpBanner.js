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

const HelpBanner = props => (
    <Banner>
        <Sectional>
            <PageName>HELP</PageName>
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
            <Link to='/contact'>
                <LinkNotButton type='button' onClick={props.displayContact}>
                    CONTACT
                </LinkNotButton>
            </Link>
        </Sectional>
    </Banner>
);

export default HelpBanner;