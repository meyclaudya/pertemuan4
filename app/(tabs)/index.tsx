import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// 1. Komponen Anak nerima Props
const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Project: {props.title}</Text>
  </View>
);

export default function App() {
  // 2. Definisi State
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // 3. Intro useEffect
  useEffect(() => {
    console.log('App Mounted / Rendered');
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Counter Interactive" />

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama lo..."
        placeholderTextColor="#666"
        onChangeText={(text) => setName(text)} // Event 1
      />

      <Text style={styles.result}>Halo, {name || 'Bro'}!</Text>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => setCount(count + 1)} // Event 2
      >
        <Text style={styles.btnText}>Klik Aku: {count}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
  header: { marginBottom: 40, borderBottomWidth: 1, borderColor: '#f99d9d' },
  headerText: { color: '#f99d9d', fontSize: 18, fontWeight: 'bold' },
  input: { backgroundColor: '#111', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#333' },
  result: { color: '#fff', fontSize: 22, textAlign: 'center', marginBottom: 20 },
  btn: { backgroundColor: '#f99d', padding: 15, borderRadius: 15, alignItems: 'center' },
  btnText: { color: '#000', fontWeight: 'bold' }
});