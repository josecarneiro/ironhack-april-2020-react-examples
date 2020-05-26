import React from 'react';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <LikeButton />
    </div>
  );
}

export default App;
