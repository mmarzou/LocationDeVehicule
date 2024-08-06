import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MainButton from '../Buttons/MainButton'; // Import MainButton directly

const CreateRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [categories, setCategory] = useState('');

    const handleCreateRecipe = () => {
        console.log('Create Recipe button pressed');
        console.log(`\n Recipe Name : ${recipeName}\n Ingredients : ${ingredients}\n Directions : ${directions}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Recipe</Text>
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={categories}
                onChangeText={setCategory}
            />
            <TextInput
                style={styles.input}
                placeholder="Recipe Name"
                value={recipeName}
                onChangeText={setRecipeName}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Directions"
                value={directions}
                onChangeText={setDirections}
            />
            <MainButton title="Create Recipe" onPress={handleCreateRecipe} />
            <MainButton title="Cancel" onPress={() => console.log('Cancel button pressed')} style={{ backgroundColor: '#dc3545' }} />
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
        fontWeight: 'bold',
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
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default CreateRecipe;