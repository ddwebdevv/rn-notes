import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '' 
        }
    }

    componentDidMount() {
        const { initTitle, initContent } = this.props.initValues;
        this.setState({ title: initTitle });
        this.setState({ content: initContent });
    }

    render() {
        const { labelTitle, labelContent, buttonTitle } = this.props.initValues;
        const { title, content } = this.state;
        return(
            <View>
                <Text style={styles.label}>{labelTitle}</Text>
                <TextInput  
                    value={title}
                    onChangeText={(text) => this.setState({ title: text })}
                    style={styles.input}
                />
                <Text style={styles.label}>{labelContent}</Text>
                <TextInput
                    value={content}
                    onChangeText={(text) => this.setState({ content: text })}
                    style={styles.input}
                    multiline
                    textAlignVertical={'top'}
                    numberOfLines={5}                
                />
                <Button 
                    title={buttonTitle}
                    onPress={() => this.props.onSubmit(title, content)}
                />
            </View>
        );
    }
};

NoteForm.defaultProps = {     
    initValues: {
        initTitle: '',
        initContent: '',
        labelTitle: 'Enter Title:',
        labelContent: 'Enter Content:',
        buttonTitle: 'Add Note'
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