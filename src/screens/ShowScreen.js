import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ShowScreen = ({ navigation }) => {
    // navigation.getParam('id');
    const { state } = useContext(Context);

    const notePost = state.find((notePost) => notePost.id === navigation.getParam('id'));
    return(
        <View>
            <Text style={styles.title}>{notePost.title}</Text>
            <Text style={styles.content}>{notePost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => 
                navigation.navigate('Edit', { id: navigation.getParam('id')})
            }>
            <MaterialCommunityIcons name="lead-pencil" size={33} color="#555" style={{ marginRight: 20 }}/>
          </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginVertical: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    content: {
        fontSize: 20,
        marginHorizontal: 15
    }
});

export default ShowScreen;

