import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListAtletas from './Components/Atletas/ListAtletas';
import ListDeportes from './Components/Deportes/ListDeportes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PeriodizationAPP</h1>
      
      </header>
      <nav>
        <ListAtletas></ListAtletas>
        <ListDeportes></ListDeportes>
      </nav>
    </div>
  );
}

export default App;
