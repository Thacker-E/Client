import React from 'react';
import HomeBanner from './HomeBanner';
import AboutBanner from './AboutBanner';
import HelpBanner from './HelpBanner';
import ContactBanner from './ContactBanner';

class NavBanner extends React.Component {
    state = {
        activeBanner: 'home'
    };

    displayHome = () => {
        this.setState({ activeBanner: 'home' });
    };

    displayAbout = () => {
        this.setState({ activeBanner: 'about' });
    }

    displayHelp = () => {
        this.setState({ activeBanner: 'help' });
    }

    displayContact = () => {
        this.setState({ activeBanner: 'contact' });
    }

    render() {
        return (
            <div>
                {this.state.activeBanner === 'home' && (
                    <HomeBanner
                        displayAbout={this.displayAbout}
                        displayHelp={this.displayHelp}
                        displayContact={this.displayContact}
                    />
                )}
                {this.state.activeBanner === 'about' && (
                    <AboutBanner
                        displayHome={this.displayHome}
                        displayHelp={this.displayHelp}
                        displayContact={this.displayContact}
                    />
                )}
                {this.state.activeBanner === 'help' && (
                    <HelpBanner
                        displayHome={this.displayHome}
                        displayAbout={this.displayAbout}
                        displayContact={this.displayContact}
                    />
                )}
                {this.state.activeBanner === 'contact' && (
                    <ContactBanner
                        displayHome={this.displayHome}
                        displayAbout={this.displayAbout}
                        displayHelp={this.displayHelp}
                    />
                )}
            </div>
        )
    }
}

export default NavBanner;