import React, { Component } from 'react';
import { Login, Authenticate } from './components/AuthLogin';

class App extends Component {
    state = {};
    
    render() {
        return (
            <div className="App">
                hai
            </div>
        );
    }
}

export default Authenticate(App)(Login);
