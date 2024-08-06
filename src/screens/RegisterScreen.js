import React from 'react';
import { View, StyleSheet } from 'react-native';
import Register from '../components/Register/Register';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Register />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});

export default RegisterScreen;