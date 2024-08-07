import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.sectionTitle}>Ingredients:</Text>
            {recipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.text}>{ingredient}</Text>
            ))}
            <Text style={styles.sectionTitle}>Instructions:</Text>
            <Text style={styles.text}>{recipe.instructions}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default RecipeDetailScreen;