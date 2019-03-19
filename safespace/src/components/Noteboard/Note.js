import React from 'react';
import { connect } from 'react-redux';
import { getNote } from '../../stores/actions';

class Note extends React.Component {
    // componentDidMount() {
    //     this.props.getNote();
    // };

    render() {
        return (
            <div>
                <h2>dis a note yis</h2>
                {/* <h2>{this.props.note.title}</h2> */}
                {/* <p>{this.props.note.notebody}</p> */}

            </div>
        );
    };
};

export default connect(null, { getNote })(Note);