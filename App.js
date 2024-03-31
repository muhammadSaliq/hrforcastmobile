import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './screens/Home';
import { View, Text } from 'react-native'
import LoginPage from './screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import Employee from './screens/Emloyee';
import EmployeeDetails from './screens/Empployeedetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginPage}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        <Stack.Screen name="Employees" component={Employee} />
        <Stack.Screen name="Employeedetails" component={EmployeeDetails} />

      </Stack.Navigator>
    </NavigationContainer>



  );
}


