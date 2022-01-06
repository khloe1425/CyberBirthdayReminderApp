import React, { Component } from 'react';
import ListItem from './listItem';

export default class ListReminder extends Component {
  handleRenderList = () => {
    return this.props.listReminder.map((data) => {
      return <ListItem key={data.id} data={data} />;
    })
  }

  render() {
    return (
      <div>
        {this.handleRenderList()}
      </div>
    )
  }
}