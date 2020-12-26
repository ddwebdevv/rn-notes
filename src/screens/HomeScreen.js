import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteNotePost } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return { notes: state.notes };
};

const mapDispatchToProps = {
    deleteNotePost: (id) => deleteNotePost(id)
}

const HomeScreen = ({ navigation, notes, deleteNotePost }) => {
    
    return(
        <View>
            <FlatList
                data={notes}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

