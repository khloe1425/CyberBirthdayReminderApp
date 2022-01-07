import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <article key={data.id.toString()} className="person">
        <img src={data.image} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <p>{data.age} years</p>
        </div>
      </article>
    )
  }
}