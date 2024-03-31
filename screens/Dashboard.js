import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleDepartments = () => {
    navigation.navigate('Departments');
  };

  const handleEmployees = () => {
    navigation.navigate('Employees');
  };

  return (
    <View style={styles.container}>
      {/* Colored View */}
      <ImageBackground source={require('../assets/gradient.png')} style={styles.coloredView} resizeMode="cover">
        <View style={styles.iconContainer}>
          <Image source={require('../assets/new.png')} style={styles.icon} />
          <Text style={styles.title}>Home Page</Text>
        </View>
      </ImageBackground>
      
      {/* White View */}
      <ImageBackground source={require('../assets/white_background.png')} style={styles.whiteView}>
        <TouchableOpacity style={styles.button} onPress={handleDepartments}>
          <Image source={require('../assets/department.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            Departments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmployees}>
          <Image source={require('../assets/employee.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>
            Employees
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5F15', // Dark orange color
  },
  coloredView: {
    height: windowHeight / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  whiteView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    backgroundColor: '#FF8C00', // Orange color
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFD700', // Yellow color
    width: 180,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});

export default Dashboard;
