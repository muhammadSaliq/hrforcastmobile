import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate loading for demonstration
    setLoading(true);
    // Replace the setTimeout with your actual login logic
    setTimeout(() => {
      console.log('Email:', email);
      console.log('Password:', password);
      // Perform your login logic here
      // Once login is successful or failed, set loading to false
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  };
  const LoginForm = async () => {
    console.log("em",email)
    console.log("ppass",password)

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!email || !password) {
      console.log('Value is not Given');
      alert("please enter your email and password")
      return
    }
    // https://glorious-hat-bat.cyclic.app      // old url
    if (email && password) {
     // setLoading(true);
     setLoading(true);
      try {
        let response = await axios.post(`http://192.168.100.7:8000/login`, {
          email: email,
          password: password
        }, {
          withCredentials: true
        })
        //Alert.alert("asaa",JSON.stringify(response))
        if (response.status == 200) {
          console.log("login successful", response.status);
          alert("successfully loggedIn")
          navigation.navigate('Dashboard');
          setLoading(false);
        }
        else {
          setLoading(false);
          console.log("login faileds",response.status)

        }
//        setSuccessMessage('You have successfully logged in');
  //      setShowSuccessAlert(true);

          
         // navigate('/dashboard', { replace: true })
         //navigation.navigate('Dashboard');
    
      } catch (error) {
        setLoading(false);
        console.log(error)
        console.log("login failed")
    //    setErrorMessage('Email or Password is incorrect'); 
      //  setShowErrorAlert(true);
      }
    //  finally{
   //     setLoading(false);
     // }
    }
  };
  return (
    <View style={styles.container}>
      {/* Colored View*/ }
      <View style={styles.coloredView}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Please sign in to your existing account</Text>
      </View>
      
      {/* White View */}
      <View style={styles.whiteView}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeading}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeading}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*************"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Hide or show password based on showPassword state
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.togglePassword}>{showPassword ? 'Hide' : 'Show'} Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={LoginForm}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container occupies the full screen
    flexDirection: 'column',
  },
  coloredView: {
    height: windowHeight / 2 - 100, // Adjusted height to reduce more from the bottom
    backgroundColor: '#FF5733', // Dark orange color
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50, // Round border radius for the top left corner
    borderTopRightRadius: 50, // Round border radius for the top right corner
    overflow: 'hidden', // Ensure the rounded borders are visible
    paddingHorizontal: 20,
    marginTop: -20, // Move the whiteView up by reducing the marginTop
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
  },
  fieldContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left side
    marginTop: 20,
    width: '80%', // Limit width to 80% to align with text inputs
  },
  fieldHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Adjust the color as needed
    marginBottom: 5,
    marginLeft: 5, // Adjust margin to align with text inputs
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FF5733', // Orange color
    width: '80%', // Match the width of text inputs
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20, // Add some margin to separate from text inputs
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  togglePassword: {
    color: '#333',
    marginTop: 5,
  },
});

export default LoginPage;
