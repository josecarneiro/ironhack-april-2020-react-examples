import React from 'react';
import './App.css';

import PersonInformation from './components/PersonInformation';
import CityInformation from './components/CityInformation';

const App = () => {
  return (
    <div className="App">
      <CityInformation name="Lisbon">
        <span>Latitude: 38</span>
        <img src="https://source.unsplash.com/random" alt="Lisbon" />
      </CityInformation>

      <PersonInformation
        name="José"
        age={27}
        city="Lisbon"
        team="benfica"
        dateOfBirth={new Date(1993, 4, 13)}
      />
      <PersonInformation
        name="Santi"
        age={30}
        city="Buenos Aires"
        team="sporting"
        dateOfBirth={new Date(1990, 2, 31)}
      />
      <PersonInformation
        name="Aline"
        age={29}
        city="Lisbon"
        team="porto"
        dateOfBirth={new Date(1991, 4, 3)}
      />
      <PersonInformation
        name="Cesar"
        age={33}
        city="Lisbon"
        team="academica"
        dateOfBirth={new Date(1986, 8, 11)}
      />
    </div>
  );
};

export default App;
