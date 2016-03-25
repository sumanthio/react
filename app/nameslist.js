import React from 'react';

export default class Nameslist extends React.Component {
  render() {
    var names = ['a', 'b', 'c'];
    var namesList = names.map((name,index) => <li key={index}>{name}</li>)
    return (<ul>{namesList}</ul>);
  }
}
