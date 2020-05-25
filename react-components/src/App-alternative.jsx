import React from 'react';
import logo from './logo.svg';
import './App.css';

const UnderlinedMessage = () => {
  const message = 'Hola Mundo';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
};

const ItalicBlock = () => {
  return (
    <div>
      <em>Olá Mundo</em>
      <UnderlinedMessage />
    </div>
  );
};

const StrongBlock = props => {
  const abc = props.message;
  return (
    <div>
      <strong>{abc}</strong>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <StrongBlock message="Some Message" />

      <ItalicBlock />
      <ItalicBlock />

      <StrongBlock message="A different Message" />
      <StrongBlock message="Lorem Ipsum" />
      <StrongBlock message="José Carneiro" />
    </div>
  );
};

export default App;
