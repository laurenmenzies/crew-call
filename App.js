import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
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
                    />
                </View>
            </View>

       {/* <Button 
        color="black"
        title="Create Production" 
        onPress={() => 
            // you need to return the Create Production Page
          }
        /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
