import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Login() {


    const [value, onChangeText] = React.useState('username');

    return (
      <View style={styles.container}>
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
  w