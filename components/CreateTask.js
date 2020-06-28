import React from 'react';
import Production from './Production'

export default class CreateTask {
    constructor(props) {
        super (props)

        this.state = {
            task: ''
        }
        this.props = props;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleChange (event) {
        this.ListeningStateChangedEvent({[event.target.name]: event.target.value })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.addTask(this.state)

        this.setState({
            task: ''
        })
    }

    render () {
        return (
            <Production state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}
