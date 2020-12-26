import React from 'react';
import NoteForm from '../components/NoteForm';
import { connect } from 'react-redux';
import { editNotePost } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return { notes: state.notes };
};

const mapDispatchToProps = {
    editNotePost: (title, content, id, callback) => editNotePost(title, content, id, callback)
}

const EditScreen = ({ navigation, notes, editNotePost }) => {    
    const id = navigation.getParam('id');
    const note = notes.find((note) => note.id === id);

    return <NoteForm  
        initValues={{
            initTitle: note.title,
            initContent: note.content,
            labelTitle: 'Edit Title:',
            labelContent: 'Edit Content:',
            buttonTitle: 'Edit Note'
        }}
        onSubmit = {(title, content) => {
            console.log('onsubmit', id, title, content);
            editNotePost(title, content, id, () => navigation.pop());
        }}
    />;
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);