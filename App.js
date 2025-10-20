import React from 'react';
// import {View, ScrollView } from 'react-native';
import {Text} from './src/components/ui/index';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
// import TeacherMessage from './src/components/custom'; 
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage/>
      {/* TODO: after creating the custom/TeacherMessage component, render it here */}
      <TasbihList />
      <SearchAndAdd />
    </ScrollView>
  
  );
}
