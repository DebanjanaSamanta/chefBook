import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

import {firestore} from './config';
import { QuerySnapshot } from 'firebase/firestore';


export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes: [], //Initialising an empty array to store recipes
    };
  }
  
  componentDidMount() {
    //Fetching data from the firestore when the component mounts
    firestore.collection('recipes').get().then((QuerySnapshot) => {
      const recipes = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data();
        recipes.push(data);
      });
      //Updating the state with the fetched recipes
      this.setState({recipes});
    })
  }
  
    handleRecipePress = (recipe) => {
    // Navigate to RecipeDetail screen and pass the selected recipe as a parameter
    this.props.navigation.navigate('Read', { recipe });
  };
  
  renderRecipeCard = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity  onPress={() => this.handleRecipePress(item)}>
      <ImageBackground source={item.imageUrl} style={styles.cardImage}>
        <View style={styles.cardOverlay}>
          <Text style={styles.recipeName}>{item.recipeName}</Text>
          <Text style={styles.creator}>By {item.creator}</Text>
          <View style={styles.likesContainer}>
            <FontAwesome name="heart" size={20} color="#FF6347" />
            <Text style={styles.likesCount}>{item.likes}</Text>
            <FontAwesome name="bookmark" size={20} color="white" />
          </View>
    
        </View>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.heading}>Explore</Text>
        <Text style={styles.subheader}>
          Discover some recipe from the list for today
        </Text>
        <FlatList
          data={this.state.recipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={this.renderRecipeCard}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },

  subheader: {
    color: 'white',
    fontSize: 22,
    marginBottom:10,
  },

  card: {
    width: 280,
    height: 400, // Adjust card height as needed
    marginTop: 15,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
    justifyContent: 'flex-end',
  },
  recipeName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  creator: {
    fontSize: 20,
    color: 'white',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  likesCount: {
    fontSize: 18,
    marginRight: 4,
    color: 'white',
  },
 
});
