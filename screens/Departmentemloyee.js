import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon library
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const Departmentemployee = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { department } = route.params;
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);

  // Sample employee data
  const employees = [
    { name: "Uzair Ahmed", jobRole: "Sales Executive", department: "HR", age: 30, gender: "Male", workingHours: 40, yearsInCompany: 5 },
    { name: "Usman", jobRole: "Sales Executive", department: "Marketing", age: 28, gender: "Female", workingHours: 35, yearsInCompany: 3 },
    // Add more employee data as needed
  ];

  const getAllemployee = async () => {
    try {
      const response = await axios.get(`http://192.168.100.7:8000/deaprtmentemployee/${department}`);
      console.log("response: ", response);
      console.log(allemployees);
      setallemployees(response.data.data);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };


  const handleViewEmployee = () => {
    // Handle the action when the "View" button is pressed
    navigation.navigate('Employeedetails');
  };
  const handleNavigate = (ids) => {
    navigation.navigate('Employeedetails', { id: ids });
  };
  useEffect(() => {
    console.log('asdasd')
    getAllemployee()
    setemployeeBoolean(false)

}, [ employeeBoolean])
  return (
    <SafeAreaView style={styles.container}>
            <ScrollView>  
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Employees</Text>
      </View>
      {/* Employee Cards */}
    
      <View style={styles.cardsContainer}>
      {allemployees.map((value, index) => ( 
                  <View key={index} style={styles.card}>
                  {/* Employee Name */}
                  <Text style={styles.name}>{value.emloyeename}</Text>
                  {/* Job Role */}
                  <Text style={styles.jobRole}>{value.JobRole}</Text>
                  {/* Divider Line */}
                  <View style={styles.divider}></View>
                  {/* Employee Details */}
                  <Text>Department: {value.Department}</Text>
                  <Text>Age: {value.Age}</Text>
                  <Text>Gender: {value.Gender}</Text>
                  <Text>Working Hours: {value.StandardHours}</Text>
                  <Text>Years in Company: {value.YearsAtCompany}</Text>
                  {/* View Button */}
                  <TouchableOpacity style={styles.viewButton} onPress={() => handleNavigate(value._id)}>
                    <Text style={styles.buttonText}>
                      <FontAwesome name="user" size={20} color="black" style={styles.icon} /> View
                    </Text>
                  </TouchableOpacity>
                </View>
                
        ))}


      </View>
      </ScrollView>
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

export default Departmentemployee;