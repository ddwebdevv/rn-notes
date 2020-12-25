import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';

const ShowScreen = ({ navigation }) => {
    // navigation.getParam('id');
    const { state } = useContext(Context);

    const notePost = state.find((notePost) => notePost.id === navigation.getParam('id'));
    return(
        <View>
            <Text>{notePost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;

// return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
//         <EvilIcons name="pencil" size={35} />
//       </TouchableOpacity>
//     ),
//   };