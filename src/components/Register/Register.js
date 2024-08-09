import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegistration = () => {
        // Handle registration logic here
        console.log('Register button pressed');
        console.log(`\n Username : ${username}\n Email : ${email}\n Password : ${password}\n Confirm Password : ${confirm_password}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirm_password}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            {/* Already have an account ? Login */}
            <Text style={styles.registerText}>
                Already have an account?
                <Text style={styles.loginLink} onPress={() => console.log('Redirect to register page')}> Register
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#D4A15D',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 10,
    },
    loginLink: {
        color: '#D4A15D',
    },
});

export default Register;