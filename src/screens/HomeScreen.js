import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as NotesContext } from '../context/NotesContext';
// import { Context as ImageContext } from '../context/ImageContext';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
    const { state, deleteNotePost} = useContext(NotesContext);
    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={(note) => note.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteNotePost(item.id)}>
                                    <Ionicons name="ios-trash" size={33} color="#555" style={{ marginRight: 10 }}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Ionicons name="ios-add-circle-outline" size={35} color="#555" style={{ marginRight: 20 }}/>
          </TouchableOpacity>
        ),
      };
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

