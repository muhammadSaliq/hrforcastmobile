import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon library
import { useNavigation } from '@react-navigation/native';

const Departments = () => {
    const navigation = useNavigation();

  // Sample employee data
  const employees = [
    { name: "Hr Department", jobRole: "shaukat", department: "abc@2gmail.com" },
    { name: "Graphics", jobRole: "shaukat", department: "abc@gmail.com" },
    // Add more employee data as needed
  ];

  const handleViewEmployee = (employee) => {
    // Handle the action when the "View" button is pressed
    navigation.navigate('Employeemanage');
    console.log("Employeemanage", employee);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Departments</Text>
      </View>
      {/* Employee Cards */}
      <View style={styles.cardsContainer}>
        {employees.map((employee, index) => (
          <View key={index} style={styles.card}>
            {/* Employee Name */}
            <Text style={styles.name}>{employee.name}</Text>
            {/* Job Role */}
            <Text style={styles.jobRole}>Shaukat</Text>
            {/* Divider Line */}
            <View style={styles.divider}></View>
            {/* Employee Details */}
            <Text> {employee.department}</Text>
            
            <TouchableOpacity style={styles.viewButton} onPress={() => handleViewEmployee(employee)}>
              <Text style={styles.buttonText}>
                <FontAwesome name="user" size={20} color="black" style={styles.icon} /> View
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 20,
  },
  cardsContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#f0f0f0', // Different shade of white
    borderWidth: 2,
    borderColor: '#FF5733',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobRole: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  viewButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default Departments;