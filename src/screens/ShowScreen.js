import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { notes: state.notes };
};

const ShowScreen = ({ navigation, notes }) => {

    const note = notes.find((note) => note.id === navigation.getParam('id'));
    return(
        <View>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
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

export default connect(mapStateToProps)(ShowScreen);

