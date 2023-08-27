import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
