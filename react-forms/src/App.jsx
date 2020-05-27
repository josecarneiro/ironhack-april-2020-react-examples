import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: 'James Mercer',
      email: 'a@b.com',
      message: ''
    };
  }

  handleFormSubmission = event => {
    event.preventDefault();
    const person = this.state.person;
    const email = this.state.email;
    const message = this.state.message;
    // const { name, email, message } = this.state;
    alert(`Person with the name ${person} and the email ${email} says: "${message}" `);
  };

  handleInputChange = event => {
    const $inputDomNode = event.target;

    const inputNameAttribute = $inputDomNode.name;
    const value = $inputDomNode.value;
    // const { name, value } = $inputDomNode;

    this.setState({
      [inputNameAttribute]: value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmission}>
          <input
            name="person"
            type="text"
            placeholder="Person's Name"
            value={this.state.person}
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <textarea
            name="message"
            placeholder="Your Message Here..."
            value={this.state.message}
            onChange={this.handleInputChange}
          />

          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default App;
