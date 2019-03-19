import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Note extends React.Component {
    state = {
        note: ''
    };

    componentDidMount() {
        axios
            .get(`${this.props.match.params}`)
            .then(res => {
                this.setState({ note: res.data });
            })
            .catch(err => {
                console.error(err);
            });
    };
};