import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export default function Login() {
    return (
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
            <View> 
                <Button
                    on Press = {() => {

                    }}
                />
            </View>
    )
}