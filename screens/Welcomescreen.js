import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Welcomescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../assets/Wsimg.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>ChefBook</Text>
          <Text style={styles.subtitle}>Welcome to ChefBook. Here you can discover delicious recipes and more!</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    width: '100%',
    height: '60%', 
    
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', 
    textAlign: 'center',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#FF6347',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
