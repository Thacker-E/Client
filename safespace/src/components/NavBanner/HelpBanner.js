import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../styledComponents/GenStyling';

const HelpBanner = props => (
    <div>
        <div>
            <Text><h2>Help</h2></Text>
        </div>
        <div>
            <Text><h1>YOUR SAFE SPACE</h1></Text>
        </div>
        <div>
            <Link to='/'><button type='button' onClick={props.displayHome}>Home</button></Link>
            <Link to='/about'><button type='button' onClick={props.displayAbout}>About</button></Link>
            <Link to='/contact'><button type='button' onClick={props.displayContact}>Contact</button></Link>
        </div>
    </div>
);

export default HelpBanner;