// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { NavigationContainer } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           name="Login"
//           name="NewProduction"
//           name="Production"
//           component={Home}
//         />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { Text, View, Button, TextInput, StatusBar } from 'react-native';

export default function App() {


    const [value, onChangeText] = React.useState('username');

    return (
      // <View style={styles.container}>
        <View>
        <Text>CREW CALL</Text>
        <View>
            <Text>Production Login</Text>
                <View> 
                <TextInput
                          style={{
                              height: 30,
                              borderColor:'gray',
                              borderWidth: 1
                          }}
                          defaultValue="username"
                          // hook that specifies how to center on an attribute
                          onChangeText={text => onChangeText(text)}
                          value={value} 
                />
                </View>
        </View>
         <Button 
          color="black"
          title="Create Production" 
          onPress={() => 
                navigation.navigate("NewProduction")
            }
          />
      <StatusBar style="auto" /> 
      </View>
    );
  }
  