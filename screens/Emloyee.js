import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon library
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

const Employee = () => {
    const navigation = useNavigation();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [results, setResults] = useState([]);
const [resultbool, setresultbool] = useState(false);
const [showbool, setshowbool] = useState(false);
const [alldepartmentss, setalldepartmentss] = useState([]);


const [emloyeename, setemloyeename] = useState("");
    const [age, setAge] = useState("");
    const [attrition, setAttrition] = useState("");
    const [businessTravel, setBusinessTravel] = useState("");
    const [dailyRate, setDailyRate] = useState("");
    const [department, setDepartment] = useState("");
    const [distanceFromHome, setDistanceFromHome] = useState("");
    const [education, setEducation] = useState("");
    const [educationField, setEducationField] = useState("");
    const [employeeCount, setEmployeeCount] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [environmentSatisfaction, setEnvironmentSatisfaction] = useState("");
    const [gender, setGender] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [jobInvolvement, setJobInvolvement] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [jobSatisfaction, setJobSatisfaction] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [monthlyRate, setMonthlyRate] = useState("");
    const [numCompaniesWorked, setNumCompaniesWorked] = useState("");
    const [over18, setOver18] = useState("");
    const [overTime, setOverTime] = useState("");
    const [percentSalaryHike, setPercentSalaryHike] = useState("");
    const [performanceRating, setPerformanceRating] = useState("");
    const [relationshipSatisfaction, setRelationshipSatisfaction] = useState("");
    const [standardHours, setStandardHours] = useState("");
    const [stockOptionLevel, setStockOptionLevel] = useState("");
    const [totalWorkingYears, setTotalWorkingYears] = useState("");
    const [trainingTimesLastYear, setTrainingTimesLastYear] = useState("");
    const [workLifeBalance, setWorkLifeBalance] = useState("");
    const [yearsAtCompany, setYearsAtCompany] = useState("");
    const [yearsInCurrentRole, setYearsInCurrentRole] = useState("");
    const [yearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
    const [yearsWithCurrManager, setYearsWithCurrManager] = useState("");


        // Snackbar state variables
        const [openSnackbar, setOpenSnackbar] = useState(false);
        const [snackbarMessage, setSnackbarMessage] = useState('');
        const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    
        //emp add variable
        const [CreatedbyUser  , setCreatedbyUser] = useState("");
        
    //result
    const [resultattr , setresultattr] = useState();



    const [filters, setFilters] = useState({
        employeeID: '',
        age: '',
        department: '',
        position: '',
        gender: ''
    });

    const departments = ['Department 1', 'Department 2', 'Department 3']; // Dummy data for departments
    const positions = ['Sales Executive', 'Research Scientist', 'Laboratory Technician' , 'Manufacturing Director', 'Healthcare Representative', 'Manager', 'Sales Representative', 'Research Director', 'Human Resources' ]; // Dummy data for positions
    const genders = ['Male', 'Female']; // Dummy data for genders

    
  const getAlldepartments = async () => {
    try {
      const response = await axios.get(`http://192.168.100.7:8000/alldepartments`);
      setalldepartmentss(response.data.data);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };

  const attritionemloyee = async () => {

    try {
        console.log("inside try")
      const response = await axios.post('http://192.168.100.7:5000/Addemployee', { //send data to api
        Age: age,
        BusinessTravel: businessTravel,
        DailyRate: dailyRate,
        Department: department,
        DistanceFromHome: distanceFromHome,
        Education: education,
        EducationField: educationField,
        EmployeeNumber: employeeNumber,

        EnvironmentSatisfaction: environmentSatisfaction,
        Gender: gender,
        HourlyRate: hourlyRate,
        JobInvolvement: jobInvolvement,
        JobLevel: jobLevel,
        JobRole: jobRole,
        JobSatisfaction: jobSatisfaction,
        MaritalStatus: maritalStatus,
        MonthlyIncome: monthlyIncome,
        MonthlyRate: monthlyRate,
        NumCompaniesWorked: numCompaniesWorked,
        Over18: over18,
        OverTime: overTime,
        PercentSalaryHike: percentSalaryHike,
        PerformanceRating: performanceRating,
        RelationshipSatisfaction: relationshipSatisfaction,
        StandardHours: standardHours,
        StockOptionLevel: stockOptionLevel,
        TotalWorkingYears: totalWorkingYears,
        TrainingTimesLastYear: trainingTimesLastYear,
        WorkLifeBalance: workLifeBalance,
        YearsAtCompany: yearsAtCompany,
        YearsInCurrentRole: yearsInCurrentRole,
        YearsSinceLastPromotion: yearsSinceLastPromotion,
        YearsWithCurrManager:yearsWithCurrManager,

          
      });
console.log("add res",response.data.result) // result is showwn
setresultattr(response.data.result) //result is save

       if (response.status === 200) {
        console.log('Employee successfully registered');
       

        //navigation to negative or positive attrition page dependng on the result
        if (response.data.result == "Yes") {   
         // navigate('/NegativeAttrition')
         }
         if (response.data.result == "No") {
         // navigate('/PositiveAttrition')
    
         }
      } else {
        console.log('Employee failed');
        
      }
    } catch (error) {
      console.error(error);
      
    }
    }

    const performSearch = async () => {
     
    
    
    
      try {
        const response = await axios.get(
          `http://192.168.100.7:8000/api/searchlist?EmployeeNumber=${filters.employeeID}&Age=${filters.age}&JobRole=${filters.position}&Gender=${filters.gender}&Department=${filters.department}`
        );
        console.log("Search results: ", response.data);
        setResults(response.data);
        console.log("res", results);
        setresultbool(true);
        setshowbool(true);
      } catch (error) {
        console.log("Error in performing search: ", error);
      }
    };

    const getAllemployee = async () => {
        try {
            const response = await axios.get(`http://192.168.100.7:8000/allemployees`);
            //console.log("response: ", response);
            //console.log(allemployees);
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
    const handleNavigate2 = (ids) => {
      navigation.navigate('Employeedetails', { id: ids });
  };

    const handleApplyFilters = () => {
        setModalVisible(true);
    };

    const handleSearch = () => {
        // Perform search based on filters
        // You can implement the search logic here
    };

    const handleClearFilters = () => {
        setFilters({
            employeeID: '',
            age: '',
            department: '',
            position: '',
            gender: ''
        });
    };

    useEffect(() => {
        console.log('asdasd');
        getAllemployee();
        getAlldepartments();
        setemployeeBoolean(false);
    }, [employeeBoolean]);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const results = allemployees.filter((employee) =>
                employee.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, allemployees]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Employees</Text>
                </View>
                <TouchableOpacity style={styles.applyFiltersButton} onPress={handleApplyFilters}>
                    <Text style={styles.applyFiltersButtonText}>Apply Filters</Text>
                </TouchableOpacity>
                <View style={styles.cardsContainer}>

                {results.map((value, index) => (
                    
             <TouchableOpacity style={styles.fieldContainer} key={index}  onPress={() => handleNavigate2(value._id)}>
             <Text >{value.emloyeename}</Text>
             <View >
             <Text >Age: {value.Age}</Text>
             <Text >{value.Department}</Text>
             </View>
 
           </TouchableOpacity>
                    ))}

                  
                
                </View>
                <View style={styles.cardsContainer}>
                    {allemployees.map((value, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.name}>{value.emloyeename}</Text>
                            <Text style={styles.jobRole}>{value.JobRole}</Text>
                            <View style={styles.divider}></View>
                            <Text>Department: {value.Department}</Text>
                            <Text>Age: {value.Age}</Text>
                            <Text>Gender: {value.Gender}</Text>
                            <Text>Working Hours: {value.StandardHours}</Text>
                            <Text>Years in Company: {value.YearsAtCompany}</Text>
                            <TouchableOpacity style={styles.viewButton} onPress={() => handleNavigate(value._id)}>
                                <Text style={styles.buttonText}>
                                    <FontAwesome name="user" size={20} color="black" style={styles.icon} /> View
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.viewButton}
                            onPressIn={()=> {setAge(value.Age); setBusinessTravel(value.BusinessTravel); setDailyRate(value.DailyRate); setDepartment(value.Department); setDistanceFromHome(value.DistanceFromHome); setEducation(value.Education); setEducationField(value.EducationField); setEmployeeCount(value.EmployeeCount); setEmployeeNumber(value.EmployeeNumber); setEnvironmentSatisfaction(value.EnvironmentSatisfaction); setGender(value.Gender); setHourlyRate(value.HourlyRate); setJobInvolvement(value.JobInvolvement); setJobLevel(value.JobLevel); setJobRole(value.JobRole); setJobSatisfaction(value.JobSatisfaction); setMaritalStatus(value.MaritalStatus); setMonthlyIncome(value.MonthlyIncome); setMonthlyRate(value.MonthlyRate); setNumCompaniesWorked(value.NumCompaniesWorked); setOver18(value.Over18); setOverTime(value.OverTime); setPercentSalaryHike(value.PercentSalaryHike); setPerformanceRating(value.PerformanceRating); setRelationshipSatisfaction(value.RelationshipSatisfaction); setStandardHours(value.StandardHours); setStockOptionLevel(value.StockOptionLevel); setTotalWorkingYears(value.TotalWorkingYears); setTrainingTimesLastYear(value.TrainingTimesLastYear); setWorkLifeBalance(value.WorkLifeBalance); setYearsAtCompany(value.YearsAtCompany); setYearsInCurrentRole(value.YearsInCurrentRole); setYearsSinceLastPromotion(value.YearsSinceLastPromotion); setYearsWithCurrManager(value.YearsWithCurrManager); }}
                            onPress={() => attritionemloyee()}
                            >
                                <Text style={styles.buttonText}>
                                    <FontAwesome name="user" size={20} color="black" style={styles.icon} /> Predict
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Filters</Text>
                        <View style={styles.inputContainer}>
                            <Text>Employee ID:</Text>
                            <TextInput
                                style={styles.input}
                                value={filters.employeeID}
                                onChangeText={(text) => setFilters({ ...filters, employeeID: text })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Age:</Text>
                            <TextInput
                                style={styles.input}
                                value={filters.age}
                                onChangeText={(text) => setFilters({ ...filters, age: text })}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Department:</Text>
                            <Picker
                                selectedValue={filters.department}
                                style={styles.picker}
                                onValueChange={(itemValue) => setFilters({ ...filters, department: itemValue })}
                            >
                                <Picker.Item label="Select Department" value="" />
                                {alldepartmentss.map((values, index) => (
                                    <Picker.Item key={index} label={values.departmentname} value={values.departmentname} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Position:</Text>
                            <Picker
                                selectedValue={filters.position}
                                style={styles.picker}
                                onValueChange={(itemValue) => setFilters({ ...filters, position: itemValue })}
                            >
                                <Picker.Item label="Select Position" value="" />
                                {positions.map((position, index) => (
                                    <Picker.Item key={index} label={position} value={position} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Gender:</Text>
                            <Picker
                                selectedValue={filters.gender}
                                style={styles.picker}
                                onValueChange={(itemValue) => setFilters({ ...filters, gender: itemValue })}
                            >
                                <Picker.Item label="Select Gender" value="" />
                                {genders.map((gender, index) => (
                                    <Picker.Item key={index} label={gender} value={gender} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Search" onPress={performSearch} />
                            <Button title="Clear" onPress={handleClearFilters} />
                        </View>
                    </View>
                </View>
            </Modal>
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
    applyFiltersButton: {
        backgroundColor: '#FF5733',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    applyFiltersButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        backgroundColor: '#f0f0f0',
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
    fieldContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 5,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%', // Set the width to 80% of the screen width
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default Employee;
