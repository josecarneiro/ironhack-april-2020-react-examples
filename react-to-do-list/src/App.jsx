import React, { Component } from 'react';
import './App.css';

// const generateUniqueId = () => Math.random().toString();
// const generateUniqueId = () => new Date().toString();

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      list: []
    };
  }

  handleInputChange = event => {
    const $domNode = event.target;
    const value = $domNode.value;
    const name = $domNode.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const item = this.state.item;
    // const listClone = [...this.state.list];

    // listClone.push({ id: Date.now(), value: item });

    // this.setState({
    //   list: listClone
    // });

    // this.setState({
    //   list: [...this.state.list].concat({ id: Date.now(), value: item })
    // });

    if (item) {
      this.setState({
        list: [...this.state.list, { id: Date.now(), value: item }],
        item: ''
      });
    }
  };

  deleteItem = id => {
    const filteredList = this.state.list.filter(item => item.id !== id);

    this.setState({
      list: filteredList
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmission}>
          <input
            name="item"
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
            placeholder="Write your to do item here..."
            required
          />
          <button>+</button>
        </form>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              {item.value} <button onClick={() => this.deleteItem(item.id)}>✓</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
