import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/NotesContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addNotePost } = useContext(Context);

    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput  
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}
                multiline
                textAlignVertical={'top'}
                numberOfLines={5}                
            />
            <Button 
                title='Add Note'
                onPress={() => {
                    addNotePost(title, content, () => {
                        navigation.navigate('Home');
                    });                    
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 24,
        marginHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        padding: 5,
        borderColor: 'darkgrey'
    },
    label: {
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 5
    }
});

export default CreateScreen;