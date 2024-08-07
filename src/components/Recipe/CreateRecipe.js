// src/screens/CreateRecipe.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createRecipe } from '../../api/CookMateAPI';

export default function CreateRecipeScreen() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');

    const handleCreateRecipe = async () => {
        try {
            const newRecipe = {
                name: recipeName,
                ingredients: ingredients.split(','),
                instructions: directions.split('.'),
            };
            await createRecipe(newRecipe);
            Alert.alert('Success', 'Recipe created successfully!');
        } catch (error) {
            Alert.alert('Error', 'An error occurred while creating the recipe.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Recipe</Text>
            <TextInput
                style={styles.input}
                placeholder="Recipe Name"
                value={recipeName}
                onChangeText={setRecipeName}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Directions (period separated)"
                value={directions}
                onChangeText={setDirections}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateRecipe}>
                <Text style={styles.buttonText}>Create Recipe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
};