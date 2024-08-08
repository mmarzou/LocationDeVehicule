import React from 'react';
import { View, StyleSheet } from 'react-native';
import CreateRecipe from '../components/Recipe/CreateRecipe';

export default function CreateRecipeScreen() {
    return (
        <View style={styles.container}>
            <CreateRecipe />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});