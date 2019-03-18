import React from 'react';
import LoginPage from './Login';

const Authenticate = App => Login => {
    return class extends React.Component {
        state = {
            loggedIn: false
        };

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            };
        };

        render() {
            if (this.state.loggedIn) {
                return <App />;
            } else {
                return <LoginPage />
            }
        }
    };
};

export default Authenticate