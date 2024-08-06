import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Recipe from '../components/Recipe/BrowseRecipe';
import Loader from '../components/Loader/Loader';

const RecipeScreen = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
        console.log(`Loading screen loaded.`);
    }, []);

    return (
        <View style={styles.container}>
            {loader ? <Loader /> : <Recipe />}
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

export default RecipeScreen;