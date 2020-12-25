import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as NotesContext } from '../context/NotesContext';
// import { Context as ImageContext } from '../context/ImageContext';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, addNotePost, deleteNotePost} = useContext(NotesContext);
    return(
        <View>
            <Button title='Add Note' onPress={addNotePost}/>
            <FlatList
                data={state}
                keyExtractor={(note) => note.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteNotePost(item.id)}>
                                    <Ionicons name="ios-trash" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18
    }
});

export default HomeScreen;