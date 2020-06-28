import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function ProductionPage() {
    constructor () {
        super()
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.completeTaks = this.completeTask.bind(this);
    }

    addTask (newTask) {
        const {data} = await axios.post('/apo/production', newTask)
        this.setState({tasks: [...this.state.tasks, data]})
    }

    completeTask(taksId) {
        // stylize taks with a line through it
    }

    return (
        <View> 
            <Text>Production Name</Text>
            <View>
                Production Members
            </View>
            <View> 
                <CreateTask addTask={this.addTask} />
                {this.state.tasks}
            </View>
            
        </View>
    )
}