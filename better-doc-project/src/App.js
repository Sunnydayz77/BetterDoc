import React from 'react';
import './App.css';
import MainHeader from './components/MainHeader'
import MainContainer from './components/MainContainer'
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainContainer />
      <MainFooter />
    </div>
  );
}

export default App;
