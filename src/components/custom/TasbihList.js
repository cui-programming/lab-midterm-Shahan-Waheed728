// // // import React, { useState } from 'react';
// // // import {FlatList,View} from 'react-native'; // You may switch Text to ui/Text later
// // // import {Text,Button} from '../ui';
// // // import { styles } from '../../styles/styles';
// // // import { initialAzkaar } from '../../data/azkaar';


// // // export default function TasbihList() {
// // //   const [items, setItems] = useState(initialAzkaar);

// // //   const updateCount = (id, change) => {
// // //   const newList = [];

// // //   for (let i = 0; i < items.length; i++) {
// // //     const item = items[i];

// // //     if (item.id === id) {
// // //       // create updated object
// // //       newList.push({ ...item, count: item.count + change });
// // //     } else {
// // //       // keep same object
// // //       newList.push(item);
// // //     }
// // //   }

// // //   setItems(newList);
// // // };


// // //   // HINT ONLY (do not complete): you will need handlers like increment(id) / decrement(id)

// // //   const renderItem = ({ item }) => (
// // //     <View style={styles.itemRow}>
// // //       <Text style={styles.itemName}>{item.phrase}</Text>
// // //       <Text style={styles.counter}>{item.count}</Text>
// // //       <Button title="+" onPress={()=>updateCount(item.id,1)}/>
// // //       <Button title="-" onPress={()=>updateCount(item.id,-1)}/>
      
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={styles.section}>
// // //       <Text style={styles.sectionTitle}>Tasbih Counter</Text>
// // //       <FlatList
// // //         data={items}
// // //         keyExtractor={(it) => it.id}
// // //         renderItem={renderItem}
// // //       />
// // //     </View>
// // //   );
// // // }



import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';
import { TouchableOpacity } from 'react-native';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const updateCount = (id, change) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, count: item.count + change } : item
    );
    setItems(newList);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      {/* <Button title="+" onPress={() => updateCount(item.id, 1)} />
      <Button title="−" onPress={() => updateCount(item.id, -1)} /> */}
      {/* Increment Button */}
    <TouchableOpacity
      onPress={() => updateCount(item.id, 1)}
      style={styles.btn1}
    >
      <Text style={styles.btnText}>+</Text>
    </TouchableOpacity>

    {/* Decrement Button */}
    <TouchableOpacity
      onPress={() => updateCount(item.id, -1)}
      style={styles.btn2}
    >
      <Text style={styles.btnText}>−</Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}



// import React, { useState } from 'react';
// import { View, FlatList, Text } from 'react-native';
// import { Button } from '../ui';
// import { styles } from '../../styles/styles';
// import { initialAzkaar } from '../../data/azkaar';

// export default function TasbihList() {
//   const [items, setItems] = useState(initialAzkaar);

//   const updateCount = (id, change) => {
//     const newList = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, count: item.count + change };
//       } else {
//         return item;
//       }
//     });
//     setItems(newList);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemRow}>
//       <Text style={styles.itemName}>{item.phrase}</Text>
//       <Text style={styles.counter}>{item.count}</Text>

//       {/* ➕ Increment and ➖ Decrement buttons */}
//       <Button
//         title="+"
//         onPress={() => updateCount(item.id, 1)}
//       />
//       <Button
//         title="-"
//         onPress={() => updateCount(item.id, -1)}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Tasbih Counter</Text>
//       <FlatList
//         data={items}
//         keyExtractor={(it) => it.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }
