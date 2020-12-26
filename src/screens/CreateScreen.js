import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import NoteForm from '../components/NoteForm';
import { addNotePost } from '../redux/ActionCreators';

const mapDispatchToProps = {
    addNotePost: (title, content, callback) => addNotePost(title, content, callback)
}

const CreateScreen = (props) => {
    const { navigation, addNotePost } = props;

    return <NoteForm
        onSubmit={(title, content) => {
            addNotePost(title, content, () => navigation.navigate('Home'))
        }}
    />
};

const styles = StyleSheet.create({
    
});

export default connect(null, mapDispatchToProps)(CreateScreen);