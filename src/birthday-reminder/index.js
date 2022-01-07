import React, { Component } from 'react';
import data from './data';
import ListReminder from './list';

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      date: new Date()
    }
  }

  handleClearData = () => {
    this.setState({
      data: []
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  render() {
    const { data } = this.state;
    return (
      <section className='container'>
        <h3 className='text-center'>{data.length} birthdays today</h3>
        <p className='text-center mb-4'>It is {this.state.date.toDateString()}</p>
        <ListReminder listReminder={data} />
        <button onClick={this.handleClearData}>Clear All</button>
      </section>
    )
  }
}