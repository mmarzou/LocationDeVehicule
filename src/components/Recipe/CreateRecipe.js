import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { createRecipe } from '../../api/CookMateAPI';

export default function CreateRecipeScreen() {
    const [recipeTitle, setRecipeTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [description, setDescription] = useState('');
    const [releaseYear, setReleaseYear] = useState('');

    const handleCreateRecipe = async () => {
        const recipeData = {
            title: recipeTitle,
            ingredients: ingredients.split(',').map(item => item.trim()),
            description: description,
            steps: steps.split('.').map(item => item.trim()),
            releaseYear: parseInt(releaseYear, 10)
        };

        try {
            const response = await createRecipe(recipeData);
            Alert.alert('Success', 'Recipe created successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to create recipe');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Recipe</Text>
            <TextInput
                style={styles.input}
                placeholder="Recipe Name"
                value={recipeTitle}
                onChangeText={setRecipeTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Steps (period separated)"
                value={steps}
                onChangeText={setSteps}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Release Year"
                value={releaseYear}
                onChangeText={setReleaseYear}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateRecipe}>
                <Text style={styles.buttonText}>Create Recipe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});