import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";



export default class RecipeDetail extends React.Component {
  render() {

    //To get the recipe data passed as a parameter
    const {route} = this.props;
    const {recipe} = route.params;

    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.recipeName}>{recipe.recipeName}</Text>
        <Image source={recipe.imageUrl} style={styles.recipeImage} />
        <View style={styles.recipeInfo}>
          <Text style={styles.creator}>By {recipe.username}</Text>
          <View style={styles.likesContainer}>
            <Text style={styles.likesCount}>{recipe.likes} Likes</Text>
            <TouchableOpacity style={styles.likeButton}>
              {/* Add your like button icon */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkButton}>
              {/* Add your bookmark button icon */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.recipeProcess.map((step, index) => (
            <Text key={index} style={styles.instruction}>
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </View>
        <TouchableOpacity style={styles.backButton}
        onPress={() => this.props.navigation.navigate('Explore')}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  recipeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  recipeInfo: {
    padding: 16,
  },
  recipeName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  creator: {
    fontSize: 24,
    color: '#888',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  likesCount: {
    fontSize: 20,
    marginRight: 4,
    color: 'white',
  },
  likeButton: {
    // Add styles for like button if needed
  },
  bookmarkButton: {
    // Add styles for bookmark button if needed
  },
  descriptionContainer: {
    padding: 16,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  sectionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  ingredient: {
    fontSize: 16,
    color: 'white',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  backButton: {
    backgroundColor: '#0AC48C',
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    margin: 16,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
