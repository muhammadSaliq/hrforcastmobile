import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF8C00" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <Text style={styles.headerText}>Department</Text>
        <Text style={styles.headerText}>Employees</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF5733',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15, // Increased vertical padding
    paddingHorizontal: 20, // Increased horizontal padding
    borderBottomWidth: 2,
    borderBottomColor: '#FF5733',
  },
  headerText: {
    fontSize: 18, // Decreased font size
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase', // Converted text to uppercase
  },
});

export default Header;