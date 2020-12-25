import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const NoteForm = ({ onSubmit, initValues }) => {
    const { initTitle, initContent, labelTitle, labelContent } = initValues;
    const [title, setTitle] = useState(initTitle);
    const [content, setContent] = useState(initContent);

    return(
        <View>
            <Text style={styles.label}>{labelTitle}</Text>
            <TextInput  
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>{labelContent}</Text>
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
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

NoteForm.defaultProps = {     
    initValues: {
        initTitle: '',
        initContent: '',
        labelTitle: 'Enter Title:',
        labelContent: 'Enter Content:'
    }
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

export default NoteForm;