import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, style = {}, textStyle = {} }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#D4A15D',
        borderRadius: 5,
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomButton;