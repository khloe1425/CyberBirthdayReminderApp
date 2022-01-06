import React, { Component } from 'react';
import data from './data';
import ListReminder from './list';

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    }
  }

  handleClearData = () => {
    this.setState({
      data: []
    })
  }

  render() {
    const { data } = this.state;
    return (
      <section className='container'>
        <h3>{data.length} birthdays today</h3>
        <ListReminder listReminder={data} />
        <button onClick={this.handleClearData}>Clear All</button>
      </section>
    )
  }
}