import React from 'react';
import logo from './logo.svg';
import './App.css';

const UnderlinedMessage = () => {
  return (
    <div>
      <u>Hola Mundo</u>
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

const StrongBlock = () => {
  return (
    <div>
      <strong>Hello World</strong>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <StrongBlock />
      <ItalicBlock />
      <ItalicBlock />
      <StrongBlock />
      <StrongBlock />
      <StrongBlock />
    </div>
  );
};

export default App;
