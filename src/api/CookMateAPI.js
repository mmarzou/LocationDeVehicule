// src/api/CookMateAPI.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Recipe API functions
export const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_URL}/recipes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};
// Create Recipes API functions
export const createRecipe = async (recipe) => {
    try {
        const response = await axios.post(API_URL, recipe, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating recipe:', error);
        throw error;
    }
};

