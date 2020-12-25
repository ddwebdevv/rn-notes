import React, { useContext } from 'react';
import {  StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const EditScreen = ({ navigation }) => {    
    const { state, editNotePost } = useContext(Context);
    const id = navigation.getParam('id');
    const notePost = state.find((note) => note.id === id);

    return <NoteForm  
        initValues={{
            initTitle: notePost.title,
            initContent: notePost.content,
            labelTitle: 'Edit Title:',
            labelContent: 'Edit Content:'
        }}
        onSubmit = {(title, content) => {
            editNotePost(title, content, id, () => navigation.pop());
        }}
    />;
}

const styles = StyleSheet.create({

});

export default EditScreen;