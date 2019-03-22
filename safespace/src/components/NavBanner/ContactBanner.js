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

export default class HomeBanner extends React.Component {
    logout = () => {
        console.log('Hello, is free you\'re looking for?')
        localStorage.removeItem('jwt');
        window.location.reload();
    }
    
    render() {
        return (
            <Banner>
                <Sectional>
                    <PageName>CONTACT</PageName>
                </Sectional>
                <CenterBoxseat>
                    <WebsiteName>YOUR SAFE SPACE</WebsiteName>
                </CenterBoxseat>
                <Sectional>
                    <Link to='/'>
                        <LinkNotButton type='button' onClick={this.props.displayHome}>
                            HOME
                        </LinkNotButton>
                    </Link>
                    <Link to='/about'>
                        <LinkNotButton type='button' onClick={this.props.displayAbout}>
                            ABOUT
                        </LinkNotButton>
                    </Link>
                    <Link to='/help'>
                        <LinkNotButton type='button' onClick={this.props.displayHelp}>
                            HELP
                        </LinkNotButton>
                    </Link>
                    <Link to='/'>
                        <LinkNotButton type='button' onClick={this.logout}>
                            LOGOUT
                        </LinkNotButton>
                    </Link>
                </Sectional>
            </Banner>
        );
    };
};