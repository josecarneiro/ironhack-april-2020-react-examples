import React from 'react';
import './PersonInformation.css';

const PersonInformation = props => {
  const name = props.name;
  const personsCity = props.city;
  const team = props.team;

  const dob = props.dateOfBirth;

  let color;

  switch (team) {
    case 'benfica':
      color = 'red';
      break;
    case 'sporting':
      color = 'green';
      break;
    case 'porto':
      color = 'navy';
      break;
    case 'academica':
      color = 'grey';
      break;
    default:
      color = 'yellow';
  }

  return (
    <div className="person-information" style={{ backgroundColor: color }}>
      <p>Name: {name}</p>
      <p>Age: {props.age}</p>
      <p>Date of birth: {dob.toLocaleString()}</p>
      <p>City: {personsCity}</p>
    </div>
  );
};

export default PersonInformation;
// import PersonInformation from '.'

// export { PersonInformation };
// import { PersonInformation } from '.';
