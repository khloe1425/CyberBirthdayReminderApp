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
        <h3>{data.length} birthdays today</h3>
        <ListReminder listReminder={data} />
        <button onClick={this.handleClearData}>Clear All</button>
        <p className='mt-4 text-center'>It is {this.state.date.toUTCString()}</p>
      </section>
    )
  }
}