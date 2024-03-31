import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import Header from '../components/Header'; // Assuming Header.js is in the same directory as EmployeeDetails.js
import { useNavigation } from '@react-navigation/native';
const EmployeeDetails = () => {
    const navigation = useNavigation();

  // Sample employee data (dummy data)
  const employeeData = {
    "General Information": {
      "Department": "HR",
      "Age": 30,
      "Gender": "Male"
    },
    "Additional Information": {
      "Business Travel": "Frequently",
      "Daily Rate": 500,
      "Distance From Home": 10,
      "Education": "Bachelor's",
      "Education Field": "Human Resources",
      "Employee Count": 500,
      "Employee Number": "EMP001",
      "Environment Satisfaction": 4,
      "Hourly Rate $": 25,
      "Job Involvement": 3,
      "Job Level": 2,
      "Job Role": "HR Manager",
      "Job Satisfaction": 4,
      "Marital Status": "Single",
      "Monthly Income $": 6000,
      "Monthly Rate $": 6000,
      "No of Companies worked": 1,
      "Over 18": true,
      "Over Time": "Yes",
      "Salary Hike %": 10,
      "Performance Rating": 4,
      "Relationship Satisfaction": 3,
      "Standard Hours": 8,
      "Stock Option Level": 1,
      "Total Working Years": 8,
      "Training times Last Year": 2,
      "Work Life Balance": 3,
      "Years at Company": 5,
      "Years In Current Role": 3,
      "Years Since Last Promotion": 1,
      "Years With Current Manager": 2
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Header />

      {/* Space at the top */}
      <View style={styles.space}></View>

      {/* General Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>General Information</Text>
        {Object.entries(employeeData["General Information"]).map(([field, value], index) => (
          <View key={field} style={styles.fieldContainer}>
            <Text style={styles.fieldName}>{field}</Text>
            <Text style={styles.fieldValue}>{value}</Text>
          </View>
        ))}
      </View>

      {/* Additional Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        {Object.entries(employeeData["Additional Information"]).map(([field, value], index) => (
          <View key={field} style={styles.fieldContainer}>
            <Text style={styles.fieldName}>{field}</Text>
            <Text style={styles.fieldValue}>{value}</Text>
          </View>
        ))}
      </View>

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

export default EmployeeDetails;