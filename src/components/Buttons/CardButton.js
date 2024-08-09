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
        backgroundColor: '#D4A15D',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        height: "auto",
        width: 300,
    },
    buttonText: {
        color: '#000',
        fontSize: 28,
    },
    buttonHover: {
        backgroundColor: '#D6933C',
    },
});

export default CardButton;