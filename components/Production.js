import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

    
function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default class ProductionPage extends Component() {
    constructor(props) {
        super()
        this.state = {
            tasks: []
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.readTasks = this.readTasks.bind(this);
    }

    onChangeText (text){
        let newTask = {name: text}
        const {data} = await axios.post('/api/production', newTask)
        this.setState({tasks: [...this.state.tasks, data]})
    }

    // read all the tasks from the database, 
    readTasks () {
        await axios.get('/api/production')
    }

    // stylize taks with a line through it
    completeTask(taksId) {

    }

    render() {
        return (
            <View> 
                <Text>Production Name</Text>
                <View>
                    Production Members
                </View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <View>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({ task }) => <Item name={task.name} />}
                    keyExtractor={task => task.id}
                />
                </View>
            </View>
        )
    }
}