import React from 'react';
import './App.css';
import Card from './Card';
import Hero from './Hero';
import Data from './Data';
import Navbar from './Navbar';


function App() {
  const cards = Data.map(item =>
    <Card key={item.id} item={item} />)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list"> {cards}</section>

    </div>
  );
}

export default App;
