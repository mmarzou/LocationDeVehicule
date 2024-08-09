import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MainButton } from '../components/index'

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Recipes..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
      />
      <ImageBackground source={require("../../assets/header.jpg")} style={styles.imageBackground}
        resizeMode='cover'
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to CookMate</Text>
          <Text style={styles.subtitle}>
            Your favorite cooking app. Discover new recipes and share your own.
          </Text>
        </View>
      </ImageBackground>
      <MainButton title="Login" onPress={() => navigation.navigate('Login')} />
      <MainButton title="Browse Recipes" onPress={() => navigation.navigate('Browse Recipe')} style={{ backgroundColor: '#28a745' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 100,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '100%',
    padding: 0,
  },
  searchInputContainer: {
    backgroundColor: '#fff',
  },
});