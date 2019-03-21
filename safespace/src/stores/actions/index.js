import axios from 'axios';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const fetchMessages = () => dispatch => {
    dispatch({ type: FETCH_MESSAGE });
    axios
        .get(`https://safespacebackend.herokuapp.com/messages`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
};

// componentDidMount() {
//     axios
//     .get('https://safespacebackend.herokuapp.com/messages')
//     .then(res => {
//         console.log(res)
//         this.setState({
//             messages: res.data,
//         })
//     })
// }

export const addMessage = message => dispatch => {
    dispatch({ type: ADD_MESSAGE });
    axios
        .push(`https://safespacebackend.herokuapp.com/addmessage`, message)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data.message });
            this.props.history.push('/');
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADD_FAILURE, payload: err });
        })
}

export const editMessage = message => dispatch => {
    dispatch({ type: EDIT_MESSAGE });
    axios
        .push(`https://safespacebackend.herokuapp.com/messages/:id`, message)
        .then(res => {
            dispatch({ type: EDIT_SUCCESS, payload: res.data.results });
            this.props.history.push('/');
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: EDIT_FAILURE, payload: err });
        })
}

export const deleteMessage = message => dispatch => {
    dispatch({ type: DELETE_MESSAGE });
    axios
        .push(`https://safespacebackend.herokuapp.com/deletemessages/:id`, message)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data.results });
            this.props.history.push('/');
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: DELETE_FAILURE, payload: err });
        })
}