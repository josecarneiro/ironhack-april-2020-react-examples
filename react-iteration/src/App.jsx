import React, { Component } from 'react';
import './App.css';

import students from './students.json';

const StudentInfo = props => {
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
      message: '',
      people: [
        { name: 'José', age: 27 },
        { name: 'Santi', age: 30 },
        { name: 'Aline', age: 29 }
      ],
      students: [...students]
    };
  }

  randomizeStudents = () => {
    const students = [...this.state.students];
    students.sort(() => 0.5 - Math.random());
    this.setState({
      students: students
    });
  };

  removeLastStudent = () => {
    const students = [...this.state.students];
    students.pop();
    this.setState({
      students: students
    });
  };

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

        {/* {this.state.students.map(student => <StudentInfo key={student.name} {...student} />)} */}

        <button onClick={this.randomizeStudents}>Randomized</button>
        <button onClick={this.removeLastStudent}>Remove last student</button>
      </div>
    );
  }
}

export default App;
