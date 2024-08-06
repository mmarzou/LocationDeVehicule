import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import CreateRecipeScreen from '../screens/CreateRecipeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import BrowseRecipe from '../components/Recipe/BrowseRecipe';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="home-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                        // headerStyle: {
                        //     backgroundColor: '#EA9F3C',
                        // },
                    }}
                />
                <Drawer.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="log-in-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="person-add-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="User"
                    component={UserScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="person-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="CreateUser"
                    component={CreateUserScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="person-add-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Browse Recipe"
                    component={BrowseRecipe}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="person-add-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Create Recipes"
                    component={CreateRecipeScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Icon name="person-add-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;