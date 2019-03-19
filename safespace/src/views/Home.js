import React from 'react';
import NoteList from '../components/Noteboard/NoteList';
import { CenterStage } from '../styledComponents/GenStyling';

class Home extends React.Component {
    render() {
        return (
            <CenterStage>
                Home dis page he'yuh...
                <NoteList />
            </CenterStage>
        );
    };
};

export default Home;