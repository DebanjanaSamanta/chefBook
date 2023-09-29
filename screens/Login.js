import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
      userSignedIn: false,

    }
  }

  signIn = async (email, password) => {
    firebase
    .auth()
    .signInWithEmialAndPassword(email, password)
    .then(() => {
      this.props.navigation.replace("Explore");
    })
    .catch(error => {
      Alert.alert(error.message);
    });
  };
  
  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Text style={styles.header}>Welcome Back!</Text>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheader}>Login below or</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.naviagtion.navigate('SignUp')}
          >
            <Text style={styles.signupText}>create account</Text>
          </TouchableOpacity>
        </View>

      
        
      
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton}
         onPress={() => this.signIn(email,password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  subheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  subheader: {
    color: 'white',
    fontSize: 25,
  },
  signupButton: {
    marginLeft: 10,
  },
  signupText: {
    color: 'white',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#FF6347',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
