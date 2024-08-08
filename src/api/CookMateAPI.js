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

export const createRecipe = async (recipe) => {
    try {
        const response = await axios.post(`${API_URL}/recipes`, recipe);
        return response.data;
    } catch (error) {
        console.error('Error creating recipe:', error);
        throw error;
    }
};

// You can add more API functions here for other entities like users, ingredients, etc.