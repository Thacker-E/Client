import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Login, Authenticate } from './components/AuthLogin';
import NavBanner from './components/NavBanner/NavBanner';
import { Home, About, Help, Contact } from './views';
import { Backdrop } from './styledComponents/GenStyling';

class App extends Component {
    state = {};
    
    render() {
        return (
            <Backdrop>
                hai
                <NavBanner />
                <Route exact path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/help' component={Help} />
                <Route path='/contact' component={Contact} />
            </Backdrop>
        );
    }
}

// export default App;
export default withRouter(Authenticate(App)(Login));
