import React from 'react';
import './App.css';
import data from './data.json';
import Listing from './components/Listing/Listing';

function App() {
  return <Listing items={data} />;
}

export default App;
