import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';



const RecipeInputForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipeProcess, setRecipeProcess] = useState('');

  // Placeholder image URL
  const placeholderImage = 'https://via.placeholder.com/150';

  const handleSubmit = async () => {
    try {
      if (!recipeName || !ingredients || !recipeProcess) {
        alert('Please fill in all fields.');
        return;
      }

      const recipesRef = firebase.firestore().collection('recipes');

      await recipesRef.add({
        recipeName,
        ingredients,
        recipeProcess,
        
      });

      setRecipeName('');
      setIngredients('');
      setRecipeProcess('');

      alert('Recipe submitted successfully!');
    } catch (error) {
      console.error('Error submitting recipe:', error);
      alert('An error occurred while submitting the recipe.');
    }
  };

  return (
   
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollView}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.title}>Create Your Recipe</Text>
        <Text style={styles.subtitle}>Share your delicious recipe with the world</Text>
        <Image source={{ uri: placeholderImage }} style={styles.recipeImage} />

        <Text style={styles.label}>Recipe Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Recipe Name"
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
        />

        <Text style={styles.label}>Ingredients</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ingredients"
          multiline
          numberOfLines={4}
          value={ingredients}
          onChangeText={(text) => setIngredients(text)}
        />

        <Text style={styles.label}>Recipe Process</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Recipe Process"
          multiline
          numberOfLines={6}
          value={recipeProcess}
          onChangeText={(text) => setRecipeProcess(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingBottom: RFValue(100), // Add padding to accommodate the tab bar
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RecipeInputForm;
