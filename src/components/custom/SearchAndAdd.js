import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '../ui';   // use your custom UI components
import { styles } from '../../styles/styles';

export default function SearchAndAdd() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleAdd = () => {
    if (newPhrase.trim() === '') return;
    console.log('Adding new zikr:', newPhrase);
    setNewPhrase('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>

      {/* 🔍 Search Box */}
      <TextInput
        placeholder="Search zikr..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
      {/* <Button title="Search" onPress={handleSearch} /> */}
            <Button onPress={handleSearch}>Search</Button>


      {/* ➕ Add Box */}
      <TextInput
        placeholder="Add new zikr..."
        value={newPhrase}
        onChangeText={setNewPhrase}
        style={styles.input}
      />
      {/* <Button title="Add" onPress={handleAdd} /> */}
      <Button onPress={handleAdd}>Add</Button>

    </View>
  );
}
