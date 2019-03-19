import React from 'react';
import MultiToggle from 'react-multi-toggle';
import { ToggleWrapper, ToggleContainer, OptionDisabled } from '../../styledComponents/NavStyling';
import HomeBanner from './HomeBanner';
import AboutBanner from './AboutBanner';
import HelpBanner from './HelpBanner';
import ContactBanner from './ContactBanner';

const groupOptions = [
    {
        value: [ HomeBanner ]
    },
    {
        value: AboutBanner
    },
    {
        value: HelpBanner
    },
    {
        value: ContactBanner
    }
];

class NavBanner extends React.Component {
    state = {
        groupSize: 4
    }

    onGroupSizeSelect = value => {
        this.setState({ groupSize: value })
    }

    render() {
        const { groupSize } = this.state;
        return (
            <div>
                <MultiToggle
                    options={groupOptions}
                    selectedOption={groupSize}
                    onSelectOption={this.onGroupSizeSelect}
                />
            </div>
        )
    }
}

export default NavBanner;

// const groupOptions = [
//     {
//         value: [ HomeBanner ]
//     },
//     {
//         value: AboutBanner
//     },
//     {
//         value: HelpBanner
//     },
//     {
//         value: ContactBanner
//     }
// ];

// class NavBanner extends React.Component {
//     state = {
//         groupSize: 4
//     }

//     onGroupSizeSelect = value => {
//         this.setState({ groupSize: value })
//     }
    
//     // state = {
//     //     activeBanner: 'home'
//     // };

//     // displayHome = () => {
//     //     this.setState({ activeBanner: 'home' });
//     // };

//     // displayAbout = () => {
//     //     this.setState({ activeBanner: 'about' });
//     // }

//     // displayHelp = () => {
//     //     this.setState({ activeBanner: 'help' });
//     // }

//     // displayContact = () => {
//     //     this.setState({ activeBanner: 'contact' });
//     // }

//     render() {
//         const { groupSize } = this.state;
//         return (
//             <div>
//                 <MultiToggle
//                     options={groupOptions}
//                     selectedOption={groupSize}
//                     onSelectOption={this.onGroupSizeSelect}
//                 />

//                 {/* {this.state.activeBanner === 'home' ? (
//                     <HomeBanner
//                         displayAbout={this.displayAbout}
//                         displayHelp={this.displayHelp}
//                         displayContact={this.displayContact}
//                     />
//                 ) : (
//                     <AboutBanner
//                         displayHome={this.displayHome}
//                         displayHelp={this.displayHelp}
//                         displayContact={this.displayContact}
//                     />
//                 ) : (
//                     <HelpBanner/>
//                 )} */}
//             </div>
//         )
//     }
// }

// module.exports = NavBanner;