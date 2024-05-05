import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import Header from '../components/Header'; // Assuming Header.js is in the same directory as EmployeeDetails.js
import { useNavigation , useRoute} from '@react-navigation/native';
import axios from 'axios';

const EmployeeDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [allemployees, setallemployees] = useState([]);


    const getAllemployee = async () => {
      try {
        const response = await axios.get(`http://192.168.100.7:8000/employeedetails/${id}`);
        console.log("response: ", response);
        console.log(allemployees);
        setallemployees(response.data.data);
      } catch (error) {
        console.log("error in getting all Departments", error);
      }
    };

// run the function on render
  useEffect(() => {
      console.log('asdasd')
      getAllemployee()
      // return () => {
      //   console.log('Cleanup Function');
      //  }
  }, [ ])

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
      <Text style={styles.fieldValuemain}>{allemployees.emloyeename}</Text>


      {/* Space at the top */}
      <View style={styles.space}></View>

      {/* General Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>General Information </Text>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Department</Text>
            <Text style={styles.fieldValue}>{allemployees.Department}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Age</Text>
            <Text style={styles.fieldValue}>{allemployees.Age}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Gender</Text>
            <Text style={styles.fieldValue}>{allemployees.Gender}</Text>
          </View>
        
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Leaves Information</Text>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Vacation Leaves</Text>
            <Text style={styles.fieldValue}>{allemployees.personalleave}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Sick Leave</Text>
            <Text style={styles.fieldValue}>{allemployees.sickleave}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Personal Leave</Text>
            <Text style={styles.fieldValue}>{allemployees.personalleave}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Arrival Information</Text>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Late Arrivals</Text>
            <Text style={styles.fieldValue}>{allemployees.latearrivals}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>OverTime</Text>
            <Text style={styles.fieldValue}>{allemployees.lateleaving}</Text>
          </View>

        </View>


      {/* Additional Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Business Travel</Text>
            <Text style={styles.fieldValue}>{allemployees.BusinessTravel}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Daily Rate</Text>
            <Text style={styles.fieldValue}>{allemployees.DailyRate}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Distance From Home</Text>
            <Text style={styles.fieldValue}>{allemployees.DistanceFromHome}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Education</Text>
            <Text style={styles.fieldValue}>{allemployees.Education}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Education Field</Text>
            <Text style={styles.fieldValue}>{allemployees.EducationField}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Employee Number</Text>
            <Text style={styles.fieldValue}>{allemployees.EmployeeNumber}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Environment Satisfaction</Text>
            <Text style={styles.fieldValue}>{allemployees.EnvironmentSatisfaction}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Hourly Rate</Text>
            <Text style={styles.fieldValue}>{allemployees.HourlyRate}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Job Involvement</Text>
            <Text style={styles.fieldValue}>{allemployees.JobInvolvement}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Job Level</Text>
            <Text style={styles.fieldValue}>{allemployees.JobLevel}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Job Role</Text>
            <Text style={styles.fieldValue}>{allemployees.JobRole}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Job Satisfaction</Text>
            <Text style={styles.fieldValue}>{allemployees.JobSatisfaction}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Marital Status</Text>
            <Text style={styles.fieldValue}>{allemployees.MaritalStatus}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Monthly Income</Text>
            <Text style={styles.fieldValue}>{allemployees.MonthlyIncome}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Monthly Rate</Text>
            <Text style={styles.fieldValue}>{allemployees.MonthlyRate}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>No. of Companies Worked</Text>
            <Text style={styles.fieldValue}>{allemployees.NumCompaniesWorked}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Over 18</Text>
            <Text style={styles.fieldValue}>{allemployees.Over18}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Over Time</Text>
            <Text style={styles.fieldValue}>{allemployees.OverTime}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Percent Salary Hike</Text>
            <Text style={styles.fieldValue}>{allemployees.PercentSalaryHike}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Performance Rating</Text>
            <Text style={styles.fieldValue}>{allemployees.PerformanceRating}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Relationship Satisfaction</Text>
            <Text style={styles.fieldValue}>{allemployees.RelationshipSatisfaction}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Standard Hours</Text>
            <Text style={styles.fieldValue}>{allemployees.StandardHours}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Stock Option Level</Text>
            <Text style={styles.fieldValue}>{allemployees.StockOptionLevel}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Total Working Years</Text>
            <Text style={styles.fieldValue}>{allemployees.TotalWorkingYears}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Training Times Last Year</Text>
            <Text style={styles.fieldValue}>{allemployees.TrainingTimesLastYear}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Work Life Balance</Text>
            <Text style={styles.fieldValue}>{allemployees.WorkLifeBalance}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Years At Company</Text>
            <Text style={styles.fieldValue}>{allemployees.YearsAtCompany}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Years In Current Role</Text>
            <Text style={styles.fieldValue}>{allemployees.YearsInCurrentRole}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Years Since Last Promotion</Text>
            <Text style={styles.fieldValue}>{allemployees.YearsSinceLastPromotion}</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>Years With Current Manager</Text>
            <Text style={styles.fieldValue}>{allemployees.YearsWithCurrManager}</Text>
          </View>
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
  fieldValuemain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default EmployeeDetails;
