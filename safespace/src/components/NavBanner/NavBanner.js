import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBanner extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    YOUR SAFE SPACE
                </div>
                <div>
                    <Link to='/about'>About</Link>
                    <Link to='/help'>Help</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        )
    }
}