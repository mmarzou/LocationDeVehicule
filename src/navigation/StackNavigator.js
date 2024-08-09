import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Recipes" component={RecipeScreen} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;