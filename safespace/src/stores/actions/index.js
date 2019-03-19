import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_NOTE = 'ADD_NOTE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCH_NOTES });
    axios
        .get(``)
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
};

export const addNote = note => dispatch => {
    dispatch({ type: ADD_NOTE });
    axios
        .push(``, note)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data.results });
            this.props.history.push('/');
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADD_FAILURE, payload: err });
        })
}