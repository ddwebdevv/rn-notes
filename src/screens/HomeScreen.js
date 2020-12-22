import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as NotesContext } from '../context/NotesContext';
// import { Context as ImageContext } from '../context/ImageContext';

const HomeScreen = () => {
    const { state, addNotePost} = useContext(NotesContext);
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title='Add Note' onPress={addNotePost}/>
            <FlatList
                data={state}
                keyExtractor={(note) => note.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;