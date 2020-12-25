import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const CreateScreen = ({ navigation }) => {
    
    const { addNotePost } = useContext(Context);

    return <NoteForm
        onSubmit={(title, content) => {
            addNotePost(title, content, () => navigation.navigate('Home'))
        }}
    />
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;