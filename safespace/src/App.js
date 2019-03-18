import React, { Component } from 'react';
// import { Login, Authenticate } from './components/AuthLogin';
import Home from './components/Home';
import { Backdrop } from './styledComponents/GenStyling';

class App extends Component {
    state = {};
    
    render() {
        return (
            <Backdrop>
                hai
                <Home />
            </Backdrop>
        );
    }
}

export default App;
// export default Authenticate(App)(Login);
