import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CardButton = ({ onPress, title, style = {}, textStyle = {} }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#aacbf0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        height: 250,
        width: "auto",
    },
    buttonText: {
        color: '#000',
        fontSize: 30,
    },
    buttonHover: {
        backgroundColor: '#88A9D2',
    },
});

export default CardButton;