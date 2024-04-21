import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import Header from '../components/Header'; // Assuming Header.js is in the same directory as EmployeeDetails.js
import { useNavigation } from '@react-navigation/native';
const Employeemanage = () => {
    const navigation = useNavigation();

  // Sample employee data (dummy data)
  const employeeData = {
    "General Information": {
      "Vacation Leaves": 5,
      "Sick Leaves": 1,
      "Personal Leaves": 6,
      "Late Arrivals": 0,
      "Sick Leaves": 0,
    },

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      

      {/* Space at the top */}
      <View style={styles.space}></View>

      {/* General Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Leaves Information</Text>
        {Object.entries(employeeData["General Information"]).map(([field, value], index) => (
          <View key={field} style={styles.fieldContainer}>
            <Text style={styles.fieldName}>{field}</Text>
            <Text style={styles.fieldValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/* Additional Information */}


      {/* Button to navigate back to all employees */}
      <View style={styles.buttonContainer}>
        <Button title="GET BACK TO ALL EMPLOYEES" onPress={() => {    navigation.navigate('Employees');}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  space: {
    height: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 5,
  },
  fieldName: {
    fontWeight: 'bold',
  },
  fieldValue: {},
  buttonContainer: {
    marginTop: 20,
  },
});

export default Employeemanage;