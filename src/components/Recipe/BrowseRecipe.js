import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CardButton from '../Buttons/CardButton';

const BrowseRecipe = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Browse Recipes</Text>
            <View style={styles.categories}>
                <CardButton title="Breakfast" icon="breakfast" />
                <CardButton title="Lunch" />
                <CardButton title="Dinner" />
                <CardButton title="Template" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Styles for BrowseRecipe component
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
});

export default BrowseRecipe;