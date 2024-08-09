import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import recipes from '../Recipe/recipes.json';

const BrowseRecipe = () => {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [recipeList, setRecipeList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const category = recipes.categories.find(cat => cat.name === selectedCategory);
        setRecipeList(category ? category.recipes : []);
    }, [selectedCategory]);

    const renderRecipe = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
            <View style={styles.recipeCard}>
                <Image source={{ uri: item.image }} style={styles.recipeImage} />
                <Text style={styles.recipeName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderCategory = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedCategory(item.name)}>
            <Text style={[styles.category, item.name === selectedCategory && styles.selectedCategory]}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Browse Recipes</Text>
            <FlatList
                data={recipes.categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryList}
            />
            <FlatList
                data={recipeList}
                renderItem={renderRecipe}
                keyExtractor={(item) => item.name}
            />
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
    categoryList: {
        marginBottom: 20,
    },
    category: {
        fontSize: 18,
        marginRight: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    selectedCategory: {
        backgroundColor: '#d0d0d0',
    },
    recipeCard: {
        marginBottom: 20,
    },
    recipeImage: {
        width: '100%',
        height: 200,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default BrowseRecipe;