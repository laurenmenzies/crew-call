import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export default function CreateProduction() {
    return (
        <View> 
            <Text>New Production</Text>
            <View> 
                <Text>Production Name</Text>
                <TextInput
                    style={{
                        height: 30,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                />
            </View>
            <View> 
                <Text>Crew Members</Text>
                <TextInput
                    style={{
                        height:30,
                        borderColor: 'gray',
                        borderWidth:1
                    }}
                />
                <Button 
                    on Press = {() => {
                        // returns a team member input
                        <TextInput
                                style={{
                                height:30,
                                borderColor: 'gray',
                                borderWidth:1
                            }}
                        />
                    }}
                />
            </View>
        </View>
    )
}