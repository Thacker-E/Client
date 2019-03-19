import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchNotes } from '../../stores/actions';
import Checkbox from './Checkbox';
import { Text } from '../../styledComponents/GenStyling';
import {
    NoteBoard,
    NoteRow,
    Note } from '../../styledComponents/NoteStyling';

class NoteList extends React.Component {
    state = {
        checked: false
    };

    // componentDidMount() {
    //     this.props.fetchNotes();
    // };

    checkHandler = e => {
        this.setState({ checked: e.target.checked })
    }

    render() {
        return (
            <NoteBoard>
                <h2>dis yur noets yis</h2>
                <Contents />
                <Contents />
                <Contents />
                {/* {this.props.notes.map(note => (
                    <Contents key={note._id} note={note} />
                ))} */}
            </NoteBoard>
        );
    };
};

const Contents = (state) => {
    const { checked } = state;
    return (
        <NoteRow>
            <Checkbox
                checked={checked}
                onChange={state.checkHandler}
            />
            <Note>
                <Text>
                    <h3>Dis ah neot tidle</h3>
                    Dis de condents yisyis
                </Text>
            </Note>
        </NoteRow>
    )
}

// const Contents = ({ note }) => {
//     const { title, notebody } = note;
//     return (
//         <Link to={`/notes/${note.id}`}>
//             <div>
//                 <h3>{title}</h3>
//                 <p>{notebody}</p>
//             </div>
//         </Link>
//     );
// };

export default NoteList
// export default connect(null, { fetchNotes })(NoteList);