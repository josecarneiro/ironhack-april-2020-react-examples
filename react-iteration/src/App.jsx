import React, { Component } from 'react';
import './App.css';

const StudentInfo = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <h6>{props.age}</h6>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: 'José', age: 27 },
        { name: 'Santi', age: 30 },
        { name: 'Aline', age: 29 }
      ],
      students: [
        { name: 'Vasco', age: 30 },
        { name: 'Fábio', age: 26 },
        { name: 'Ricardo Loureiro', age: 22 }
      ]
    };
  }

  render() {
    const people = this.state.people;
    return (
      <div className="App">
        <ul>
          {people.map((person, index, originalArray) => {
            return (
              <li key={person.name}>
                <strong>{person.name}</strong> - <em>{person.age}</em>
              </li>
            );
          })}
        </ul>

        {this.state.students.map(student => {
          return <StudentInfo key={student.name} name={student.name} age={student.age} />;
        })}

        {this.state.students.map(student => <StudentInfo key={student.name} {...student} />)}
      </div>
    );
  }
}

export default App;
