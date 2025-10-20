import React from 'react';
import {View} from 'react-native';
import {Text} from '../ui';
import {styles} from '../../styles/styles';

const TeacherMessage = () => {
    return(
        <View style={styles.teacherBox}>
            <Text style={styles.teacherTitle}>Message from Teacher</Text>
            <Text style={styles.teacherText}>The best gift you can give yourself is to be educated.</Text>
        </View>
    )
}
export default TeacherMessage;