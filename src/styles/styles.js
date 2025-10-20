import { StyleSheet } from 'react-native';
import TasbihList from '../components/custom/TasbihList';
export const styles = StyleSheet.create({
    // General container
  container: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },

  // --- Teacher Message Styles ---
  teacherBox: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  teacherTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 6,
    textAlign: 'center',
  },
  teacherText: {
    fontSize: 16,
    color: '#33691E',
    textAlign: 'center',
  },

// TasbihList styles 
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',       // horizontal layout
    alignItems: 'center',       // vertical centering
    justifyContent: 'space-between', // spread out
    marginBottom: 10,
  },
  itemName: {
    flex: 1,                    // take all available space
    fontSize: 16,
  },
  counter: {
    width: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  btn1: {
  backgroundColor: '#4CAF50',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 8,
  marginHorizontal: 5,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 2, // for Android shadow
},
  btn2: {
  backgroundColor: '#db2020ff',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 8,
  marginHorizontal: 5,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 2, // for Android shadow
},
btnText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},

//SearchAndAdd styles
input: {
  borderWidth: 1,
  borderColor: '#A5D6A7',
  borderRadius: 8,
  padding: 10,
  marginVertical: 8,
  backgroundColor: '#fff',
},
section: {
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#E8F5E9',
  borderRadius: 10,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#2E7D32',
  textAlign: 'center',
  marginBottom: 10,
},


});
