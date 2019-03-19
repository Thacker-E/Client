import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../styledComponents/GenStyling';

const ContactBanner = props => (
    <div>
        <div>
            <Text><h2>Contact</h2></Text>
        </div>
        <div>
            <Text><h1>YOUR SAFE SPACE</h1></Text>
        </div>
        <div>
            <Link to='/'><button type='button' onClick={props.displayHome}>Home</button></Link>
            <Link to='/about'><button type='button' onClick={props.displayabout}>About</button></Link>
            <Link to='/help'><button type='button' onClick={props.displayHelp}>Help</button></Link>
        </div>
    </div>
);

export default ContactBanner;